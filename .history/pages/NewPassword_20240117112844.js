import React, { useState } from 'react';
import { StyleSheet, Text, View, StatusBar, TextInput, TouchableOpacity, Alert } from 'react-native'

export default function NewPassword({ navigation }) {

    const [password, setPassword] = useState('');

    const handleSubmite = async () => {
        try {       
            const apiUrl = 'https://your-api-endpoint.com/update-password';

            const response = await axios.post(apiUrl, {
            });
            if (response.status === 200) {
                // Show success alert and navigate to LoginPage
                Alert.alert(
                    "Password Submitted",
                    "Your new password has been successfully submitted!",
                    [{ text: "OK", onPress: () => navigation.navigate('LoginPage') }]
                );
            } else {
                console.error('API call failed:', response.data);
            }
        } catch (error) {
            console.error('API call error:', error);
        }
    };

    return (

        <View style={styles.container}>
            <StatusBar backgroundColor='#65A9E7'></StatusBar>

            {/*----------------------------HederTopic------------------------------------ */}

            <View style={styles.heder}>
                <Text style={styles.Text1}>NEW CREDENTIALS</Text>

                <View style={styles.hederText1}>
                    <Text style={{ fontSize: 15, color: '#fff' }}>Your identity has been verified</Text>
                    <Text style={{ fontSize: 15, color: '#fff' }}>set your nw passord</Text>
                </View>
            </View>

            {/*-----------------------------MiddleSection------------------------------- */}
            {/* <Text style={{alignItems:'flex-start',color:'#000',fontWeight:'800'}}>Enter New Password</Text> */}
            <View style={styles.TextInput}>
                <TextInput
                    placeholder="Enter New Password"
                    placeholderTextColor="#ffffff"
                    style={styles.Text2}
                    secureTextEntry={true}
                    value={password}
                    onChangeText={(text) => setPassword(text)}
                />

                <TextInput
                    placeholder="Enter New Password"
                    placeholderTextColor="#ffffff"
                    style={styles.Text2}
                    secureTextEntry={true}
                    value={password}
                    onChangeText={(text) => setPassword(text)}
                />

                {/* <TouchableOpacity style={styles.button} onPress={handleSubmite}> */}
                <TouchableOpacity style={styles.button} onPress={() => { navigation.navigate('LoginPage') }}>
                    <Text style={styles.buttonText}>Submite</Text>
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
    heder: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',

    },
    hederText1: {
        alignItems: 'center',
        marginTop: 20
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
    TextInput: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        width: 300,
        height: 52,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
        backgroundColor: '#F3F5F9',
        margin: 10,
        marginTop: '10%',
    },
    buttonText: {
        fontSize: 20,
        fontWeight: '700',
        color: "#000",
        fontFamily: 'Inter'
    }

})