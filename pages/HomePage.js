import React, { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Dimensions,ScrollView,SafeAreaView, Platform, StatusBar } from 'react-native'

import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Fontisto from 'react-native-vector-icons/Fontisto';
import * as Animatable from 'react-native-animatable';
import { Card, Button } from 'react-native-paper';
import { Row } from 'native-base';
// import { Button } from 'react-native-paper';
// import { DatePickerModal } from 'react-native-paper-dates';
// import { SafeAreaProvider } from "react-native-safe-area-context";
// import { registerLocale, setDefaultLocale } from 'react-native-paper-dates';

const HomePage = ({ navigation }) => {
    // const [date, setDate] = React.useState(undefined);
    // const [open, setOpen] = React.useState(false);

    // const onDismissSingle = React.useCallback(() => {
    //     setOpen(false);
    // }, [setOpen]);

    // const onConfirmSingle = React.useCallback(
    //     (params) => {
    //         setOpen(false);
    //         setDate(params.date);
    //     },
    //     [setOpen, setDate]
    // );

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor='#2b2b2b' />

            <View style={styles.header}>
                {/* <Animatable.Image
                    animation="bounceIn"
                    duraton="1500"
                    // source={require('../assets/img/homemap.jpg')}
                    style={styles.logo}
                    resizeMode="stretch"
                /> */}
                <Card style={{ margin: 20 }} >
                    <View style={{ margin: 8 }}>
                        <Text style={styles.text_footer}>From</Text>
                        <View style={styles.action}>
                            <FontAwesome name="map-marker" color="#05375a" size={15} />
                            <TextInput
                                placeholder="Current Location"
                                style={styles.textInput}
                                autoCapitalize='none'
                            />
                            <FontAwesome name="close" color="green" size={12} />
                        </View>

                        <Text style={[styles.text_footer, { marginTop: 0 }]}>To</Text>
                        <View style={styles.action}>
                            <FontAwesome name="map-marker" color="#05375a" size={15} />
                            <TextInput
                                placeholder="Where to"
                                style={styles.textInput}
                                autoCapitalize='none'
                            />
                            <TouchableOpacity>
                                <FontAwesome name="close" color="grey" size={12} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </Card>
                <View style={{ flex: 1, flexDirection: 'row', gap: 10, justifyContent: 'center' }}>
                    <Card style={{ width: '65%', height: '65%' }}>
                        <View style={{ margin: 12, }}>
                            <View style={styles.action}>
                                <Fontisto name="date" color="#05375a" size={18} />
                                <TextInput
                                    placeholder="Departur At :   Dec 25"
                                    style={styles.textInput}
                                    autoCapitalize='none'
                                />
                            </View>
                        </View>
                    </Card>
                    <Card style={{ width: '20%', height: '65%' }}>
                        <View style={{ alignItems: 'center' }}>
                            <View style={{}}>
                                <TextInput
                                    placeholder="GO"
                                    style={{ fontSize: 25, color: '#4c4ec6', }}
                                    autoCapitalize='none'
                                />
                            </View>
                        </View>
                    </Card>
                </View>
            </View>
            <View style={styles.footer}>

                {/* <SafeAreaProvider>
                    <View style={{ justifyContent: 'center', flex: 1, alignItems: 'center' }}>
                        <Button onPress={() => setOpen(true)} uppercase={false} mode="outlined">
                            Pick single date
                        </Button>
                        <DatePickerModal
                            locale="en"
                            mode="single"
                            visible={open}
                            onDismiss={onDismissSingle}
                            date={date}
                            onConfirm={onConfirmSingle}
                        />
                    </View>
                </SafeAreaProvider> */}

                <Card style={{ margin: 20 }} >
                    <View style={{ margin: 8 }}>
                        <Text style={{ color: '#000000', fontSize: 20 }}>Route             COLOMBO-GALL</Text>
                        <View style={{}}>
                            <ScrollView
                                horizontal
                                contentContainerStyle={{ paddingHorizontal: 15 }}
                                showsHorizontalScrollIndicator={false}
                            >
                                <View
                                    style={{
                                        flex: 1,
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        width: 80,
                                        borderRadius: 20,
                                        paddingVertical: 12,
                                        marginRight: 4,
                                        backgroundColor: '#fff',
                                    }}
                                >
                                    <Image source={require('../assets/img/bus2.jpg')} style={{ width: 70, height: 50 }} />
                                    <Text style={{ color: '#000' }}>Dec 28</Text>
                                    <Text style={{ color: '#000', fontSize: 12, fontWeight: 'bold' }}>
                                        2hr
                                    </Text>
                                </View>
                                <View
                                    style={{
                                        flex: 1,
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        width: 80,
                                        borderRadius: 20,
                                        paddingVertical: 12,
                                        marginRight: 4,
                                        backgroundColor: '#fff',
                                    }}
                                >
                                    <Text style={{ color: '#000' }}>Arrivel</Text>
                                    <Text style={{ color: '#000', fontSize: 16, fontWeight: 'bold' }}>
                                        Colombo
                                    </Text>
                                </View>
                            </ScrollView >
                        </View>

                        <Text style={[styles.text_footer, { marginTop: 0 }]}></Text>
                        <View style={styles.action}>
                            <Text>Travel Time  30min</Text>
                        </View>
                        <View style={{ margin: 10 }}>
                            <Button icon="ticket" mode="contained-tonal" onPress={() => console.log('Pressed')}>
                                BUY TICKET
                            </Button>
                        </View>
                    </View>
                </Card>
                <View style={styles.button1}>
                    <TouchableOpacity style={styles.footerbtn} onPress={() => navigation.navigate('FindBus')}>
                        <LinearGradient
                            colors={['#6033eb', '#754dc4']}
                            style={styles.footerbtn}>
                            <Text style={[styles.textSign, { color: '#fff' }]}>Choose Your Bus</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}
export default HomePage;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#353884'
    },
    header: {
        flex: 2,
    },
    footer: {
        flex: 3,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 0
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30
    },
    text_footer: {
        color: '#05375a',
        fontSize: 18
    },
    action: {
        flexDirection: 'row',
        marginTop: 7,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
    },
    button1: {
        alignItems: 'center',
        marginTop: 120
    },
    footerbtn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    logo: {
        width: 420,
        height: 220,
        backgroundColor: '#353884'
    },

});