import React from 'react';
import {
  Text,
  View,
  StyleSheet,
} from 'react-native'

const NotFound = () => {
  return (
    <View style={styles.container}>
      <Text>Not Found</Text>
    </View>
  );
}

export default NotFound

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
})