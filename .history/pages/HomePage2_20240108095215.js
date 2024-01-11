import { View, TouchableOpacity, StyleSheet, Dimensions, Image, StatusBar, Pressable } from 'react-native'
import React from 'react'
import * as Animatable from 'react-native-animatable';
import { useTheme } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Card, TextInput, Text } from 'react-native-paper';
import { RFValue } from 'react-native-responsive-fontsize';

const HomePage2 = ({ navigation }) => {
    const { colors } = useTheme();
    const [text, setText] = React.useState("");
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor='#85B3E9' />
            <View style={styles.header}>
                <Animatable.Image
                    animation="bounceIn"
                    duraton="1500"
                    source={require('../assets/img/homebkimg.jpg')}
                    style={styles.logo}
                    resizeMode="stretch"
                />
            </View>
            <Animatable.View style={styles.MidleContent} animation="bounceIn">
                <View style={styles.btncontainer}>
                    <Card style={styles.card}>
                        <TextInput
                            label="Date"
                            value={text}
                            onChangeText={text => setText(text)}
                            style={styles.Text1}
                            mode='outlined'
                            outlineColor='#240AE5'
                        />
                        <TextInput
                            label="From"
                            value={text}
                            onChangeText={text => setText(text)}
                            style={styles.Text1}
                            mode='outlined'
                            outlineColor='#240AE5'
                            textColor='#240AE5'
                        />
                        <TextInput
                            label="To"
                            value={text}
                            onChangeText={text => setText(text)}
                            style={styles.Text1}
                            mode='outlined'
                            outlineColor='#240AE5'
                            textColor='#240AE5'
                        />
                        <View style={{flex:1, flexDirection:'row',margin:5,gap:7}}>
                            <TextInput
                                label="Time"
                                value={text}
                                onChangeText={text => setText(text)}
                                style={styles.Text3}
                                mode='outlined'
                                outlineColor='#240AE5'
                                textColor='#240AE5'
                            />
                             <TextInput
                                label="Time"
                                value={text}
                                onChangeText={text => setText(text)}
                                style={styles.Text3}
                                mode='outlined'
                                outlineColor='#240AE5'
                             
                            />
                        </View>

                    </Card>
                </View>
            </Animatable.View>
            <Animatable.View style={styles.footer} animation="bounceIn">
                <View style={styles.btnarea}>
                    <View style={{ flex: 1, }}>
                        <TouchableOpacity style={[styles.button, styles.shadowProp]} onPress={() => { navigation.navigate('DrawerNav') }}>
                            <Text style={styles.buttonText}>Search</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Animatable.View>
        </View>
    )
}

export default HomePage2;

const { height } = Dimensions.get("screen");
const height_logo = height * 0.48;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    header: {
      flex: 4,
      alignItems: 'center',
      opacity: 0.9,
    },
    MidleContent: {
      flex: 2,
      position: 'absolute',
      marginTop: '55%',
    },
    footer: {
      flex: 1,
    },
    btncontainer: {
      flex: 1,
    },
    btnarea: {
      flex: 1,
      alignItems: 'center',
    },
    logo: {
      width: RFValue(height_logo, 580), // Use RFValue to make height_logo responsive
      height: RFValue(height_logo, 580),
      borderBottomRightRadius: 140,
      borderBottomLeftRadius: 140,
    },
    TextInput: {
      shadowColor: 'rgba(0,0,0, .4)',
      shadowOffset: { height: 2, width: 2 },
      shadowOpacity: 6,
      shadowRadius: 6,
      elevation: 20,
      backgroundColor: '#6E6C6B',
      height: RFValue(50, 580), // Use RFValue to make the height responsive
      width: RFValue(300, 580), // Use RFValue to make the width responsive
      borderRadius: 5,
      fontSize: RFValue(20, 580), // Use RFValue to make the font size responsive
    },
    buttonText: {
      color: "#ffffff",
      fontSize: RFValue(25, 580), // Use RFValue to make the font size responsive
      fontFamily: 'Inder',
      letterSpacing: 0.5,
    },
    button: {
      shadowColor: 'rgba(0,0,0, .4)',
      shadowOffset: { height: 2, width: 2 },
      shadowOpacity: 6,
      shadowRadius: 6,
      elevation: 10,
      width: RFValue(280, 580), // Use RFValue to make the width responsive
      height: RFValue(45, 580), // Use RFValue to make the height responsive
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 10,
      backgroundColor: '#65A9E7',
    },
    Text1: {
      fontSize: RFValue(14, 580), // Use RFValue to make the font size responsive
      fontWeight: 'bold',
      fontFamily: 'Inter',
      width: RFValue(250, 580), // Use RFValue to make the width responsive
      height: RFValue(50, 580), // Use RFValue to make the height responsive
      margin: RFValue(5, 580), // Use RFValue to make the margin responsive
      borderRadius: RFValue(10, 580), // Use RFValue to make the border radius responsive
    },
    Text3: {
      width: RFValue(120, 580), // Use RFValue to make the width responsive
      height: RFValue(30, 580), // Use RFValue to make the height responsive
      borderRadius: RFValue(20, 580), // Use RFValue to make the border radius responsive
    },
    card: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: RFValue('15%', 580), // Use RFValue to make the marginTop responsive
      margin: RFValue('10%', 580), // Use RFValue to make the margin responsive
      padding: RFValue(15, 580), // Use RFValue to make the padding responsive
      backgroundColor: '#fff',
    },
  });