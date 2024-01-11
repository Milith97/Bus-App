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

const BusShedule = ({ navigation }) => {
    const { colors } = useTheme();
    const [text, setText] = React.useState('');

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor='#85B3E9' />
            <View style={styles.header}>
                <Animatable.View
                    animation='bounceIn'
                    duraton='1500'
                    backgroundColor='#6033eb'
                    style={styles.logo}
                    resizeMode='stretch'
                />
            </View>

            <ScrollView style={styles.scrollView}>
                <Animatable.View style={styles.midleContent} animation='bounceIn'>
                    <View style={styles.btnContainer}>
                        <View>
                            <Text style={styles.text1}>Choose Your Bus</Text>
                        </View>
                        <View>
                            <Text style={styles.text1}>04th-Jan-2024/ Thursday</Text>
                        </View>

                        <Card style={styles.card}>
                            <TextInput
                                label='Date'
                                value={text}
                                onChangeText={(text) => setText(text)}
                                style={styles.text1}
                                mode='outlined'
                                outlineColor='#240AE5'
                            />
                        </Card>
                        <Card style={styles.card}>
                            <TextInput
                                label='Date'
                                value={text}
                                onChangeText={(text) => setText(text)}
                                style={styles.text1}
                                mode='outlined'
                                outlineColor='#240AE5'
                            />
                        </Card>
                        <Card style={styles.card}>
                            <TextInput
                                label='Date'
                                value={text}
                                onChangeText={(text) => setText(text)}
                                style={styles.text1}
                                mode='outlined'
                                outlineColor='#240AE5'
                            />
                        </Card>
                        <Card style={styles.card}>
                            <TextInput
                                label='Date'
                                value={text}
                                onChangeText={(text) => setText(text)}
                                style={styles.text1}
                                mode='outlined'
                                outlineColor='#240AE5'
                            />
                        </Card>
                        <Card style={styles.card}>
                            <TextInput
                                label='Date'
                                value={text}
                                onChangeText={(text) => setText(text)}
                                style={styles.text1}
                                mode='outlined'
                                outlineColor='#240AE5'
                            />
                        </Card>

                        {/* Add more cards as needed */}

                    </View>
                </Animatable.View>
            </ScrollView>

            {/* <Animatable.View style={styles.footer} animation="bounceIn">
                <View style={styles.btnarea}>
                    <View style={{ flex: 1, }}>
                        <TouchableOpacity style={[styles.button, styles.shadowProp]} onPress={() => { navigation.navigate('DrawerNav') }}>
                            <Text style={styles.buttonText}>Search</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Animatable.View> */}


        </SafeAreaView >
    )
}

export default BusShedule;

const { height } = Dimensions.get('screen');
const height_logo = height * 0.48;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    header: {
        flex: 1,
        alignItems: 'center',
        opacity: 0.9,
    },
    midleContent: {
        flex: 1,
        marginTop: height_logo - 20,
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
    scrollView: {
        backgroundColor: 'pink',
    },
    text1: {
        fontSize: 20,
        fontWeight: 'bold',
        fontFamily: 'Inter',
        width: 250,
        height: 50,
        margin: 5,
        borderRadius: 10,
    },
    card: {
        marginVertical: 10,
        padding: 15,
        backgroundColor: '#29B8D8',
    },
});