import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet, Dimensions, Image, StatusBar, Pressable, ScrollView, SafeAreaView } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { useTheme } from '@react-navigation/native';
import { Card, TextInput, Text, RadioButton } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/Ionicons';
import Icon3 from 'react-native-vector-icons/MaterialIcons';
import Icon4 from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon5 from 'react-native-vector-icons/Ionicons';

const PaymentPage = ({ navigation }) => {
    const { colors } = useTheme();
    const [text, setText] = useState('');
    const [selectedSeats, setSelectedSeats] = useState([]);

    const handleSeatPress = (seatNumber) => {
        const isSeatSelected = selectedSeats.includes(seatNumber);
        if (isSeatSelected) {
            setSelectedSeats(selectedSeats.filter(seat => seat !== seatNumber));
        } else {
            setSelectedSeats([...selectedSeats, seatNumber]);
        }
    };

    const renderSeats = (seatCount) => {
        const seats = [];
        for (let i = 1; i <= seatCount; i++) {
            const isSeatSelected = selectedSeats.includes(i);
            seats.push(
                <TouchableOpacity
                    key={i}
                    style={[styles.seat, isSeatSelected && styles.selectedSeat]}
                    onPress={() => handleSeatPress(i)}
                >
                    <Text style={styles.seatText}>{i}</Text>
                </TouchableOpacity>
            );

            if (i % 5 === 0 && i !== seatCount) {
                seats.push(
                    <React.Fragment key={`row-${i}`}>
                        <Icon4 name="seat-passenger" size={30} color="#000" />
                        <Icon4 name="seat-passenger" size={30} color="#000" />
                        <Icon4 name="seat-passenger" size={30} color="#000" />
                    </React.Fragment>
                );
            }
        }
        return seats;
    };


    const [selectedValue, setSelectedValue] = useState('option1');

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


                            <View style={styles.radioGroup}>
                                <View style={styles.radioButton}>
                                    <RadioButton.Android
                                        value="option1"
                                        status={selectedValue === 'option1' ?
                                            'checked' : 'unchecked'}
                                        onPress={() => setSelectedValue('option1')}
                                        color="#007BFF"
                                    />
                                    <Text style={styles.radioLabel}>
                                        Credit Card
                                    </Text>
                                </View>

                                <View style={styles.radioButton}>
                                    <RadioButton.Android
                                        value="option2"
                                        status={selectedValue === 'option2' ?
                                            'checked' : 'unchecked'}
                                        onPress={() => setSelectedValue('option2')}
                                        color="#007BFF"
                                    />
                                    <Text style={styles.radioLabel}>
                                        NextJs
                                    </Text>
                                </View>

                                <View style={styles.radioButton}>
                                    <RadioButton.Android
                                        value="option3"
                                        status={selectedValue === 'option3' ?
                                            'checked' : 'unchecked'}
                                        onPress={() => setSelectedValue('option3')}
                                        color="#007BFF"
                                    />
                                    <Text style={styles.radioLabel}>
                                        React Native
                                    </Text>
                                </View>
                            </View>
                            {/* <View style={{ flex: 1, flexDirection: 'row',alignItems:'center',marginTop:'10%', }}> */}
                            {/* <RadioButton
                                  
                                    status={ checked1 === 'first' ? 'checked' : 'unchecked'}
                                    onPress={() => setChecked1('creditCard')}
                                />
                                <Text style={{fontSize:20}}>Credit Card</Text>
                            </View>

                            <View style={{ flex: 1, flexDirection: 'row',alignItems:'center' }}>
                                <RadioButton
                                   
                                    status={checked2 === 'second' ? 'checked' : 'unchecked'}
                                    onPress={() => setChecked2('creditCard')}
                                />
                                <Text style={{fontSize:20}}>Debit Card</Text>
                            </View>

                            <View style={{ flex: 1, flexDirection: 'row',alignItems:'center' }}>
                                <RadioButton
                                  
                                    status={checked3 === 'third' ? 'checked' : 'unchecked'}
                                    onPress={() => setChecked3('creditCard')}
                                />
                                <Text style={{fontSize:20}}>Online Banking</Text>
                            </View>

                            <View style={{ flex: 1, flexDirection: 'row',alignItems:'center' }}>
                                <RadioButton
    
                                    status={checked4 === 'fourth' ? 'checked' : 'unchecked'}
                                    onPress={() => setChecked4('creditCard')}
                                />
                                <Text style={{fontSize:20}}>Cash</Text>
                            </View> */}

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
        width: height_logo,
        height: height_logo,
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
    text3: {
        fontSize: 20,
        fontWeight: '500',
        fontFamily: 'Inter',
        color: '#1c1c1c',
    },
    text4: {
        fontSize: 28,
        fontWeight: 'bold',
        fontFamily: 'Inter',
        color: '#1b1b1b',
    },
    scrollViewCard: {
        flex: 1,
    },
    cardContent: {
        flex: 1,
        flexDirection: 'row',

    },
    box1: {
        width: 30,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        backgroundColor: '#A0A0A0',
    },
    box2: {
        width: 30,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        backgroundColor: 'red',
    },
    seatScrollView: {
        marginTop: 20,
    },

    seatRow: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 10, // Adjust the margin as needed
    },
    seat: {
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        backgroundColor: '#A0A0A0',
        margin: 5,
    },

    selectedSeat: {
        backgroundColor: '#65A9E7',
    },
    seatText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    spacer: {
        width: '18%', // Adjust the width to create space between the two groups of seats
    },
    radioGroup: {
        flex:1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        marginTop: 20,
        borderRadius: 20,
        backgroundColor: 'white',
        padding: 16,
        elevation: 4,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
    radioButton: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    radioLabel: {
        marginLeft: 8,
        fontSize: 16,
        color: '#333',
    },

})
