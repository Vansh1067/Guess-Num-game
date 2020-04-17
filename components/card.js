import React from 'react';
import {View,Text,StyleSheet} from 'react-native';

import Header from '../components/Header'


const card = props=>{
return <View style={styles.card}>{props.children}</View>
}

const styles=StyleSheet.create({
    card:{
        shadowColor:'black',
        shadowOffset:{width:5,height},
        shadowOpacity:0.5,
        shadowRadius:5,
        elevation:5
    }
})

export  default card