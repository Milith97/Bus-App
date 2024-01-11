import { View, Text, StyleSheet, TouchableOpacity, StatusBar, ImageBackground, SafeAreaView } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
export default function DrawerNav({ navigation }) {
    return (
        <ImageBackground source={require('../../assets/img/homebkimg.jpg')} style={{ flex: 1, resizeMode: 'cover', }}>
            <View style={styles.container}>
                <StatusBar backgroundColor='#74A7E6' />
                <View style={{ flex: 1, justifyContent: 'space-around',}}>
                    <Text style={{ fontSize: 40, fontWeight:'bold', color:'#1E5D8B',marginLeft: '5%' }}>Hey Jhone</Text>
                </View>
                <View style={{ flex: 5, }}>
                    <View style={{ flex: 1, flexDirection: 'row',alignItems:'center',justifyContent:'center' }}>
                        <View style={{alignItems:'center',justifyContent:'center' }}>
                            <TouchableOpacity style={styles.btn1} onPress={() => { navigation.navigate('HomePage2') }} >
                                <View style={{ alignItems: 'flex-start', margin: 12 }}>
                                    <Icon name="user-circle" size={30} color="#1E5D8B" />
                                </View>
                                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                                    <Text style={styles.btnText}>Profile</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={{alignItems:'center',alignItems:'center',justifyContent:'center'  }}>
                            <TouchableOpacity style={styles.btn1} onPress={() => { navigation.navigate('HomePage2') }} >
                                <View style={{ alignItems: 'flex-start', margin: 12 }}>
                                    <Icon name="calendar-plus-o" size={30} color="#1E5D8B" />
                                </View>
                                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                                    <Text style={styles.btnText}>Booking</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{ flex: 1, flexDirection: 'row', }}>
                        <View style={{alignItems:'center',justifyContent:'center' }}>
                            <TouchableOpacity style={styles.btn2} onPress={() => { navigation.navigate('HomePage2') }}  >
                                <Text style={styles.btnText}>Ticket</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{alignItems:'center',justifyContent:'center' }}>
                            <TouchableOpacity style={styles.btn2} onPress={() => { navigation.navigate('HomePage2') }}  >
                                <Text style={styles.btnText}>Home</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{ flex: 1, }}>
                        <View style={{alignItems:'center',justifyContent:'center' }}>
                            <TouchableOpacity style={styles.btn2} onPress={() => { navigation.navigate('BusShedule') }}  >
                                <Text style={styles.btnText}>NEXT</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        </ImageBackground>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    btn1: {
        backgroundColor: '#FFFFFF',
        margin: '5%',
        borderRadius: 8,
        width: 160,
        height: 150,
        opacity: 0.7,
    },
    btn2: {
        backgroundColor: '#FFFFFF',
        margin: '5%',
        borderRadius: 8,
        width: 160,
        height: 150,
        justifyContent: 'center',
        alignItems: 'center',
        opacity: 0.7
    },
    btnText: {
        fontSize: 25,
        color: '#0177CC',
        fontFamily: 'PTSerif_Bold',
        fontWeight: 'bold'
    },
})

