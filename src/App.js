import React, { useState, useEffect } from 'react';
import connect from '@vkontakte/vkui-connect';
import { View } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';

import Home from './panels/Home';
import Emojis from './panels/Emojis';

const App = () => {
  const [activePanel, setActivePanel] = useState('home');
  const [user, setUser] = useState(null);
  //  Used for Emojis component
  const [data, setData] = useState({});

  useEffect(() => {
    connect.subscribe(e => {
      switch (e.detail.type) {
        case 'VKWebAppGetUserInfoResult':
          setUser(e.detail.data);
          break;
        default:
          console.log(e.detail.type);
      }
    });
    connect.send('VKWebAppGetUserInfo', {});
  }, []);

  const go = (route, data) => () => {
    setActivePanel(route);
    setData(data || {});
  };

  return (
    <View activePanel={activePanel}>
      <Home id="home" user={user} go={go} />
      <Emojis id="emojis" go={go} data={data} />
    </View>
  );
};

export default App;
