import React from 'react';
import {View,Text,StyleSheet} from 'react-native';

import Header from '../components/Header'


const Card = props=>{
return <View style={{...styles.card,...props.style}}>{props.children}</View>
}

const styles=StyleSheet.create({
    card:{
        shadowColor:'black',
        shadowOffset:{width:5,height:5},
        shadowOpacity:0.5,
        shadowRadius:5,
        elevation:5,
        backgroundColor:'pink'
        
        
    }
})

export  default Card