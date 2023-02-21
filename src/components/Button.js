import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import Colors from '../constants/colors'

export default function Button({ name, onPress }) {
    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={styles.text}>{name}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        elevation:5,
        backgroundColor:"#3a9bdc",
        height:55,
        width:'95%',
        justifyContent:'center',
        borderRadius:50,
        alignSelf:'center'
    },
    text: {
        color:'#fff',
        fontSize:20,
        fontWeight:'700',
        letterSpacing:1.3,
        alignSelf:'center'
    }
})