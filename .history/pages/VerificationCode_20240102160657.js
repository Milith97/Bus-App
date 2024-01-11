import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Pressable, TextInput, StatusBar } from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { CodeField, Cursor, useBlurOnFulfill, useClearByFocusCell, } from 'react-native-confirmation-code-field';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function VerificationCode({ navigation }) {

    const CELL_COUNT = 4;

    const [value, setValue] = useState('');
    const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
    const [props, getCellOnLayoutHandler] = useClearByFocusCell({
        value,
        setValue,
    });

    return (
        <SafeAreaView style={styles.root}>
            <StatusBar backgroundColor='#353884'></StatusBar>
            <View style={styles.container}>

                {/* ---------------------------HederTopic-----------------------------*/}
                <View style={styles.topic}>
                    <Text style={styles.Text1}>Verification</Text>
                </View>
                <View style={styles.hederText1}>
                    <Text style={{ fontSize: 23, color: '#fff' }}>Enter the Verification Code !</Text>
                    <Text style={{ fontSize: 15, color: '#fff' }}>We just sent yoy on your </Text>
                    <Text style={{ fontSize: 15, color: '#fff' }}>mobile number</Text>
                </View>

                {/* ----------------------------TextInput-------------------------------*/}
                <View style={styles.TextInput}>
                    <View>
                        <CodeField
                            ref={ref}
                            {...props}
                            // Use `caretHidden={false}` when users can't paste a text value, because context menu doesn't appear
                            value={value}
                            onChangeText={setValue}
                            cellCount={CELL_COUNT}
                            rootStyle={styles.codeFieldRoot}
                            keyboardType="number-pad"
                            textContentType="oneTimeCode"
                            renderCell={({ index, symbol, isFocused }) => (
                                <Text
                                    key={index}
                                    style={[styles.cell, isFocused && styles.focusCell]}
                                    onLayout={getCellOnLayoutHandler(index)}>
                                    {symbol || (isFocused ? <Cursor /> : null)}
                                </Text>
                            )}
                        />
                    </View>
                </View>
                {/* ---------------------------Resend-----------------------------*/}
                <View style={styles.footer}>
                    <View style={{color:'#000'}}>
                        <Text>if you did't receive a code! </Text>
                    </View>
                    <Pressable onPress={() => { navigation.navigate('LoginPage') }}>
                        <View style={styles.Text5}>
                            <Text>Resend</Text>
                        </View>
                    </Pressable>
                </View>

                {/* ---------------------------ButtonSection-----------------------------*/}
                <View style={styles.content}>
                    <TouchableOpacity style={styles.roundButton1} onPress={() => { navigation.navigate('NewPassword') }}>
                        <View>
                            <MaterialIcons name="navigate-next" size={55} color="#000" />
                        </View>
                    </TouchableOpacity>
                </View>

            </View>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#353884',
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
    root: { flex: 1, },
    title: { textAlign: 'center', fontSize: 30 },
    codeFieldRoot: { marginTop: 20 },
    cell: {
        width: 50,
        height: 50,
        padding: 5,
        lineHeight: 38,
        fontSize: 24,
        borderWidth: 2,
        borderColor: '#fff',
        textAlign: 'center',
    },
    focusCell: {
        borderColor: '#000',
        padding: 5,
    },
    footer: {
        flex: 1,
        flexDirection: "row",
        justifyContent: 'center',
    },
})