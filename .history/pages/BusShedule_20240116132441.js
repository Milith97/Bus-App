import React from 'react';
import { View, TouchableOpacity, StyleSheet, Dimensions, Image, StatusBar, Pressable, ScrollView, SafeAreaView, } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { useTheme } from '@react-navigation/native';
import { Card, TextInput, Text } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/Ionicons';
import { useRoute } from '@react-navigation/native';
import BusSheduleCard from '../Common/BusSheduleCard';

const BusShedule = ({ navigation }) => {
    const { colors } = useTheme();
    const [text, setText] = React.useState('');

    const { height, width } = Dimensions.get('screen');
    const height_logo = height * 0.48;
    const width_logo = width * 1.0;

    const route = useRoute();
    const { selectedFrom, selectedTo } = route.params || {};
    const selectedDate = route.params.selectedDate;

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor='#C0B2B2' />
            <View style={styles.header}>
                <Animatable.Image
                    animation='bounceIn'
                    duraton='1500'
                    source={require('../assets/img/banner2.jpg')}
                    style={[styles.logo, { width: width_logo, height: height_logo }]}
                    resizeMode='contain'
                />
            </View>
            <Pressable style={{ margin: 5 }} onPress={() => { navigation.navigate('DrawerNav') }}>
                <Icon2 name="arrow-back-circle" size={50} color="#fff" />
            </Pressable>

            {/* HeaderText with position absolute */}
            <View style={styles.headerText}>
                <View style={{}}>
                    <Text style={styles.text3}> Choose Your Bus </Text>
                </View>
                <Text style={styles.text1}>
                    <Text style={styles.text1}> {selectedFrom || 'From'} </Text>
                    <Icon name="arrow-right" size={20} color="#000" />
                    <Text style={styles.text1}> {selectedTo || 'To'} </Text>
                </Text>
                <Text style={styles.text2}>{selectedDate} | Friday</Text>
            </View>

            <ScrollView>
                <Animatable.View style={styles.midleContent} animation='bounceIn'>
                    <View style={styles.btnContainer}>
                        <BusSheduleCard navigation={navigation} />
                        <BusSheduleCard navigation={navigation} />
                        <BusSheduleCard navigation={navigation} />
                        <BusSheduleCard navigation={navigation} />
                        <BusSheduleCard navigation={navigation} />
                        <BusSheduleCard navigation={navigation} />
                        <BusSheduleCard navigation={navigation} />
                        <BusSheduleCard navigation={navigation} />
                        <BusSheduleCard navigation={navigation} />
                    </View>
                </Animatable.View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default BusShedule;

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
            position: 'relative',
            zIndex: 2,
        },
        midleContent: {
            flex: 2,
            marginTop: '10%',
        },
        btnContainer: {
            padding: 20,
        },
        logo: {
            borderBottomRightRadius: 140,
            borderBottomLeftRadius: 140,
        },
        buttonText: {
            color: '#F1F1F1',
            fontSize: 17,
            fontFamily: 'Inder',
            fontWeight: '800'
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
        text1: {
            fontSize: 25,
            fontWeight: '700',
            fontFamily: 'Inter',
            marginTop: '5%',
            color: '#1d1d1d',
        },
        text2: {
            fontSize: 20,
            marginTop: '5%',
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
        card: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: '5%',
            marginHorizontal: '5%',
            padding: 15,
            backgroundColor: '#29B8D8',
            borderRadius: 10,
        },
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
        }
    });
