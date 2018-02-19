import React, { Component } from 'react'
import { Router, Scene }    from 'react-native-router-flux'
import Home                 from './src/screens/Home'
import Game                 from './src/screens/Game'

export default class App extends Component {
  render() {
    return (
      <Router>
        <Scene key={'root'}>
          <Scene key={'home'} component={Home} title={'Home'} initial={true} />
          <Scene key={'game'} component={Game} title={'Game'} />
        </Scene>
      </Router>
    )
  }
}xxx