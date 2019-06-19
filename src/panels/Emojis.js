import React from 'react';
import PropTypes from 'prop-types';
import {
  Div,
  Panel,
  PanelHeader,
  HeaderButton,
  IS_PLATFORM_IOS,
} from '@vkontakte/vkui';

import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';

import Swiper from 'react-id-swiper';

import 'react-id-swiper/src/styles/css/swiper.css';
import { Virtual, EffectCoverflow } from 'swiper/dist/js/swiper.esm.js';
import './Emojis.css';

import EMOJIS from '../emojis';

import Card from '../components/Card';

const params = {
  modules: [Virtual, EffectCoverflow],
  effect: 'coverflow',
  // grabCursor: true,
  centeredSlides: true,
  simulateTouch: false,
  slidesPerView: 'auto',
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
};

const Emojis = ({ id, data, go }) => {
  return (
    <Panel id={id}>
      <PanelHeader
        left={
          <HeaderButton onClick={go('home')}>
            {IS_PLATFORM_IOS ? <Icon28ChevronBack /> : <Icon24Back />}
          </HeaderButton>
        }
      >
        {data.title || ''}
      </PanelHeader>
      <Div>
        <Swiper {...params}>
          {data.value &&
            EMOJIS[data.value].map(item => <Card key={item.en} data={item} />)}
        </Swiper>
      </Div>
    </Panel>
  );
};

Emojis.propTypes = {
  id: PropTypes.string.isRequired,
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
  }).isRequired,
  go: PropTypes.func.isRequired,
};

export default Emojis;
