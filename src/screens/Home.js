import React, { Component } from 'react'
import { connect }          from 'react-redux'
import {
  Text,
  View,
  StyleSheet,
  Button
} from 'react-native'
import { Actions } from 'react-native-router-flux';
import { Blue }             from 'qwixx/src/styles/color'

type Props = {
  history: Object
};
class Home extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text>Welcome to the Qwixx Game</Text>
        <Button
          onPress={() => Actions.game()}
          title={'Start'}
          color={Blue}
        />
      </View>
    )
  }
}

export default connect()(Home)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
})