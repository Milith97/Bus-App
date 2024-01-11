import { View, Text, StyleSheet, TouchableOpacity, StatusBar, ImageBackground } from 'react-native'
import React from 'react'

export default function DrawerNav({ navigation }) {
    return (
        <ImageBackground source={require('../../assets/img/homebkimg.jpg')} style={{ flex: 1, resizeMode: 'cover', backgroundColor: 'rgba(0, 0, 0, 0.5)',  }}>
            <View style={styles.container}>
            <StatusBar backgroundColor='rgba(234, 225, 249, 0.7)' />
                <View style={{ flex: 1, justifyContent: 'space-around', }}>
                    <Text style={{ fontSize: 40, fontWeight: 'bold', color: '#1E5D8B', marginLeft: '5%' }}>Hey Jhone</Text>
                </View>
                <View style={{ flex: 4, }}>
                    <View style={{ flex: 1, flexDirection: 'row', }}>
                        <View style={{ alignItems: 'center' }}>
                            <TouchableOpacity style={styles.btn1} onPress={() => { navigation.navigate('HomePage2') }} >
                                <Text style={styles.btnText}>Profile</Text>
                            </TouchableOpacity>
                        </View>
                        <View>
                            <TouchableOpacity style={styles.btn1} onPress={() => { navigation.navigate('HomePage2') }}>
                                <Text style={styles.btnText}>Booking</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={{ flex: 1, flexDirection: 'row', }}>
                        <View style={{ alignItems: 'center' }}>
                            <TouchableOpacity style={styles.btn2} onPress={() => { navigation.navigate('HomePage2') }}  >
                                <Text style={styles.btnText}>Ticket</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{}}>
                            <TouchableOpacity style={styles.btn2} onPress={() => { navigation.navigate('HomePage2') }}  >
                                <Text style={styles.btnText}>Home</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={{ flex: 1, flexDirection: 'row', }}>
                        <View style={{ alignItems: 'center' }}>
                            <TouchableOpacity style={styles.btn2} onPress={() => { navigation.navigate('UpdateStudent') }}  >
                                <Text style={styles.btnText}>Ticket</Text>
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
    },
    btn2: {
        backgroundColor: '#FFFFFF',
        margin: '5%',
        borderRadius: 8,
        width: 160,
        height: 150,

    },
    btnText: {

        fontSize: 25,
        color: '#E3E4E4',
        alignItems: 'center',
        fontFamily: 'PTSerif_Bold',
        justifyContent: 'center'
    },
})

// import React from 'react';
// import { View, Text, StyleSheet, TouchableOpacity, StatusBar, ImageBackground } from 'react-native';
// import { useNavigation } from '@react-navigation/native';

// export default function DrawerNav() {
//     const navigation = useNavigation();

//     const handleNavigation = (screen) => {
//         navigation.navigate(screen);
//     };

//     return (
//         <ImageBackground source={require('../../assets/img/homebkimg.jpg')} style={{ flex: 1, resizeMode: 'cover', backgroundColor: '#EAE1F9' }}>
//             <View style={styles.container}>
//                 <StatusBar backgroundColor='#EAE1F9' />
//                 <View style={styles.header}>
//                     <Text style={styles.headerText}>Hey John</Text>
//                 </View>

//                 <View style={{ flex: 4, }}>
//                     <StatusBar backgroundColor='#EAE1F9' />
//                     <View style={{ flex: 1, justifyContent: 'space-around', }}>
//                         <View style={{ flex: 1, flexDirection: 'row', }}>
//                             <View style={{ alignItems: 'center' }}>
//                                 <TouchableOpacity style={styles.btn1} onPress={() => { navigation.navigate('StudentDetail') }} >
//                                     <Text style={styles.btnText}>Profile</Text>
//                                 </TouchableOpacity>
//                             </View>
//                             <View>
//                                 <TouchableOpacity style={styles.btn1} onPress={() => { navigation.navigate('DeleteStudent') }}>
//                                     <Text style={styles.btnText}>Booking</Text>
//                                 </TouchableOpacity>
//                             </View>
//                         </View>

//                         <View style={{ flex: 1, flexDirection: 'row', }}>
//                             <View style={{ alignItems: 'center' }}>
//                                 <TouchableOpacity style={styles.btn2} onPress={() => { navigation.navigate('UpdateStudent') }}  >
//                                     <Text style={styles.btnText}>Ticket</Text>
//                                 </TouchableOpacity>
//                             </View>
//                             <View style={{}}>
//                                 <TouchableOpacity style={styles.btn2} onPress={() => { navigation.navigate('AddNewStu') }}  >
//                                     <Text style={styles.btnText}>Home</Text>
//                                 </TouchableOpacity>
//                             </View>
//                         </View>
//                     </View>
//                 </View>
//             </View>
//         </ImageBackground>
//     );
// }
// const styles = StyleSheet.create({

//     container: {
//         flex: 1

//     },
//     header: {
//         flex: 1,
//         justifyContent: 'space-around',
//     },
//     headerText: {
//         fontSize: 40,
//         fontWeight: 'bold',
//         color: '#1E5D8B',
//     },
//     buttonRow: {
//         backgroundColor: 'rgba(255, 255, 255, 0.7)', // Add some transparency to the buttons
//         borderRadius: 8,
//         marginVertical: 50,
//         padding: 25,
//     },
//     btnText: {
//         fontSize: 25,
//         color: '#E3E4E4',
//         textAlign: 'center',
//         fontFamily: 'PTSerif_Bold',
//     },
//     btn1: {
//         backgroundColor: '#FFFFFF',
//         margin: '5%',
//         borderRadius: 8,
//         width: 160,
//         height: 150,
//     },
//     btn2: {
//         backgroundColor: '#FFFFFF',
//         margin: '5%',
//         borderRadius: 8,
//         width: 160,
//         height: 150,

//     },

// });











