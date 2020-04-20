import React,{useState,useRef, useEffect} from 'react';
import {View,Text,StyleSheet, TextInput, Button,  Alert, FlatList, ScrollView} from 'react-native';

import Header from '../components/Header'
import Card from '../components/card'
const generateRandomNumber=(exclude,max=100,min=1)=>{
    min= Math.ceil(min);
    max=Math.ceil(max)
    const rn= Math.floor(Math.random()*(max-min+1)+min);
    if(rn===exclude){
        console.log(exclude)
        return generateRandomNumber(exclude,max,min)
    }else{
        return rn;
     
    }
     
 }
const StartScreen = props=>{
    const [guessNum,setGuessNum]=useState(generateRandomNumber(props.number));
    const [guessNumArray,setGuessNumArray]=useState([guessNum]);
   
    const curLow=useRef(1);
    const curHigh=useRef(100)
    useEffect(()=>{
        
        if(guessNum==props.number){
            Alert.alert('Computer Guess',"Game Is Over",[{text:'Okay'}]);
            props.rounds(guessNumArray.length)
        }
    },[guessNum])
    
    
    const [number,setNumber]=useState(props.number);
    const gameHandler=(dir)=>{
        
        if(dir=='GREATER' && guessNum>number || dir=="LOWER" && guessNum < number){
        Alert.alert('Dont Lie',"Please Choose right Option",[{text:'Sorry'}])
        return
        }
        if(dir==='LOWER'){
            curHigh.current=guessNum
        }
        else{
            curLow.current=guessNum
        }
        console.log(curLow.current,curHigh.current)
        const rndmNum=generateRandomNumber(props.number,curHigh.current,curLow.current)
        setGuessNum(rndmNum)
       setGuessNumArray([...guessNumArray,rndmNum])
}
       
//console.log(guessNumArray)
    return <View style={styles.screen}>
    <Header></Header>
    
    <View style={styles.userInfo}>
    <Text style={styles.heading}>The Guess Number :</Text>
    <Text style={styles.number}>{guessNum}</Text>
    </View>
    <View style={styles.btn}>
        <Button color='green' title="Greater" onPress={()=>{gameHandler('GREATER')}}></Button>
        <Button color='red' title="Lesser" onPress={()=>{gameHandler('LOWER')}}></Button>
    </View>
 
        <FlatList data={guessNumArray} style={styles.list} keyExtractor={(item)=>item.toString()}
 renderItem={(itemData)=><View style={styles.listItem}><Text >{ `#${guessNumArray.length-itemData.index}` }
 </Text><Text>{itemData.item}</Text></View>}></FlatList>
 

   </View>

}

const styles=StyleSheet.create({
    list:{
   
        marginHorizontal:'20%'
        
    },
    listItem:{
        borderRadius:5,
        marginVertical:10,
        borderWidth:3,
        borderColor:'black',
        fontSize:25,
        flexDirection:'row',
        justifyContent:'space-around'

    },
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