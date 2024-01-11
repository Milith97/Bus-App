import { View, Text, ImageBackground, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React from 'react'

export default function DrawerNav({ navigation }) {
    return (

        <View style={styles.container}>
            <View style={{ marginTop: '40%' }}>
                <Text style={{ fontSize: 40, fontWeight: 'bold', marginLeft: '7%', color: '#1E5D8B', }}>Hey Jhone</Text>
            </View>
           
            <View style={{ flex: 1, flexDirection: 'row', }}>
                <View style={{ marginLeft: '5%', }}>
                    <TouchableOpacity style={styles.btn1} onPress={() => { navigation.navigate('StudentDetail') }} >
                        <Text style={styles.btnText}>Profile</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity style={styles.btn1} onPress={() => { navigation.navigate('DeleteStudent') }}>
                        <Text style={styles.btnText}>Booking</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={{ flex: 1, flexDirection: 'row', }}>
                <View style={{ marginLeft: '5%' }}>
                    <TouchableOpacity style={styles.btn2} onPress={() => { navigation.navigate('UpdateStudent') }}  >
                        <Text style={styles.btnText}>Ticket</Text>
                    </TouchableOpacity>
                </View>
                <View style={{}}>
                    <TouchableOpacity style={styles.btn2} onPress={() => { navigation.navigate('AddNewStu') }}  >
                        <Text style={styles.btnText}>Home</Text>
                    </TouchableOpacity>
                </View>
            </View>


            {/*   </ImageBackground> */}

        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#EAE1F9',
    },

    backgroundImg: {
        flex: 1,
        height: 305
    },
    backgroundImg2: {
        flex: 1,

    },

    btn1: {
        backgroundColor: '#FFFFFF',
        margin: '5%',
        borderRadius: 8,
        width: 160,
        height: 90,
        padding: 8
    },

    btn2: {
        backgroundColor: '#FFFFFF',
        margin: '5%',
        borderRadius: 8,
        width: 160,
        height: 90,
        padding: 8
    },

    btnText: {
        fontSize: 25,
        color: '#E3E4E4',
        textAlign: 'center',
        fontFamily: 'PTSerif_Bold',
    },




})