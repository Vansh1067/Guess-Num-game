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
    <Text>Computer Guess Your Number</Text>
   </View>
    </View>
    <View style={styles.userInfo}>
<Text style={styles.heading} numberOfLines={2}>It take {props.rounds} rounds to guess Your Number {props.number}</Text>
    
    </View>
    <View style={styles.btn}>
        <Button color='green' title="New Game" onPress={()=>{props.onClick(null,null)}}></Button>
       
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
    fontSize:20,
    textAlign:'center'
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
    justifyContent:'space-around',
    marginTop:20
},
   input:{
        borderBottomColor:'black',
        textAlign:'center',
        borderBottomWidth:2,
        marginBottom:10
      
    }
})

export  default StartScreen