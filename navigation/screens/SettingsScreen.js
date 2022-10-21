import * as React from 'react'
import { View, Text, Button } from 'react-native'


export default function SettingsScreen({ navigation, handleLogout }) {

    
    return (
        <View styl={{ flex: 1, alignItems: 'center', justiftContent: 'center' }}>
            <Text
                onPress={() => navigation.navigate('Home')}
                style={{ fontSize: 26, fontWeight: 'bold ' }}>
                Wrapping up your day?
            </Text>
            <Button 
            title='Logout'
            onPress={() => handleLogout()}
            />


        </View>
    )

}