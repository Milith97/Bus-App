import React from 'react';
import { View, StyleSheet, Dimensions, StatusBar, Pressable, ScrollView, SafeAreaView, } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { useTheme } from '@react-navigation/native';
import { Text } from 'react-native-paper';
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
                        <BusSheduleCard navigation={navigation} serviceName="Blue Bus Express" />
                        <BusSheduleCard navigation={navigation} serviceName="Blue Bus Express"/>
                        <BusSheduleCard navigation={navigation} serviceName="Blue Bus Express"/>
                        <BusSheduleCard navigation={navigation} serviceName="Blue Bus Express"/>
                        <BusSheduleCard navigation={navigation} serviceName="Blue Bus Express"/>
                        <BusSheduleCard navigation={navigation} serviceName="Blue Bus Express"/>
                        <BusSheduleCard navigation={navigation} serviceName="Blue Bus Express"/>
                        <BusSheduleCard navigation={navigation} serviceName="Blue Bus Express"/>
                        <BusSheduleCard navigation={navigation} serviceName="Blue Bus Express"/>
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
});
