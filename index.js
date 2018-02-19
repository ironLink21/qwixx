import React, { Component } from 'react'
import { AppRegistry }      from 'react-native'
import { createStore }      from 'redux'
import { Provider }         from 'react-redux'
import rootReducer          from './src/reducers'
import App                  from './App'

const store = createStore(rootReducer)

type Props = {
  store: Object
}
class Qwixx extends Component<Props> {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    )
  }
}

AppRegistry.registerComponent('qwixx', () => Qwixx)
