import { View, TouchableOpacity, StyleSheet, Dimensions, StatusBar, ScrollView } from 'react-native'
import React, { useState } from 'react'
import * as Animatable from 'react-native-animatable';
import { useTheme } from '@react-navigation/native';
import { Card, TextInput, Text } from 'react-native-paper';
import { Button } from 'react-native'
import DatePicker from 'react-native-date-picker'
import { Picker } from '@react-native-picker/picker';
import BookMySeat2 from './BookMySeat2';
import BookMySheet from './BookMySheet';

const HomePage2 = ({ navigation }) => {
    const { colors } = useTheme();
    const [text, setText] = React.useState("");

    const { height, width } = Dimensions.get('screen');
    const height_logo = height * 0.48;
    const width_logo = width * 1.0;

    const [selectedFrom, setSelectedFrom] = useState('');
    const [selectedTo, setSelectedTo] = useState('null');

    const [date, setDate] = useState(new Date())
    const [open, setOpen] = useState(false)

    const formatDate = (date) => {
        return date.toLocaleDateString();
    };

    const handleSearch = () => {
        // ... (existing code)
    
        // Pass the selected values to BusShedule.js
        navigation.navigate('BusShedule','BookMySeat2','BookMySheet', {
          selectedFrom,
          selectedTo,
          selectedDate: formatDate(date),
        });
      };

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor='#85B3E9' />
            <View style={styles.header}>
                <Animatable.Image
                    animation="bounceIn"
                    duraton="1500"
                    source={require('../assets/img/homebkimg.jpg')}
                    style={[styles.logo, { width: width_logo, height: height_logo }]}
                    resizeMode="stretch"
                />
            </View>

            <ScrollView>
                <Animatable.View style={styles.MidleContent} animation="bounceIn">
                    <View style={styles.btncontainer}>
                        <DatePicker
                            modal
                            mode="date"
                            minimumDate={new Date()}
                            open={open}
                            date={date}
                            onConfirm={(selectedDate) => {
                                setOpen(false)
                                setDate(selectedDate)

                            }}
                            onCancel={() => {
                                setOpen(false)
                            }}
                        />

                        <Card style={styles.card}>
                            <TextInput
                                label="Date"
                                value={formatDate(date)}
                                onChangeText={(text) => setText(text)}
                                style={styles.Text1}
                                mode="outlined"
                                outlineColor='#240AE5'
                                right={<TextInput.Icon name="calendar" onPress={() => setOpen(true)} />} // Add a calendar icon
                            />
                            <View style={styles.pickerContainer}>
                                <Picker
                                    selectedValue={selectedFrom}
                                    onValueChange={(itemValue, itemIndex) => setSelectedFrom(itemValue)}
                                >
                                    <Picker.Item label="Kottawa" value="Kottawa" />
                                    <Picker.Item label="Athurugiriya" value="Athurugiriya" />
                                    <Picker.Item label="Kahathuduwa" value="Kahathuduwa" />
                                    <Picker.Item label="Gelanigama" value="Gelanigama" />
                                    <Picker.Item label="Dodangoda" value="Dodangoda" />
                                    <Picker.Item label="Welipenna" value="Welipenna" />
                                    <Picker.Item label="Kurudugahahethekma" value="Kurudugahahethekma" />
                                    <Picker.Item label="Baddegama" value="Baddegama" />
                                    <Picker.Item label="Pinnaduwa" value="Pinnaduwa" />
                                    <Picker.Item label="Imaduwa" value="Imaduwa" />
                                    <Picker.Item label="Kokmaduwa" value="Kokmaduwa" />
                                    <Picker.Item label="Godagama" value="Godagama" />
                                    <Picker.Item label="Kapuduwa" value="Kapuduwa" />
                                    <Picker.Item label="Aparekka" value="Aparekka" />
                                    <Picker.Item label="Beliatta" value="Beliatta" />
                                    <Picker.Item label="Bedigama" value="Bedigama" />
                                    <Picker.Item label="Kasagala" value="Kasagala" />
                                    <Picker.Item label="Angunukolapelessa" value="Angunukolapelessa" />
                                    <Picker.Item label="Barawakubuka" value="Barawakubuka" />
                                    <Picker.Item label="Sooriyawewa" value="Sooriyawewa" />
                                    <Picker.Item label="Andarawewa" value="Andarawewa" />
                                    <Picker.Item label="Mattala" value="Mattala" />
                                </Picker>
                            </View>
                            <View style={styles.pickerContainer}>
                                <Picker
                                    selectedValue={selectedTo}
                                    onValueChange={(itemValue, itemIndex) => setSelectedTo(itemValue)}
                                >
                                    <Picker.Item label="Kottawa" value="Kottawa" />
                                    <Picker.Item label="Athurugiriya" value="Athurugiriya" />
                                    <Picker.Item label="Kahathuduwa" value="Kahathuduwa" />
                                    <Picker.Item label="Gelanigama" value="Gelanigama" />
                                    <Picker.Item label="Dodangoda" value="Dodangoda" />
                                    <Picker.Item label="Welipenna" value="Welipenna" />
                                    <Picker.Item label="Kurudugahahethekma" value="Kurudugahahethekma" />
                                    <Picker.Item label="Baddegama" value="Baddegama" />
                                    <Picker.Item label="Pinnaduwa" value="Pinnaduwa" />
                                    <Picker.Item label="Imaduwa" value="Imaduwa" />
                                    <Picker.Item label="Kokmaduwa" value="Kokmaduwa" />
                                    <Picker.Item label="Godagama" value="Godagama" />
                                    <Picker.Item label="Kapuduwa" value="Kapuduwa" />
                                    <Picker.Item label="Aparekka" value="Aparekka" />
                                    <Picker.Item label="Beliatta" value="Beliatta" />
                                    <Picker.Item label="Bedigama" value="Bedigama" />
                                    <Picker.Item label="Kasagala" value="Kasagala" />
                                    <Picker.Item label="Angunukolapelessa" value="Angunukolapelessa" />
                                    <Picker.Item label="Barawakubuka" value="Barawakubuka" />
                                    <Picker.Item label="Sooriyawewa" value="Sooriyawewa" />
                                    <Picker.Item label="Andarawewa" value="Andarawewa" />
                                    <Picker.Item label="Mattala" value="Mattala" />
                                </Picker>
                            </View>
                            <View style={{ flex: 1, flexDirection: 'row', margin: 5, gap: 7 }}>
                                <TextInput
                                    label="Time"
                                    value={""}
                                    onChangeText={text => setText(text)}
                                    style={styles.Text3}
                                    mode='outlined'
                                    outlineColor='#240AE5'
                                    textColor='#240AE5'
                                />
                                <TextInput
                                    label="Time"
                                    value={""}
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
                            <TouchableOpacity style={[styles.button, styles.shadowProp]} onPress={handleSearch}>
                                <Text style={styles.buttonText}>Search</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Animatable.View>
            </ScrollView>
        </View>
    )
}
export default HomePage2;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    header: {
        flex: 4,
        alignItems: 'center',
        opacity: 0.9,
    },
    MidleContent: {
        flex: 1,
        marginTop: '20%',
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
        borderBottomRightRadius: 140,
        borderBottomLeftRadius: 140,
    },
    TextInput: {
        shadowColor: 'rgba(0,0,0, .4)', // IOS
        shadowOffset: { height: 2, width: 2 }, // IOS
        shadowOpacity: 6, // IOS
        shadowRadius: 6, //IOS
        elevation: 20, // Android
        backgroundColor: '#6E6C6B',
        height: 50,
        width: 300,
        borderRadius: 5,
        fontSize: 20
    },
    buttonText: {
        color: "#ffffff",
        fontSize: 25,
        fontFamily: 'Inder',
        letterSpacing: 0.5,
    },
    button: {
        shadowColor: 'rgba(0,0,0, .4)', // IOS
        shadowOffset: { height: 2, width: 2 }, // IOS
        shadowOpacity: 6, // IOS
        shadowRadius: 6, //IOS
        elevation: 10, // Android
        width: 280,
        height: 45,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        backgroundColor: '#65A9E7',
    },
    Text1: {
        fontSize: 18,
        fontWeight: 'bold',
        fontFamily: 'Inter',
        width: 250,
        height: 50,
        margin: 5,
        borderRadius: 10,
    },
    Text3: {
        width: 120,
        height: 30,
        borderRadius: 20,
    },
    card: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        margin: '10%',
        padding: 15,
        backgroundColor: '#fff',
    },
    pickerContainer: {
        borderWidth: 1,
        borderColor: '#240AE5',
        borderRadius: 5,
        marginBottom: 10,

    },
});
