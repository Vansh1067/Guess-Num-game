import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import StartScreen from './screens/startGameScreen'
import GameScreen from './screens/gameScreen';
import GameOver from './screens/endGameScreen';

export default function App() {
  const [number,setnumber]=useState('');
  const [rounds,setRounds]=useState('')
  const resethandler=(num,round)=>{
    setnumber(num);
    setRounds(round)

  }
  let contains=<StartScreen number={setnumber}></StartScreen>
  if (number){
    contains=<GameScreen number={number} rounds={setRounds}></GameScreen>
          }
  if(rounds){
    contains=<GameOver rounds={rounds} number={number} onClick={resethandler}></GameOver>
  }
  return (
    <View>{contains}</View>
      
     
  )
}

const styles = StyleSheet.create({
  container: {
    
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
