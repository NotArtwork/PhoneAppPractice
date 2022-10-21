import * as React from 'react'
import { View, Text } from 'react-native'


export default function SettingsScreen({ navigation }) {
    return (
        <View styl={{ flex: 1, alignItems: 'center', justiftContent: 'center' }}>
            <Text
                onPress={() => navigation.navigate('Home')}
                style={{ fontSize: 26, fontWeight: 'bold ' }}>
                Settings
            </Text>


        </View>
    )

}