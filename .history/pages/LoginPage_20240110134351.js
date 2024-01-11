import React, { useState } from 'react';
import { StyleSheet, Text, View, StatusBar, TextInput, TouchableOpacity, Pressable } from 'react-native'

export default function LoginPage({ navigation }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [skipSignIn, setSkipSignIn] = useState(true);

    const handleSignIn = async () => {
        try {
            const apiEndpoint = 'YOUR_API_ENDPOINT';
            const apiKey = 'YOUR_API_KEY';

            const response = await fetch(apiEndpoint, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${apiKey}`,
                },
                body: JSON.stringify({
                    email,
                    password,
                }),
            });

            if (!response.ok) {
                setErrorMessage('Invalid credentials');
                return;
            }

            navigation.navigate('HomeScreen');
        } catch (error) {
            console.error('Error during API call:', error);
        }
    };

    return (

        <View style={styles.container}>
            <StatusBar backgroundColor='#6033eb'></StatusBar>

            {/*  ----------------------------HederTopic------------------------------------ */}

            <View style={styles.heder}>
                <Text style={styles.Text1}>Enzo</Text>
            </View>

            {/*   -----------------------------MiddleSection------------------------------- */}

            <View style={styles.TextInput}>
                <TextInput
                    placeholder="Email"
                    placeholderTextColor="#ffffff"
                    style={styles.Text2}
                    onChangeText={(text) => setEmail(text)}
                />

                <TextInput
                    placeholder="Password"
                    placeholderTextColor="#ffffff"
                    style={styles.Text2}
                    secureTextEntry={true}
                    onChangeText={(text) => setPassword(text)}
                />
                <Pressable  onPress={() => { navigation.navigate('ForgotPassword') }}>
                    <Text style={styles.Text3}>Forget Password ?</Text>
                </Pressable>

                <TouchableOpacity style={styles.button} onPress={() => { navigation.navigate('SignUpPage') }}>
                    <Text style={styles.buttonText}>Sign In</Text>
                </TouchableOpacity>
            </View>

            {/*  ------------------------------footer---------------------------------- */}

            <View style={styles.footer}>
                <Text style={styles.Text4}>
                    <Text>Dont have an account? </Text>
                </Text>
                <Pressable onPress={() => { navigation.navigate('SignUpPage') }}>
                    <Text style={styles.Text5}>
                        <Text>Sign Up</Text>
                    </Text>
                </Pressable>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#6033eb',
    },
    heder: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    Text1: {
        color: "#fff",
        fontSize: 34,
        fontWeight: 'bold',
        fontFamily: 'Inter'
    },
    Text2: {
        backgroundColor: '#1f244e',
        height: 64,
        width: 343,
        fontSize: 15,
        borderRadius: 16,
        paddingLeft: 10,
        margin: 10,
        fontFamily: 'Inter',
    },
    Text3: {
        fontSize: 14,
        fontWeight: '400',
        color: '#fff',
        marginLeft: '55%',
        lineHeight: 20,
        fontFamily: 'Inter'
    },
    Text4: {
        fontSize: 15,
        fontWeight: '600',
        color: "#fff",
        marginTop: 95
    },
    Text5: {
        fontSize: 15,
        fontWeight: '600',
        color: "yellow",
        marginTop: 95,
        textDecorationLine: 'underline',
    },
    TextInput: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    footer: {
        flex: 1,
        flexDirection: "row",
        justifyContent: 'center',
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
    button: {
        width: 320,
        height: 52,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        backgroundColor: '#D1D8D9',
        margin: 10,
        marginTop: '10%'
    },
    buttonText: {
        fontSize: 20,
        fontWeight: '800',
        color: "#000",
        fontFamily: 'Inter'
    }

})