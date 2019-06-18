import React from 'react';
import PropTypes from 'prop-types';
import { Panel, List, Cell, Group, Div, PanelHeader } from '@vkontakte/vkui';

import menu from '../menu';

const Home = ({ id, go }) => (
  <Panel id={id}>
    <PanelHeader>
      Emoji Learn <span role="img">📚</span>
    </PanelHeader>

    <Div>
      <Group title="Выберите тему">
        <List>
          {menu.map(item => (
            <Cell key={item.title} onClick={go('emojis', item)} expandable>
              {item.title}
            </Cell>
          ))}
        </List>
      </Group>
    </Div>
  </Panel>
);

Home.propTypes = {
  id: PropTypes.string.isRequired,
  go: PropTypes.func.isRequired,
};

export default Home;
