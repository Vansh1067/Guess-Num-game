import React from 'react';
import {View,Text,StyleSheet} from 'react-native';

const Header=props=>{
            return(<View style={styles.screen}>
                <Text style={styles.text}>Guess A Number</Text>
            </View>)
}


const styles=StyleSheet.create({
    screen:{
        width:'100%',
        backgroundColor:'#9932cc',
        marginBottom:20
        
    },
    text:{
        textAlign:'center',
        fontSize:25,
        color:'white',
        paddingTop:60,
        paddingBottom:10
    }
})
export default Header