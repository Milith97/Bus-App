import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet, Dimensions,StatusBar, Pressable, ScrollView, SafeAreaView } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { Card, Text, RadioButton } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/Ionicons';

const PaymentPage = ({ navigation }) => {
    const [text, setText] = useState('');
    const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('creditCard');
    
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor='#59DDD2' />
            <View style={styles.header}>
                <Animatable.Image
                    animation='bounceIn'
                    duraton='1500'
                    source={require('../assets/img/seatBookBg.jpg')}
                    // backgroundColor='#65A9E7'
                    style={styles.logo}
                    resizeMode='contain'
                />
            </View>

            <Pressable style={{ margin: 5 }} onPress={() => { navigation.navigate('BusShedule') }}>
                <Icon2 name="arrow-back-circle" size={50} color="#fff" />
            </Pressable>

            <View style={styles.headerText}>
                <Text style={styles.text1}>
                    <Text style={styles.text1}> Colombo </Text>
                    <Icon name="arrow-right" size={20} color="#000" />
                    <Text style={styles.text1}> Ambalangoda </Text>
                </Text>
                <Text style={styles.text2}>04th-Jan-2024 | Thursday</Text>
            </View>

            <ScrollView >
                <Animatable.View style={styles.midleContent} animation='bounceIn'>
                    <View style={styles.btnContainer}>
                        <Card style={{ flex: 1, marginTop: '5%', padding: '3%', borderRadius: 10 }}>
                            <View style={{ flex: 1, justifyContent: 'flex-start', }}>
                                <Text style={styles.text4}>Billing Infomation</Text>
                            </View>
                            <View style={styles.cardContent}>
                                <View style={{ height: 100, gap: 5, marginTop: '12%', }}>
                                    <Text style={{ fontSize: 20, marginTop: 5, }}>Ticket Chargers</Text>
                                    <Text style={{ fontSize: 18, marginTop: 5, color: '#BF4925', fontWeight: '700' }}>Converning Fee(3%)</Text>
                                    <Text style={{ fontSize: 18, color: '#000', marginTop: 5, fontWeight: 'bold' }}>Grand Tottle</Text>
                                </View>

                                {/* Spacer */}
                                <View style={styles.spacer}></View>

                                {/* Right Content */}
                                <View style={{ flex: 1, alignItems: 'flex-end', gap: 5, marginTop: '14%', }}>
                                    <Text style={{ fontSize: 20, color: 'black' }}>Rs 1250/- </Text>
                                    <Text style={{ fontSize: 20, color: '#BF4925', }}>Rs      38/-</Text>
                                    <Text style={{ fontSize: 20, color: 'black' }}>Rs 1278/- </Text>
                                </View>
                            </View>

                            <View style={{ flex: 1, justifyContent: 'flex-start', }}>
                                <Text style={{ fontSize: 30, fontWeight: '700', marginTop: '15%', }}>Payment Method</Text>
                            </View>

                            <View style={{ alignItems: 'flex-start', marginTop: '10%', }}>
                                <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                                    <RadioButton
                                        status={selectedPaymentMethod === 'creditCard' ? 'checked' : 'unchecked'}
                                        onPress={() => setSelectedPaymentMethod('creditCard')}
                                    />
                                    <Text style={{ fontSize: 20 }}>Credit Card</Text>
                                </View>
                                <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                                    <RadioButton
                                        status={selectedPaymentMethod === 'debitCard' ? 'checked' : 'unchecked'}
                                        onPress={() => setSelectedPaymentMethod('debitCard')}
                                    />
                                    <Text style={{ fontSize: 20 }}>Debit Card</Text>
                                </View>
                                <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                                    <RadioButton
                                        status={selectedPaymentMethod === 'onlineBanking' ? 'checked' : 'unchecked'}
                                        onPress={() => setSelectedPaymentMethod('onlineBanking')}
                                    />
                                    <Text style={{ fontSize: 20 }}>Online Banking</Text>
                                </View>
                                <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                                    <RadioButton
                                        status={selectedPaymentMethod === 'cash' ? 'checked' : 'unchecked'}
                                        onPress={() => setSelectedPaymentMethod('cash')}
                                    />
                                    <Text style={{ fontSize: 20 }}>Cash</Text>
                                </View>
                            </View>

                            <Animatable.View style={styles.footer} animation="bounceIn">
                                <View style={styles.btnarea}>
                                    <View style={{}}>
                                        <TouchableOpacity style={[styles.button, styles.shadowProp]} onPress={() => { navigation.navigate('PaymentPage') }}>
                                            <Text style={styles.buttonText}>Pay Now</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </Animatable.View>
                        </Card>
                    </View>
                </Animatable.View>
            </ScrollView>
        </SafeAreaView >
    );
}
export default PaymentPage;

const { height } = Dimensions.get('screen');
const height_logo = height * 0.48;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EAEAEA',
    },
    header: {
        flex: 1,
        alignItems: 'center',
    },
    headerText: {
        alignItems: 'center',
    },
    midleContent: {
        flex: 1,
    },
    footer: {
        flex: 1,
        marginTop: 20,
        alignItems: 'center'
    },
    btnContainer: {
        padding: '8%'
    },
    logo: {
        flex:1,
        width: 100,
        height: 'auto',
        borderBottomRightRadius: 140,
        borderBottomLeftRadius: 140,
    },
    buttonText: {
        color: '#fff',
        fontSize: 25,
        fontFamily: 'Inder',
        fontWeight: '800'
    },
    button: {
        shadowColor: 'rgba(0,0,0,0.4)',
        shadowOffset: { height: 2, width: 2 },
        shadowOpacity: 6,
        shadowRadius: 6,
        elevation: 10,
        width: 270,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        backgroundColor: '#219DE1',
    },
    text1: {
        fontSize: 30,
        fontWeight: '700',
        fontFamily: 'Inter',
        color: '#1d1d1d',
    },
    text2: {
        fontSize: 20,
        fontWeight: 'bold',
        fontFamily: 'Inter',
        color: '#1b1b1b',
    },
    text4: {
        fontSize: 28,
        fontWeight: 'bold',
        fontFamily: 'Inter',
        color: '#1b1b1b',
    },
    cardContent: {
        flex: 1,
        flexDirection: 'row',
    },
    seatScrollView: {
        marginTop: 20,
    },
    spacer: {
        width: '18%', // Adjust the width to create space between the two groups of seats
    },
})
