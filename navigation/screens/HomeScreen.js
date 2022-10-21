import * as React from 'react'
import { View, Text } from 'react-native'


export default function HomeScreen({navigation}) {
    return(
        <View styl={{ flex: 1, alignItems: 'center', justiftContent: 'center'}}>
            <Text
                onPress={() => alert('This is the "Home" screen.')}
                style={{ fontSize: 26, fontWeight: 'bold '}}>
                Home
            </Text>


        </View>
    )
    
    // const styles = StyleSheet.create({
    //     container: {
    //         flex: 1,
    //         backgroundColor: '#fff',
    //         alignItems: 'center',
    //         justiftContent: 'center'
    //     }
    // })
}
