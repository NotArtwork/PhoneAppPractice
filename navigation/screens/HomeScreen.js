import * as React from 'react'
import { useState } from 'react'
import { View, Text, Image, TextInput, StyleSheet } from 'react-native'


export default function HomeScreen({navigation}) {

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

    return(
        <View style={styles.container}>

        </View>
    )
    

}
