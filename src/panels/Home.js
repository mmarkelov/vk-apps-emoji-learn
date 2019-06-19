import React from 'react';
import PropTypes from 'prop-types';
import {
  Panel,
  List,
  ListItem,
  Cell,
  Group,
  Div,
  PanelHeader,
  Avatar,
} from '@vkontakte/vkui';

import menu from '../menu';

const Home = ({ id, go, user }) => (
  <Panel id={id}>
    <PanelHeader>
      Emoji Learn <span role="img">📚</span>
    </PanelHeader>

    <Div>
      {user && (
        <Group>
          <ListItem
            before={user.photo_200 ? <Avatar src={user.photo_200} /> : null}
            description={user.city && user.city.title ? user.city.title : ''}
          >
            {`Рады видеть тебя, ${user.first_name}!`}
          </ListItem>
        </Group>
      )}
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
