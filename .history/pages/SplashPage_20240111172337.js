import { StyleSheet, Text, View,StatusBar } from 'react-native'
import React from 'react'


export default function SplashPage() {
    return (
       
        <View style={styles.container}>
             {/*  -----------------------------SplashScreen----------------------------------- */}
            <StatusBar backgroundColor='#65A9E7'></StatusBar>
            <Text style={styles.Text}>Enzo</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#65A9E7',
        justifyContent: 'center',
        alignItems: 'center'
    },
    Text: {
        color: "#fff",
        fontSize:50,
        fontWeight:'bold',
        fontFamily:'inter'
    }

})