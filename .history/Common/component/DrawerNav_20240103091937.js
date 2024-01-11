import { View, Text, StyleSheet, TouchableOpacity, StatusBar } from 'react-native'
import React from 'react'

export default function DrawerNav({ navigation }) {
    return (

        <View style={styles.container}>
            <StatusBar backgroundColor='#EAE1F9' />
            <View style={{flex:2}}>
                <Text style={{ fontSize: 40, fontWeight: 'bold', color: '#1E5D8B', }}>Hey Jhone</Text>
            </View>

            <View style={{ flex: 4, flexDirection: 'row', }}>
                <View style={{alignItems:'center' }}>
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
                <View style={{alignItems:'center'}}>
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