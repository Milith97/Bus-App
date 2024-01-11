import { StyleSheet, Text, View, StatusBar, TextInput, TouchableOpacity, Pressable } from 'react-native'
import React from 'react'

export default function LoginPage({ navigation }) {
    return (


        <View style={styles.container}>
            <StatusBar backgroundColor='#2A2A2A'></StatusBar>


            {/*  ----------------------------HederTopic------------------------------------ */}

            <View style={styles.heder}>
                <Text style={styles.Text1}>My App</Text>
            </View>

            {/*   -----------------------------MiddleSection------------------------------- */}

            <View style={styles.TextInput}>
                <TextInput
                    placeholder="Email"

                    placeholderTextColor="#ffffff"
                    style={styles.Text2}

                />

                <TextInput
                    placeholder="Password"
                    placeholderTextColor="#ffffff"
                    style={styles.Text2}

                />

                <Text style={styles.Text3}>Forget Password ?</Text>

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
        backgroundColor: '#2A2A2A',

    },
    heder: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

    },
    Text1: {
        color: "#ffffff",
        fontSize: 24,
        fontWeight: 'bold',
        fontFamily: 'Inter'

    },
    Text2: {
        backgroundColor: '#3D3D3D',
        height: 64,
        width: 343,
        fontSize: 12,
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
        backgroundColor: '#FFD482',
        margin: 10,
        marginTop: '10%'
    },
    buttonText: {
        fontSize: 20,
        fontWeight: '600',
        color: "#000",
        fontFamily: 'Inter'
    }

})