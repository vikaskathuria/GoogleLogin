import React, { useEffect, useState } from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from './screens/HomeScreen';
import DetailScreen from './screens/DetailScreen';
import Profile from './screens/Profile';
const Stack = createStackNavigator();

function HomeStack() {
    return (

        <Stack.Navigator initialRouteName='Home'>
            <Stack.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    headerShown: false
                }}
            />
                        <Stack.Screen
                name="Detail"
                component={DetailScreen}
                options={{
                    headerShown: false
                }}
            />
                        <Stack.Screen
                name="Profile"
                component={Profile}
                options={{
                    headerShown: false
                }}
            />

        </Stack.Navigator>

    )

}

export default function AppMainStack() {
    return (
        <NavigationContainer>
            <Stack.Navigator>

                <Stack.Screen
                    name="Home"
                    component={HomeStack}
                    options={{
                        headerShown: false
                    }}
                />


            </Stack.Navigator>
        </NavigationContainer>
    );
}
