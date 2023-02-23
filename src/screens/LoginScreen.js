import React, {useState} from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native'

import Button from '../components/Button'

export default function LoginScreen() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleLogin = () => {};

    return (
        <View style={styles.screen}>
            <View style={{width:'95%',alignSelf:'center'}}>
                <Text style={styles.heading}>Welcome Back</Text>
                <Text style={styles.info}>Sign in to continue</Text>
            </View>

            <View style={{width:'95%',alignSelf:'center',marginTop:'5%'}}>
                <Text>Email</Text>
                <TextInput
                    placeholder='Enter Email'
                    style={{borderBottomWidth:1,borderBottomColor:'#bebebe'}}
                    placeholderTextColor="#bebebe"
                    keyboardType="email-address"
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                />

                <Text>Password</Text>
                <TextInput
                    placeholder='Enter Password'
                    style={{borderBottomWidth:1,borderBottomColor:'#bebebe'}}
                    placeholderTextColor="#bebebe"
                    secureTextEntry={true}
                    value={password}
                    onChangeText={(text) => setPassword(text)}
                />
            </View>

            <Button
                name="Login"
                onPress={handleLogin}
            />

            <Text>Forgot Password?</Text>

            <Text>Don't have an account? SignUp</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex:1,
        backgroundColor:"#fffafa",
    },
    heading:{
        marginTop:'10%',
        fontSize:30,
        fontWeight:'800',
        color:'#464646'
    },
    info: {
        fontSize:14,
        fontWeight:'700',
        color:'#808080'
    }
})