import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import StartScreen from './screens/startGameScreen'

export default function App() {
  return (
    <View style={styles.container}>
      <StartScreen></StartScreen>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
