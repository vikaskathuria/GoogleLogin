import React, { useEffect, useState } from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
const Stack = createStackNavigator();

function AuthStack() {
    return (

        <Stack.Navigator initialRouteName='Login'>
            <Stack.Screen
                name="Login"
                component={LoginScreen}
                options={{
                    // headerShown: false
                }}
            />
        </Stack.Navigator>

    )

}
function HomeStack() {
    return (

        <Stack.Navigator initialRouteName='Home'>
            <Stack.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    // headerShown: false
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
                    name="Login"
                    component={AuthStack}
                    options={{
                        headerShown: false
                    }}
                />

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
