import React from 'react';
import {
    View,
    TouchableOpacity,
    StyleSheet,
    Dimensions,
    Image,
    StatusBar,
    Pressable,
    ScrollView,
    SafeAreaView,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import { useTheme } from '@react-navigation/native';
import { Card, TextInput, Text } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/Ionicons';
import Icon3 from 'react-native-vector-icons/MaterialIcons';

const BusShedule = ({ navigation }) => {
    const { colors } = useTheme();
    const [text, setText] = React.useState('');

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor='#C0B2B2' />
            <View style={styles.header}>
                <Animatable.Image
                    animation='bounceIn'
                    duraton='1500'
                    source={require('../assets/img/banner2.jpg')}
                    style={styles.logo}
                    resizeMode='contain'
                />
            </View>
            <Pressable style={{ margin: 5 }} >
                <Icon2 name="arrow-back-circle" size={50} color="#fff" />
            </Pressable>

            {/* HeaderText with position absolute */}
            <View style={styles.headerText}>
                <View style={{}}>
                    <Text style={styles.text3}> Choose Your Bus </Text>
                </View>
                <Text style={styles.text1}>
                    <Text style={styles.text1}> Colombo </Text>
                    <Icon name="arrow-right" size={20} color="#000" />
                    <Text style={styles.text1}> Ambalangoda </Text>
                </Text>
                <Text style={styles.text2}>04th-Jan-2024 | Thursday</Text>
            </View>

            <ScrollView>
                <Animatable.View style={styles.midleContent} animation='bounceIn'>
                    <View style={styles.btnContainer}>
                        <ScrollView style={styles.scrollViewCard}>
                            <View style={styles.cardContent}>
                                <View style={{ flex: 1, height: 150, }}>
                                    <Text style={{ fontSize: 20, fontWeight: 'bold' }}>9:00 to 11:00</Text>
                                    <Text style={{ fontSize: 18, marginTop: 5 }}>Red Bus Service</Text>
                                    <Icon3 name="airline-seat-recline-extra" size={30} color="#000" />
                                    <Text style={{ fontSize: 15, color: '#000' }}>A/C Big Bus</Text>
                                </View>
                                {/* Right Content */}
                                <View style={{ flex: 1, alignItems: 'flex-end',gap:10 }}>
                                    <Text style={{ fontSize: 26, fontWeight: 'bold', color: 'black' }}>Rs 1250/-</Text>
                                    <Text style={{ fontSize: 20, color: 'black' }}>2.5hr   </Text>
                                    <TouchableOpacity style={styles.button} onPress={() => { navigation.navigate('BookMySheet') }}>
                                        <Text style={styles.buttonText}>Book Now</Text>
                                    </TouchableOpacity>
                                </View>
                                <View>

                                </View>
                            </View>
                        </ScrollView>

                        <ScrollView style={styles.scrollViewCard}>
                            <View style={styles.cardContent}>
                                <View style={{ flex: 1, }}>
                                    <Text style={{ fontSize: 18, fontWeight: 'bold' }}>9:00 to 11:00</Text>
                                    <Text style={{ fontSize: 16, marginTop: 5 }}>Red Bus Service</Text>
                                    <Text style={{ fontSize: 14, color: '#1f1f1f' }}>A/C Big Bus</Text>
                                </View>
                                {/* Right Content */}
                                <View style={{ flex: 1, alignItems: 'flex-end' }}>
                                    <Text style={{ fontSize: 22, fontWeight: 'bold', color: 'black' }}>Rs 1250/-</Text>
                                    <Text style={{ fontSize: 16, color: 'black' }}>2.5hr</Text>
                                </View>
                            </View>
                        </ScrollView>

                        <ScrollView style={styles.scrollViewCard}>
                            <View style={styles.cardContent}>
                                <View style={{ flex: 1, }}>
                                    <Text style={{ fontSize: 18, fontWeight: 'bold' }}>9:00 to 11:00</Text>
                                    <Text style={{ fontSize: 16, marginTop: 5 }}>Red Bus Service</Text>
                                    <Text style={{ fontSize: 14, color: '#1f1f1f' }}>A/C Big Bus</Text>
                                </View>
                                {/* Right Content */}
                                <View style={{ flex: 1, alignItems: 'flex-end' }}>
                                    <Text style={{ fontSize: 22, fontWeight: 'bold', color: 'black' }}>Rs 1250/-</Text>
                                    <Text style={{ fontSize: 16, color: 'black' }}>2.5hr</Text>
                                </View>
                            </View>
                        </ScrollView>

                        <ScrollView style={styles.scrollViewCard}>
                            <View style={styles.cardContent}>
                                <View style={{ flex: 1, }}>
                                    <Text style={{ fontSize: 18, fontWeight: 'bold' }}>9:00 to 11:00</Text>
                                    <Text style={{ fontSize: 16, marginTop: 5 }}>Red Bus Service</Text>
                                    <Text style={{ fontSize: 14, color: '#1f1f1f' }}>A/C Big Bus</Text>
                                </View>
                                {/* Right Content */}
                                <View style={{ flex: 1, alignItems: 'flex-end' }}>
                                    <Text style={{ fontSize: 22, fontWeight: 'bold', color: 'black' }}>Rs 1250/-</Text>
                                    <Text style={{ fontSize: 16, color: 'black' }}>2.5hr</Text>
                                </View>
                            </View>
                        </ScrollView>

                        <ScrollView style={styles.scrollViewCard}>
                            <View style={styles.cardContent}>
                                <View style={{ flex: 1, }}>
                                    <Text style={{ fontSize: 18, fontWeight: 'bold' }}>9:00 to 11:00</Text>
                                    <Text style={{ fontSize: 16, marginTop: 5 }}>Red Bus Service</Text>
                                    <Text style={{ fontSize: 14, color: '#1f1f1f' }}>A/C Big Bus</Text>
                                </View>
                                {/* Right Content */}
                                <View style={{ flex: 1, alignItems: 'flex-end' }}>
                                    <Text style={{ fontSize: 22, fontWeight: 'bold', color: 'black' }}>Rs 1250/-</Text>
                                    <Text style={{ fontSize: 16, color: 'black' }}>2.5hr</Text>
                                </View>
                            </View>
                        </ScrollView>

                        <ScrollView style={styles.scrollViewCard}>
                            <View style={styles.cardContent}>
                                <View style={{ flex: 1, }}>
                                    <Text style={{ fontSize: 18, fontWeight: 'bold' }}>9:00 to 11:00</Text>
                                    <Text style={{ fontSize: 16, marginTop: 5 }}>Red Bus Service</Text>
                                    <Text style={{ fontSize: 14, color: '#1f1f1f' }}>A/C Big Bus</Text>
                                </View>
                                {/* Right Content */}
                                <View style={{ flex: 1, alignItems: 'flex-end' }}>
                                    <Text style={{ fontSize: 22, fontWeight: 'bold', color: 'black' }}>Rs 1250/-</Text>
                                    <Text style={{ fontSize: 16, color: 'black' }}>2.5hr</Text>
                                </View>
                            </View>
                        </ScrollView>

                        <ScrollView style={styles.scrollViewCard}>
                            <View style={styles.cardContent}>
                                <View style={{ flex: 1, }}>
                                    <Text style={{ fontSize: 18, fontWeight: 'bold' }}>9:00 to 11:00</Text>
                                    <Text style={{ fontSize: 16, marginTop: 5 }}>Red Bus Service</Text>
                                    <Text style={{ fontSize: 14, color: '#1f1f1f' }}>A/C Big Bus</Text>
                                </View>
                                {/* Right Content */}
                                <View style={{ flex: 1, alignItems: 'flex-end' }}>
                                    <Text style={{ fontSize: 22, fontWeight: 'bold', color: 'black' }}>Rs 1250/-</Text>
                                    <Text style={{ fontSize: 16, color: 'black' }}>2.5hr</Text>
                                </View>
                            </View>
                        </ScrollView>

                        <ScrollView style={styles.scrollViewCard}>
                            <View style={styles.cardContent}>
                                <View style={{ flex: 1, }}>
                                    <Text style={{ fontSize: 18, fontWeight: 'bold' }}>9:00 to 11:00</Text>
                                    <Text style={{ fontSize: 16, marginTop: 5 }}>Red Bus Service</Text>
                                    <Text style={{ fontSize: 14, color: '#1f1f1f' }}>A/C Big Bus</Text>
                                </View>
                                {/* Right Content */}
                                <View style={{ flex: 1, alignItems: 'flex-end' }}>
                                    <Text style={{ fontSize: 22, fontWeight: 'bold', color: 'black' }}>Rs 1250/-</Text>
                                    <Text style={{ fontSize: 16, color: 'black' }}>2.5hr</Text>
                                </View>
                            </View>
                        </ScrollView>
                    </View>
                </Animatable.View>
            </ScrollView>

            {/* Add the footer content as needed */}
            {/* <Animatable.View style={styles.footer} animation='bounceIn'>
                <View style={styles.btnArea}>
                    <TouchableOpacity
                        style={[styles.button, styles.shadowProp]}
                        onPress={() => {
                            navigation.navigate('DrawerNav');
                        }}>
                        <Text style={styles.buttonText}>Search</Text>
                    </TouchableOpacity>
                </View>
            </Animatable.View> */}
        </SafeAreaView>
    );
};

export default BusShedule;

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
        position: 'relative',
        zIndex: 2,

    },
    midleContent: {
        flex: 2,
        marginTop: '10%', // Adjust this value to your preference
    },
    btnContainer: {
        padding: 20,
    },
    logo: {
        width: height_logo,
        height: height_logo,
        borderBottomRightRadius: 140,
        borderBottomLeftRadius: 140,
    },
    buttonText: {
        color: '#ffffff',
        fontSize: 19,
        fontFamily: 'Inder',
        fontWeight: '800'
    },
    button: {
        shadowColor: 'rgba(0,0,0,0.4)',
        shadowOffset: { height: 2, width: 2 },
        shadowOpacity: 6,
        shadowRadius: 6,
        elevation: 10,
        width: 120,
        height: 45,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        backgroundColor: '#000',
    },
    text1: {
        fontSize: 30,
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
        marginHorizontal: '5%', // Adjust margin as needed
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
            width: 5,
            height: 10,
        },
        shadowOpacity: 0.40,
        shadowRadius: 5.65,
        elevation: 8,
    }
});







// import { View, TouchableOpacity, StyleSheet, Dimensions, Image, StatusBar, Pressable, ScrollView, SafeAreaView } from 'react-native'
// import React from 'react'
// import * as Animatable from 'react-native-animatable';
// import { useTheme } from '@react-navigation/native';
// import Icon from 'react-native-vector-icons/FontAwesome';
// import { Card, TextInput, Text } from 'react-native-paper';

// const BusShedule = ({ navigation }) => {
//     const { colors } = useTheme();
//     const [text, setText] = React.useState("");
//     return (
//         <SafeAreaView style={styles.container}>


//             <StatusBar backgroundColor='#85B3E9' />
//             <View style={styles.header}>

//                 <Animatable.View
//                     animation="bounceIn"
//                     duraton="1500"
//                     backgroundColor='#6033eb'
//                     style={styles.logo}
//                     resizeMode="stretch"

//                 />

//             </View>
//             <Animatable.View style={styles.MidleContent} animation="bounceIn">
//                 <View style={styles.btncontainer}>
//                     <View>
//                         <Text style={styles.Text1}>Choese Your Bus</Text>
//                     </View>
//                     <View>
//                         <Text style={styles.Text1}>04th-Jan-2024/ Thursday</Text>
//                     </View>
//                     <ScrollView style={styles.scrollView}>
//                         <Card style={styles.card}>
//                             <TextInput
//                                 label="Date"
//                                 value={text}
//                                 onChangeText={text => setText(text)}
//                                 style={styles.Text1}
//                                 mode='outlined'
//                                 outlineColor='#240AE5'
//                             />
//                         </Card>
//                         <Card style={styles.card}>
//                             <TextInput
//                                 label="Date"
//                                 value={text}
//                                 onChangeText={text => setText(text)}
//                                 style={styles.Text1}
//                                 mode='outlined'
//                                 outlineColor='#240AE5'
//                             />
//                         </Card>
//                         <Card style={styles.card}>
//                             <TextInput
//                                 label="Date"
//                                 value={text}
//                                 onChangeText={text => setText(text)}
//                                 style={styles.Text1}
//                                 mode='outlined'
//                                 outlineColor='#240AE5'
//                             />
//                         </Card>
//                         <Card style={styles.card}>
//                             <TextInput
//                                 label="Date"
//                                 value={text}
//                                 onChangeText={text => setText(text)}
//                                 style={styles.Text1}
//                                 mode='outlined'
//                                 outlineColor='#240AE5'
//                             />
//                         </Card>
//                         <Card style={styles.card}>
//                             <TextInput
//                                 label="Date"
//                                 value={text}
//                                 onChangeText={text => setText(text)}
//                                 style={styles.Text1}
//                                 mode='outlined'
//                                 outlineColor='#240AE5'
//                             />
//                         </Card>
//                     </ScrollView>
//                 </View>
//             </Animatable.View>
//             {/* <Animatable.View style={styles.footer} animation="bounceIn">
//                 <View style={styles.btnarea}>
//                     <View style={{ flex: 1, }}>
//                         <TouchableOpacity style={[styles.button, styles.shadowProp]} onPress={() => { navigation.navigate('DrawerNav') }}>
//                             <Text style={styles.buttonText}>Search</Text>
//                         </TouchableOpacity>
//                     </View>
//                 </View>
//             </Animatable.View> */}


//         </SafeAreaView>
//     )
// }

// export default BusShedule;

// const { height } = Dimensions.get("screen");
// const height_logo = height * 0.48;

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#fff'
//     },
//     header: {
//         flex: 4,
//         alignItems: 'center',
//         opacity: 0.9,
//     },
//     MidleContent: {
//         flex: 2,
//         position: 'absolute',
//         marginTop: '55%',
//     },
//     footer: {
//         flex: 1,
//     },
//     btncontainer: {
//         flex: 1,
//     },
//     btnarea: {
//         flex: 1,
//         alignItems: 'center',
//     },
//     logo: {
//         width: height_logo,
//         height: height_logo,
//         borderBottomRightRadius: 140,
//         borderBottomLeftRadius: 140,
//     },
//     scrollView: {
//         backgroundColor: 'pink',
//         marginHorizontal: 20,
//     },
//     TextInput: {
//         shadowColor: 'rgba(0,0,0, .4)', // IOS
//         shadowOffset: { height: 2, width: 2 }, // IOS
//         shadowOpacity: 6, // IOS
//         shadowRadius: 6, //IOS
//         elevation: 20, // Android

//         backgroundColor: '#6E6C6B',
//         height: 50,
//         width: 300,
//         borderRadius: 5,
//         fontSize: 20
//     },
//     buttonText: {
//         color: "#ffffff",
//         fontSize: 25,
//         fontFamily: 'Inder',
//         letterSpacing: 0.5,
//     },
//     button: {
//         shadowColor: 'rgba(0,0,0, .4)', // IOS
//         shadowOffset: { height: 2, width: 2 }, // IOS
//         shadowOpacity: 6, // IOS
//         shadowRadius: 6, //IOS
//         elevation: 10, // Android

//         width: 280,
//         height: 45,
//         justifyContent: 'center',
//         alignItems: 'center',
//         borderRadius: 10,
//         backgroundColor: '#65A9E7',
//     },
//     Text1: {
//         fontSize: 20,
//         fontWeight: 'bold',
//         fontFamily: 'Inter',
//         width: 250,
//         height: 50,
//         margin: 5,
//         borderRadius: 10,
//     },
//     Text2: {
//         fontSize: 15,
//         fontWeight: '600',
//         fontStyle: 'italic',
//         textDecorationLine: 'underline',
//         color: '#897A1F'
//     },
//     Text3: {
//         width: 120,
//         height: 30,
//         borderRadius: 20,
//     },
//     card: {
//         flex: 1,
//         alignItems: 'center', // Center the card horizontally
//         justifyContent: 'center',
//         marginTop: '15%', // Adjust the marginTop to position it vertically
//         margin: '10%',
//         padding: 15,
//         backgroundColor: '#29B8D8',

//     },
// });