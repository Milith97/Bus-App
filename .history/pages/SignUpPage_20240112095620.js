import { StyleSheet, Text, View, TouchableOpacity, Pressable } from 'react-native'
import React, { useState } from 'react';
import { TextInput } from 'react-native-paper';

export default function SignUpPage({ navigation }) {

    const [name, setName] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSignUp = () => {
        const userData = {
            name: "John Doe",
            mobileNumber: "1234567890",
            password: "password123",
            confirmPassword: "password123",
        };

        axios.post('https://api.example.com/signup', userData)
            .then(response => {
                console.log(response.data);
                navigation.navigate('HomePage2');
            })
            .catch(error => {
                console.error(error);
            });
    };
    return (
        <View style={styles.container}>

            {/* -----------------------------HederTopic------------------------------------ */}
            <View style={styles.heder}>
                <Text style={styles.Text1}>Enzo</Text>
            </View>

            {/* ------------------------------TextInput------------------------------- */}
            <View style={styles.TextInput}>
                <TextInput
                    label="Name"
                    TextColor="#000"
                    style={styles.Text2}
                    value={name}
                    onChangeText={text => setName(text)}
                />
                <TextInput
                    label="Mobile Number"
                    TextColor="#ffffff"
                    style={styles.Text2}
                    value={mobileNumber}
                    onChangeText={text => setMobileNumber(text)}
                />
                <TextInput
                    label="Password"
                    TextColor="#ffffff"
                    style={styles.Text2}
                    value={password}
                    onChangeText={text => setPassword(text)}
                />
                <TextInput
                    label="comfrome Password"
                    TextColor="#ffffff"
                    style={styles.Text2}
                    value={confirmPassword}
                    onChangeText={text => setConfirmPassword(text)}
                />


            </View>

            {/* ---------------------------ButtonSection----------------------------- */}
            <View style={styles.content}>
                <TouchableOpacity style={styles.button} onPress={() => { navigation.navigate('HomePage2') }}>
                    <Text style={styles.buttonText}>Sign Up</Text>
                </TouchableOpacity>
            </View>

            {/*  ------------------------------footer---------------------------------- */}

            <View style={styles.footer}>
                <View style={styles.Text4}>
                    <Text style={{ color: '#fff' }}>Have an account? </Text>
                </View>
                <Pressable onPress={() => { navigation.navigate('LoginPage') }}>
                    <View style={styles.Text5}>
                        <Text style={{ color: 'yellow' }}>Sign In</Text>
                    </View>
                </Pressable>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#65A9E7',
    },
    heder: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    TextInput: {
        flex: 4,
        justifyContent: 'center',
        alignItems: 'center',
    },
    content: {
        flex: 2,
        alignItems: 'center',
    },
    footer: {
        flex: 1,
        flexDirection: "row",
        justifyContent: 'center',
    },
    Text1: {
        color: "#fff",
        fontSize: 30,
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
        TextColor:'#fff'
    },
    Text4: {
        fontSize: 15,
        fontWeight: '600',
        color: "#fff",
    },
    Text5: {
        fontSize: 16,
        fontWeight: '600',
        color: "yellow",
        textDecorationLine: 'underline',
    },
    button: {
        width: 320,
        height: 52,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        backgroundColor: '#D1D8D9',
        marginTop: "10%",
    },
    buttonText: {
        fontSize: 20,
        fontWeight: '800',
        color: "#000",
        fontFamily: 'Inter'
    },
})
