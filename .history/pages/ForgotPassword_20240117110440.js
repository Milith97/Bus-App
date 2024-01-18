import { StyleSheet, Text, View, TouchableOpacity, Pressable, StatusBar } from 'react-native'
import React, { useState, useEffect } from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { TextInput } from 'react-native-paper';

export default function ForgotPassword({ navigation }) {

    const [numericInput, setNumericInput] = React.useState("");
    // Function to handle API call
    const handleApiCall = async () => {
        try {
            const apiUrl = 'https://your-api-endpoint.com/forgot-password';

            const response = await axios.post(apiUrl, {
                mobileNumber: numericInput,
            });

            if (response.status === 200) {
                // Navigate to the verification code screen
                navigation.navigate('VerificationCode');
            } else {
                // Handle API error
                console.error('API call failed:', response.data);
            }
        } catch (error) {
            console.error('API call error:', error);
        }
    };

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor='#65A9E7'></StatusBar>
            {/* ---------------------------HederTopic-----------------------------*/}
            <View style={styles.topic}>
                <Text style={styles.Text1}>Forgot</Text>
                <Text style={styles.Text1}>Password</Text>
            </View>
            <View style={styles.hederText1}>
                <Text style={{ fontSize: 25, color: '#fff' }}>Don't Worry !</Text>
                <Text style={{ fontSize: 15, color: '#fff', fontWeight: '400' }}>Enter Your Registrd Mobie Number </Text>
                <Text style={{ fontSize: 15, color: '#fff', fontWeight: '400' }}>and we will send you a verification Code</Text>
            </View>

            {/* ----------------------------TextInput-------------------------------*/}
            <View style={styles.TextInput}>
                <TextInput
                    label="Enter Your Mobile NUmber"
                    value={numericInput}
                    onChangeText={text => setNumericInput(text)}
                    keyboardType="numeric"
                    style={{ width: 300, height: 55 }}

                />
            </View>

            {/* ---------------------------ButtonSection-----------------------------*/}
            <View style={styles.content}>
                <TouchableOpacity style={styles.roundButton1} onPress={handleApiCall}>
                    <View>
                        <MaterialIcons name="navigate-next" size={55} color="#000" />
                    </View>
                </TouchableOpacity>
            </View>

        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#65A9E7',
    },
    topic: {
        flex: 2,
        justifyContent: 'flex-end',
        margin: 30
    },
    hederText1: {
        marginLeft: 30
    },
    TextInput: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    content: {
        flex: 2,
        alignItems: 'flex-end',
        margin: 20
    },
    Text1: {
        color: "#fff",
        fontSize: 50,
        fontWeight: 'bold',
        fontFamily: 'Inter',
    },
    Text2: {
        backgroundColor: '#1f244e',
        height: 64,
        width: 343,
        fontSize: 15,
        borderRadius: 16,
        paddingLeft: 10,
        margin: 7,
        fontFamily: 'Inter',
    },
    Text4: {
        fontSize: 15,
        fontWeight: '600',
        color: "yellow",
        marginTop: 10
    },
    Text5: {
        fontSize: 15,
        fontWeight: '600',
        color: "yellow",
        textDecorationLine: 'underline',
    },
    roundButton1: {
        width: 80,
        height: 80,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        borderRadius: 100,
        backgroundColor: '#D1D8D9',
    },
    buttonText: {
        fontSize: 20,
        fontWeight: '800',
        color: "#000",
        fontFamily: 'Inter'
    },

})