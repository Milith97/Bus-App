import { StyleSheet, Text, View, TextInput, TouchableOpacity, Pressable, } from 'react-native'
import React from 'react'

export default function SignUpPage({ navigation }) {
    return (
        <View style={styles.container}>

            {/* -----------------------------HederTopic------------------------------------ */}
            <View style={styles.heder}>
                <Text style={styles.Text1}>My App</Text>
            </View>


            {/* ------------------------------TextInput------------------------------- */}
            <View style={styles.TextInput}>
                <TextInput
                    placeholder="Name"

                    placeholderTextColor="#ffffff"
                    style={styles.Text2}

                />
                <TextInput
                    placeholder="Email Address"
                    placeholderTextColor="#ffffff"
                    style={styles.Text2}

                />
                <TextInput
                    placeholder="Password"
                    placeholderTextColor="#ffffff"
                    style={styles.Text2}

                />
                <TextInput
                    placeholder="Conform Password"
                    placeholderTextColor="#ffffff"
                    style={styles.Text2}

                />
            </View>

            {/* ---------------------------ButtonSection----------------------------- */}
            <View style={styles.content}>


                <TouchableOpacity style={styles.button} onPress={() => { navigation.navigate('WelcomePage') }}>
                    <Text style={styles.buttonText}>Sign UP</Text>
                </TouchableOpacity>
            </View>

            {/*  ------------------------------footer---------------------------------- */}

            <View style={styles.footer}>
                <Text style={styles.Text4}>
                    <Text>Have an account? </Text>
                </Text>
                <Pressable onPress={() => { navigation.navigate('LoginPage') }}>
                    <Text style={styles.Text5}>
                        <Text>Sign In</Text>
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
    TextInput: {
        flex: 4,
        justifyContent: 'center',
        alignItems: 'center',

    },
    content: {
        flex: 3,
        alignItems: 'center',

    },
    footer: {
        flex: 0.5,
        flexDirection: "row",
        justifyContent: 'center',


    }, 
    Text1: {
        color: "#ffffff",
        fontSize: 24,
        fontWeight: 'bold',
        fontFamily: 'Inter',
       
    },
    Text2: {
        backgroundColor: '#3D3D3D',
        height: 64,
        width: 343,
        fontSize: 12,
        borderRadius: 16,
        paddingLeft: 10,
        margin: 7,
        fontFamily: 'Inter',

    },
    Text4: {
        fontSize: 15,
        fontWeight: '600',
        color: "#fff",

    },
    Text5: {
        fontSize: 15,
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
        backgroundColor: '#FFD482',
        marginTop: "35%",

    },
    buttonText: {
        fontSize: 20,
        fontWeight: '600',
        color: "#000",
        fontFamily: 'Inter'
    },

})