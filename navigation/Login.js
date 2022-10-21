import * as React from 'react'
import { useState } from 'react'
import { View, Image, Text, TextInput, StyleSheet, Button } from 'react-native'


export default function Login({ isLoggedIn, setIsLoggedIn}) {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const styles = StyleSheet.create({
        container: {
            left: 0,
            flex: 1,
            backgroundColor: '#fff',
            alignItems: 'center',
            justiftContent: 'center'
        },
        inputView: {
            backgroundColor: "black",
            borderRadius: 30,
            width: "70%",
            height: 45,
            marginBottom: 20,
            alignItems: "center",
        },
        TextInput: {
            height: 50,
            flex: 1,
            padding: 10,
            marginLeft: 20,
            color: 'white'

        }
    })

    const handleLogin = () => {
        setIsLoggedIn(true)
        
    }

    return (
        <View style={styles.container}>
            <Image
                source={require('../assets/iBrain.png')}
                style={{ justifyContent: 'center', alignItems: 'center', width: 300, height: 100 }}

            />
            <Text
                onPress={() => alert('This is the "Home" screen.')}
                style={{ fontSize: 26, fontWeight: 'bold' }}>
                Login
            </Text>

            <View style={styles.inputView}>
                <TextInput
                    style={styles.TextInput}
                    placeholder='Email'
                    placeholderTextColor='#00FFFF'
                    onChangeText={(email) => setEmail(email)}>

                </TextInput>
            </View>

            <View style={styles.inputView}>
                <TextInput
                    style={styles.TextInput}
                    placeholder='Password'
                    placeholderTextColor='#00FFFF'
                    onChangeText={(password) => setEmail([password])}>

                </TextInput>
            </View>

            <Button 
            title="Login"
            onPress={() => handleLogin} />

        </View>
    )
}