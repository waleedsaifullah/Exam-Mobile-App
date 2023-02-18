import React from 'react'
import { StyleSheet, Text, View, To } from 'react-native'
import Colors from '../constants/colors'

export default function Button() {
    return (
        <View style={styles.button}>
            <Text style={styles.text}>Button</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    button: {
        elevation:5,
        backgroundColor:Colors.main,
        padding:15,
        width:'95%',
        alignSelf:'center'
    },
    text: {
        color:'#fff',
        fontSize:15,
        fontWeight:'600'
    }
})