import { StyleSheet, Text, View,StatusBar } from 'react-native'
import React from 'react'


export default function SplashPage() {
    return (
       
        <View style={styles.container}>
             {/*  -----------------------------SplashScreen----------------------------------- */}
            <StatusBar backgroundColor='#2A2A2A'></StatusBar>
            <Text style={styles.Text}>My App</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2A2A2A',
        justifyContent: 'center',
        alignItems: 'center'
    },
    Text: {
        color: "#ffffff",
        fontSize:24,
        fontWeight:'bold'
    }

})