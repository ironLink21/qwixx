import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
} from 'react-native'

type Props = {};
export default class Game extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text>Game</Text>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
})