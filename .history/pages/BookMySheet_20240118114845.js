import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet, Dimensions, Image, StatusBar, Pressable, ScrollView, SafeAreaView, Alert } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { useTheme } from '@react-navigation/native';
import { Card, TextInput, Text } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/Ionicons';
import Icon3 from 'react-native-vector-icons/MaterialIcons';
import Icon4 from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon5 from 'react-native-vector-icons/Ionicons';
import { useRoute } from '@react-navigation/native';

const BookMySheet = ({ navigation }) => {
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
    const ButtonClick = () => {
        if (selectedSeats.length > 0) {
            navigation.navigate('PaymentPage')
        } else {
            Alertlert('Select Your Seats First!')
        }
    };

    const route = useRoute();
    const { selectedFrom, selectedTo } = route.params || {};
    const selectedDate = route.params.selectedDate;

    const { height, width } = Dimensions.get('screen');
    const height_logo = height * 0.48;
    const width_logo = width * 1.0;

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
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor='#59DDD2' />
            <View style={styles.header}>
                <Animatable.Image
                    animation='bounceIn'
                    duraton='1500'
                    source={require('../assets/img/seatBookBg.jpg')}
                    // backgroundColor='#65A9E7'
                    style={[styles.logo, { width: width_logo, height: height_logo }]}
                    resizeMode='contain'
                />
            </View>

            <Pressable style={{ margin: 5 }} onPress={() => { navigation.navigate('BusShedule') }}>
                <Icon2 name="arrow-back-circle" size={50} color="#fff" />
            </Pressable>

            <View style={styles.headerText}>
                <Text style={styles.text1}>
                    <Text style={styles.text1}> {selectedFrom || 'From'} </Text>
                    <Icon name="arrow-right" size={20} color="#000" />
                    <Text style={styles.text1}> {selectedTo || 'To'} </Text>
                </Text>
                <Text style={styles.text2}>{selectedDate} | Friday</Text>
            </View>

            <ScrollView >
                <Animatable.View style={styles.midleContent} animation='bounceIn'>
                    <View style={styles.btnContainer}>
                        <View style={styles.cardContent}>
                            <View style={{ height: 100, gap: 5 }}>
                                <Text style={{ fontSize: 20, fontWeight: 'bold' }}>11:30 to 01:30</Text>
                                <Text style={{ fontSize: 18, marginTop: 5, color: '#BF4925', fontWeight: '700' }}>Yellow Star</Text>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <Icon3 name="airline-seat-recline-extra" size={30} color="#000" />
                                    <Text style={{ fontSize: 15, color: '#000', marginLeft: 5 }}>26 Seats</Text>
                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <Icon5 name="snow-outline" size={25} color="#219DE1" />
                                    </View>
                                </View>

                            </View>
                            {/* Right Content */}
                            <View style={{ flex: 1, alignItems: 'flex-end', gap: 5 }}>
                                <Text style={{ fontSize: 26, fontWeight: 'bold', color: 'black' }}>Rs 1250/-</Text>
                                <Text style={{ fontSize: 20, color: 'black' }}>2.5hr   </Text>
                            </View>
                        </View>

                        <Card style={{ flex: 1, marginTop: '5%', padding: '8%', borderRadius: 10 }}>
                            <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 19 }}>
                                <View style={{ alignItems: 'center', }}>
                                    <Text style={styles.box1}></Text>
                                    <Text style={{}}>AVAILABLE</Text>
                                </View>

                                <View style={{ alignItems: 'center' }}>
                                    <Text style={styles.box2}></Text>
                                    <Text style={{}}>BOOKED</Text>
                                </View>

                                <View style={{ alignItems: 'center' }}>
                                    <Text style={styles.box3}></Text>
                                    <Text style={{}}>YOU'R SEAT</Text>
                                </View>
                            </View>

                            <View style={styles.seatRow}>

                                {/* 2 seats on the left */}
                                {[1,].map(seatNumber => (
                                    <TouchableOpacity
                                        key={seatNumber}
                                        style={[styles.seat2, selectedSeats.includes(seatNumber)]}
                                        onPress={() => handleSeatPress(seatNumber)}
                                    >
                                        <Text style={styles.seatText}>{seatNumber}</Text>
                                    </TouchableOpacity>
                                ))}

                                {/* Spacer */}
                                <View style={styles.spacer}></View>

                                {/* 3 seats on the right */}
                                {[2, 3,].map(seatNumber => (
                                    <TouchableOpacity
                                        key={seatNumber}
                                        style={[styles.seat2, selectedSeats.includes(seatNumber)]}
                                        onPress={() => handleSeatPress(seatNumber)}
                                    >
                                        <Text style={styles.seatText}>{seatNumber}</Text>
                                    </TouchableOpacity>
                                ))}
                            </View>

                            <View style={styles.seatRow}>
                                {/* 2 seats on the left */}
                                {[4].map(seatNumber => (
                                    <TouchableOpacity
                                        key={seatNumber}
                                        style={[styles.seat, selectedSeats.includes(seatNumber) && styles.selectedSeat]}
                                        onPress={() => handleSeatPress(seatNumber)}
                                    >
                                        <Text style={styles.seatText}>{seatNumber}</Text>
                                    </TouchableOpacity>
                                ))}

                                {/* Spacer */}
                                <View style={styles.spacer}></View>

                                {/* 3 seats on the right */}
                                {[5, 6].map(seatNumber => (
                                    <TouchableOpacity
                                        key={seatNumber}
                                        style={[styles.seat, selectedSeats.includes(seatNumber) && styles.selectedSeat]}
                                        onPress={() => handleSeatPress(seatNumber)}
                                    >
                                        <Text style={styles.seatText}>{seatNumber}</Text>
                                    </TouchableOpacity>
                                ))}
                            </View>

                            <View style={styles.seatRow}>
                                {/* 2 seats on the left */}
                                {[11].map(seatNumber => (
                                    <TouchableOpacity
                                        key={seatNumber}
                                        style={[styles.seat, selectedSeats.includes(seatNumber) && styles.selectedSeat]}
                                        onPress={() => handleSeatPress(seatNumber)}
                                    >
                                        <Text style={styles.seatText}>{seatNumber}</Text>
                                    </TouchableOpacity>
                                ))}

                                {/* Spacer */}
                                <View style={styles.spacer}></View>

                                {/* 3 seats on the right */}
                                {[12, 13].map(seatNumber => (
                                    <TouchableOpacity
                                        key={seatNumber}
                                        style={[styles.seat, selectedSeats.includes(seatNumber) && styles.selectedSeat]}
                                        onPress={() => handleSeatPress(seatNumber)}
                                    >
                                        <Text style={styles.seatText}>{seatNumber}</Text>
                                    </TouchableOpacity>
                                ))}
                            </View>

                            <View style={styles.seatRow}>
                                {/* 2 seats on the left */}
                                {[14].map(seatNumber => (
                                    <TouchableOpacity
                                        key={seatNumber}
                                        style={[styles.seat, selectedSeats.includes(seatNumber) && styles.selectedSeat]}
                                        onPress={() => handleSeatPress(seatNumber)}
                                    >
                                        <Text style={styles.seatText}>{seatNumber}</Text>
                                    </TouchableOpacity>
                                ))}

                                {/* Spacer */}
                                <View style={styles.spacer}></View>

                                {/* 3 seats on the right */}
                                {[15, 16].map(seatNumber => (
                                    <TouchableOpacity
                                        key={seatNumber}
                                        style={[styles.seat, selectedSeats.includes(seatNumber) && styles.selectedSeat]}
                                        onPress={() => handleSeatPress(seatNumber)}
                                    >
                                        <Text style={styles.seatText}>{seatNumber}</Text>
                                    </TouchableOpacity>
                                ))}
                            </View>

                            <View style={styles.seatRow}>
                                {/* 2 seats on the left */}
                                {[17].map(seatNumber => (
                                    <TouchableOpacity
                                        key={seatNumber}
                                        style={[styles.seat, selectedSeats.includes(seatNumber) && styles.selectedSeat]}
                                        onPress={() => handleSeatPress(seatNumber)}
                                    >
                                        <Text style={styles.seatText}>{seatNumber}</Text>
                                    </TouchableOpacity>
                                ))}
                                <View style={styles.spacer}></View>
                                {/* 3 seats on the right */}
                                {[18, 19].map(seatNumber => (
                                    <TouchableOpacity
                                        key={seatNumber}
                                        style={[styles.seat, selectedSeats.includes(seatNumber) && styles.selectedSeat]}
                                        onPress={() => handleSeatPress(seatNumber)}
                                    >
                                        <Text style={styles.seatText}>{seatNumber}</Text>
                                    </TouchableOpacity>
                                ))}
                            </View>
                            <View style={styles.seatRow}>
                                {/* 2 seats on the left */}
                                {[20].map(seatNumber => (
                                    <TouchableOpacity
                                        key={seatNumber}
                                        style={[styles.seat, selectedSeats.includes(seatNumber) && styles.selectedSeat]}
                                        onPress={() => handleSeatPress(seatNumber)}
                                    >
                                        <Text style={styles.seatText}>{seatNumber}</Text>
                                    </TouchableOpacity>
                                ))}
                                <View style={styles.spacer}></View>
                                {/* 3 seats on the right */}
                                {[21, 22].map(seatNumber => (
                                    <TouchableOpacity
                                        key={seatNumber}
                                        style={[styles.seat, selectedSeats.includes(seatNumber) && styles.selectedSeat]}
                                        onPress={() => handleSeatPress(seatNumber)}
                                    >
                                        <Text style={styles.seatText}>{seatNumber}</Text>
                                    </TouchableOpacity>
                                ))}
                            </View>
                            <View style={styles.seatRow}>
                                {/* 2 seats on the left */}
                                {[23].map(seatNumber => (
                                    <TouchableOpacity
                                        key={seatNumber}
                                        style={[styles.seat, selectedSeats.includes(seatNumber) && styles.selectedSeat]}
                                        onPress={() => handleSeatPress(seatNumber)}
                                    >
                                        <Text style={styles.seatText}>{seatNumber}</Text>
                                    </TouchableOpacity>
                                ))}

                                {/* 3 seats on the right */}
                                {[24, 25, 27].map(seatNumber => (
                                    <TouchableOpacity
                                        key={seatNumber}
                                        style={[styles.seat, selectedSeats.includes(seatNumber) && styles.selectedSeat]}
                                        onPress={() => handleSeatPress(seatNumber)}
                                    >
                                        <Text style={styles.seatText}>{seatNumber}</Text>
                                    </TouchableOpacity>
                                ))}
                            </View>
                            <Animatable.View style={styles.footer} animation="bounceIn">
                                <View style={styles.btnarea}>
                                    <View style={{}}>
                                        <TouchableOpacity style={[styles.button, styles.shadowProp]} onPress={ButtonClick}>
                                            <Text style={styles.buttonText}>BOOK MY SEATS</Text>
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
};
export default BookMySheet;

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
    },
    btnContainer: {
        padding: '8%'
    },
    logo: {
        borderBottomRightRadius: 140,
        borderBottomLeftRadius: 140,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
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
        height: 40,
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
    scrollViewCard: {
        flex: 1,
    },
    cardContent: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: '0%',
        padding: 10,
        backgroundColor: '#fff',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.3,
        shadowRadius: 4.65,
        elevation: 8,
        borderBlockColor: '#000',
        borderWidth: 0.5,
    },
    box1: {
        width: 20,
        height: 20,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        backgroundColor: '#A0A0A0',
    },
    box2: {
        width: 20,
        height: 20,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        backgroundColor: 'red',
    },
    box3: {
        width: 20,
        height: 20,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        backgroundColor: 'green',
    },
    seatScrollView: {
        marginTop: 20,
    },

    seatRow: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 8,
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
    seat2: {
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        backgroundColor: '#D5D5D5',
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
        width: '18%',
    },
});
