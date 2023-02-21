import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Colors from '../constants/colors'

export default function SplashScreen() {
    return (
        <View style={styles.screen}>
            <Text style={styles.title}>ExamApp</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex:1,
        backgroundColor:"#fffafa",
        alignItems:'center',
        justifyContent:"center"
    },
    title: {
        alignSelf:'center',
        fontSize:50,
        fontWeight:'700',
        letterSpacing:1.2,
        color: Colors.main
    }
})