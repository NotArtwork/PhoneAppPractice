import * as React from 'react';
import { View, Text } from 'react-native'

import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Ionicons from 'react-native-vector-icons/Ionicons'

// Importing Screens
import HomeScreen from './screens/HomeScreen';
import StudentScreen from './screens/StudentScreen';
import SettingsScreen from './screens/SettingsScreen';

// Importing Screen Names
const homeName = 'Home'
const studentName = 'Students'
const menuName = 'Menu'
const logoutName = 'Logout'

const Tab = createBottomTabNavigator()

export default function MainContainer() {
    return(
        <NavigationContainer>
            <Tab.Navigator
            initialRouteName={homeName}
            screenOptions={({route}) => ({
                tabBarIcon: ({focused, color, size}) => {
                    let iconName;
                    let rn = route.name;

                    if (rn === homeName) {
                        iconName = focused ? 'home' : 'home-outline'
                    } else if ( rn === studentName) {
                        iconName = focused ? 'people' : 'people-outline'
                    } else if (rn === logoutName) {
                        iconName = focused ? 'logout' : 'logout-outline'
                    } else if (rn === menuName) {
                        iconName = focused ? 'menu' : 'menu-outline'
                    }

                    return <Ionicons name={iconName}  size={size} color={color}/>
                }
            })}

                tabBarOptions={{
                    activeTintColor: 'cyan',
                    inactiveTintColor: 'grey',
                    labelStyle: { paddingBottom: 10, fontSize: 10},
                    style: {padding: 10, height: 70}
                }}
>
            <Tab.Screen name={homeName} component={HomeScreen} />
            <Tab.Screen name={studentName} component={StudentScreen} />
            <Tab.Screen name={menuName} component={HomeScreen} />
            <Tab.Screen name={logoutName} component={SettingsScreen} />

            </Tab.Navigator>
        </NavigationContainer>
    )
}