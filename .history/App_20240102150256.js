import {StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import SplashPage from './pages/SplashPage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import WelcomePage from './pages/WelcomePage';
import ProfilePage from './pages/ProfilePage';


const Stack = createStackNavigator();

const App = () => {
    const [isAppReady, setIsAppReady] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setIsAppReady(true); 
        }, 1000); /* Adjust the delay as needed */
    }, []);

    return (
        <NavigationContainer>
            <Stack.Navigator>
                {isAppReady ? (
                    <>
                        <Stack.Screen options={{ headerShown: false }} name="LoginPage" component={LoginPage} />
                        <Stack.Screen options={{ headerShown: false }} name="SignUpPage" component={SignUpPage} />
                        <Stack.Screen options={{ headerShown: false }} name="WelcomePage" component={WelcomePage} />
                        <Stack.Screen options={{ headerShown: false }} name="ProfilePage" component={ProfilePage} />
                    </>
                ) : (
                    <Stack.Screen options={{ headerShown: false }} name="SplashScreen" component={SplashPage} />
                )}


            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default App;
