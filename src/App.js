import React from 'react';
import { View } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';

import Home from './panels/Home';

class App extends React.Component {
  state = {
    activePanel: 'home',
  };

  render() {
    return (
      <View activePanel={this.state.activePanel}>
        <Home id="home" go={this.go} />
      </View>
    );
  }
}

export default App;
