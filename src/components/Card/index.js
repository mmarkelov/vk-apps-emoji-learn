import React from 'react';
import PropTypes from 'prop-types';

import './card.css';
import ListenButton from './ListenButton';

const Card = ({ data }) => {
  const playAudio = (lang, word) => () => {
    const msg = new SpeechSynthesisUtterance();
    msg.volume = 1;
    msg.rate = 0.82;
    msg.pitch = 1.2;
    msg.text = word;
    msg.lang = 'en';
    speechSynthesis.speak(msg);
  };

  return (
    <div className="swiper-slide">
      <span role="img" className="emoji">
        {data.emoji}
      </span>
      <div className="main">
        <div className="title">{data.ru}</div>
        <div className="translate">{data.en}</div>
        <div className="audio">
          <button className="play" onClick={playAudio('en', data.en)}>
            <ListenButton />
          </button>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  data: PropTypes.shape({
    emoji: PropTypes.string.isRequired,
    ru: PropTypes.string.isRequired,
  }),
};

export default Card;
