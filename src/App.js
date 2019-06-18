import React from 'react';
import { View } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';

import Home from './panels/Home';
import Emojis from './panels/Emojis';

class App extends React.Component {
  state = {
    activePanel: 'home',
    //  Used for Emojis component
    data: {},
  };

  go = (route, data) => () => {
    this.setState({ activePanel: route, data: data || {} });
  };

  render() {
    const { activePanel, data } = this.state;

    return (
      <View activePanel={activePanel}>
        <Home id="home" go={this.go} />
        <Emojis id="emojis" go={this.go} data={data} />
      </View>
    );
  }
}

export default App;
