import React,{useState} from 'react';
import {View,Text,StyleSheet, TextInput, Button, TouchableWithoutFeedback, Keyboard} from 'react-native';

import Header from '../components/Header'
import Card from '../components/card'

const StartScreen = props=>{
    const [enterValue,setEnterValue]=useState();
    const [number,setNumber]=useState('');
   
    return <TouchableWithoutFeedback onPress={()=>{Keyboard.dismiss()}}><View style={styles.screen}>
    <Header></Header>
    <View style={styles.cardCont}>    
    <View>
    <Text>Choose A Number</Text>
    <View>
         <TextInput keyboardType="number-pad" maxLength={2} onChangeText={setEnterValue} value={enterValue}style={styles.input}></TextInput>
    </View>
    <Button color="orange" title="Choose" onPress={()=>{setNumber(enterValue)}}></Button>
    </View>
    </View>
    <View style={styles.userInfo}>
    <Text style={styles.heading}>Your Choosen Number :</Text>
     <Text style={styles.number}>{number?number:''}</Text>
    </View>
    <View style={styles.btn}>
        <Button color='green' title="StartGame" onPress={()=>{props.number(number)}}></Button>
        <Button color='red' title="ResetGame" onPress={()=>{setNumber('');setEnterValue('')}}></Button>
    </View>
    

   </View>
   </TouchableWithoutFeedback>
}

const styles=StyleSheet.create({
    cardCont:{
    
        justifyContent:'center',
        alignItems:'center',
    },
    userInfo:{
        justifyContent:'center',
        alignItems:'center',
        marginTop:30
    },
heading:{
    fontSize:20
},
number:{
    fontSize:25,
    marginVertical:10,
    paddingHorizontal:10,
    paddingTop:5,
    borderColor:'pink',
    borderWidth:5,
    borderRadius:5,
    textAlign:'center'
},
btn:{
    
    alignItems:'center',
    flexDirection:'row',
    justifyContent:'space-around'
},
   input:{
        borderBottomColor:'black',
        textAlign:'center',
        borderBottomWidth:2,
        marginBottom:10
      
    }
})

export  default StartScreen