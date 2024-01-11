import { View, TouchableOpacity, StyleSheet, Dimensions, StatusBar,ScrollView } from 'react-native'
import React from 'react'
import * as Animatable from 'react-native-animatable';
import { useTheme } from '@react-navigation/native';
import { Card, TextInput, Text } from 'react-native-paper';

const HomePage2 = ({ navigation }) => {
    const { colors } = useTheme();
    const [text, setText] = React.useState("");

    const { height, width } = Dimensions.get('screen');
    const height_logo = height * 0.48;
    const width_logo = width * 1.0;

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor='#85B3E9' />
            <View style={styles.header}>
                <Animatable.Image
                    animation="bounceIn"
                    duraton="1500"
                    source={require('../assets/img/homebkimg.jpg')}
                    style={[styles.logo, { width: width_logo, height: height_logo }]}
                    resizeMode="stretch"
                />
            </View>

            <ScrollView>
                <Animatable.View style={styles.MidleContent} animation="bounceIn">
                    <View style={styles.btncontainer}>
                        <Card style={styles.card}>
                            <TextInput
                                label="Date"
                                value={text}
                                onChangeText={text => setText(text)}
                                style={styles.Text1}
                                mode='outlined'
                                outlineColor='#240AE5'
                            />
                            <TextInput
                                label="From"
                                value={text}
                                onChangeText={text => setText(text)}
                                style={styles.Text1}
                                mode='outlined'
                                outlineColor='#240AE5'
                                textColor='#240AE5'
                            />
                            <TextInput
                                label="To"
                                value={text}
                                onChangeText={text => setText(text)}
                                style={styles.Text1}
                                mode='outlined'
                                outlineColor='#240AE5'
                                textColor='#240AE5'
                            />
                            <View style={{ flex: 1, flexDirection: 'row', margin: 5, gap: 7 }}>
                                <TextInput
                                    label="Time"
                                    value={text}
                                    onChangeText={text => setText(text)}
                                    style={styles.Text3}
                                    mode='outlined'
                                    outlineColor='#240AE5'
                                    textColor='#240AE5'
                                />
                                <TextInput
                                    label="Time"
                                    value={text}
                                    onChangeText={text => setText(text)}
                                    style={styles.Text3}
                                    mode='outlined'
                                    outlineColor='#240AE5'
                                />
                            </View>
                        </Card>
                    </View>
                </Animatable.View>
                <Animatable.View style={styles.footer} animation="bounceIn">
                    <View style={styles.btnarea}>
                        <View style={{ flex: 1, }}>
                            <TouchableOpacity style={[styles.button, styles.shadowProp]} onPress={() => { navigation.navigate('DrawerNav') }}>
                                <Text style={styles.buttonText}>Search</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Animatable.View>
            </ScrollView>
        </View>

    )
}
export default HomePage2;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    header: {
        flex: 4,
        alignItems: 'center',
        opacity: 0.9,
    },
    MidleContent: {
        flex: 1,
        marginTop: '30%',
    },
    footer: {
        flex: 1,
    },
    btncontainer: {
        flex: 1,
    },
    btnarea: {
        flex: 1,
        alignItems: 'center',
    },
    logo: {
        borderBottomRightRadius: 140,
        borderBottomLeftRadius: 140,
    },
    TextInput: {
        shadowColor: 'rgba(0,0,0, .4)', // IOS
        shadowOffset: { height: 2, width: 2 }, // IOS
        shadowOpacity: 6, // IOS
        shadowRadius: 6, //IOS
        elevation: 20, // Android

        backgroundColor: '#6E6C6B',
        height: 50,
        width: 300,
        borderRadius: 5,
        fontSize: 20
    },
    buttonText: {
        color: "#ffffff",
        fontSize: 25,
        fontFamily: 'Inder',
        letterSpacing: 0.5,
    },
    button: {
        shadowColor: 'rgba(0,0,0, .4)', // IOS
        shadowOffset: { height: 2, width: 2 }, // IOS
        shadowOpacity: 6, // IOS
        shadowRadius: 6, //IOS
        elevation: 10, // Android

        width: 280,
        height: 45,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        backgroundColor: '#65A9E7',
    },
    Text1: {
        fontSize: 14,
        fontWeight: 'bold',
        fontFamily: 'Inter',
        width: 250,
        height: 50,
        margin: 5,
        borderRadius: 10,
    },
    Text2: {
        fontSize: 15,
        fontWeight: '600',
        fontStyle: 'italic',
        textDecorationLine: 'underline',
        color: '#897A1F'
    },
    Text3: {
        width: 120,
        height: 30,
        borderRadius: 20,
    },
    card: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        margin: '10%',
        padding: 15,
        backgroundColor: '#fff',

    },
});