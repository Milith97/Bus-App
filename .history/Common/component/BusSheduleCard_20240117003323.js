import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import Icon3 from 'react-native-vector-icons/MaterialIcons';
import Icon4 from 'react-native-vector-icons/Ionicons';

const BusSheduleCard = ({ navigation, time, serviceName, seats, bustype, ticketPrice, duration }) => {
    return (
        <ScrollView style={styles.scrollViewCard}>
            <View style={styles.cardContent}>
                <View style={{ flex: 1, height: 150, gap: 5 }}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#000' }}>{time}</Text>
                    <Text style={{ fontSize: 18, marginTop: 5, color: '#BF4925', fontWeight: '700' }}>{serviceName}</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Icon3 name="airline-seat-recline-extra" size={30} color="#000" />
                        <Text style={{ fontSize: 15, color: '#000', marginLeft: 5 }}>{seats}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Icon4 name="snow-outline" size={25} color="#219DE1" />
                        <Text style={{ fontSize: 15, color: '#000', marginLeft: 5 }}>A/c -{bustype}</Text>
                    </View>
                </View>
                {/* Right Content */}
                <View style={{ flex: 1, alignItems: 'flex-end', gap: 10 }}>
                    <Text style={{ fontSize: 26, fontWeight: 'bold', color: 'black' }}>{ticketPrice}</Text>
                    <Text style={{ fontSize: 20, color: 'black' }}>{duration}   </Text>
                    <TouchableOpacity style={styles.button} onPress={() => {
                        const sheetType = props.bookSheetType
                        navigation.navigate(sheetType);
                    }}>
                        <Text style={styles.buttonText}>Book Now</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    );
};

export default BusSheduleCard;

const styles = StyleSheet.create({
    scrollViewCard: {
        flex: 1,
    },
    cardContent: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '5%',
        marginHorizontal: '5%',
        padding: 10,
        backgroundColor: '#fff',
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,
        elevation: 8,
        borderBlockColor: '#000',
        borderWidth: 0.5
    },
    button: {
        shadowColor: 'rgba(0,0,0,0.4)',
        shadowOffset: { height: 2, width: 2 },
        shadowOpacity: 6,
        shadowRadius: 6,
        elevation: 10,
        width: 110,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        backgroundColor: '#219DE1',
    },
    buttonText: {
        color: '#F1F1F1',
        fontSize: 17,
        fontFamily: 'Inder',
        fontWeight: '800'
    },
});
