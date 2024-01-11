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
        <Animatable.Image
          animation='bounceIn'
          duraton='1500'
          source={require('../assets/img/banner2.jpg')}
          style={styles.logo}
          resizeMode='contain'
        />
      </View>

      <ScrollView>
        <Animatable.View style={styles.midleContent} animation='bounceIn'>
          <View style={styles.btnContainer}>
            <Text style={styles.text1}>Choose Your Bus</Text>
            <Text style={styles.text2}>04th-Jan-2024/ Thursday</Text>

            <Card style={styles.card}>
              <ScrollView style={styles.scrollViewCard}>
                <TextInput
                  label='Date'
                  value={text}
                  onChangeText={(text) => setText(text)}
                  style={styles.textInput}
                  mode='outlined'
                  outlineColor='#240AE5'
                />
                {/* Add more components as needed */}
              </ScrollView>
            </Card>

            {/* Add more cards as needed */}
            <Card style={styles.card}>
              <ScrollView style={styles.scrollViewCard}>
                <TextInput
                  label='Date'
                  value={text}
                  onChangeText={(text) => setText(text)}
                  style={styles.textInput}
                  mode='outlined'
                  outlineColor='#240AE5'
                />
                {/* Add more components as needed */}
              </ScrollView>
            </Card>

            <Card style={styles.card}>
              <ScrollView style={styles.scrollViewCard}>
                <TextInput
                  label='Date'
                  value={text}
                  onChangeText={(text) => setText(text)}
                  style={styles.textInput}
                  mode='outlined'
                  outlineColor='#240AE5'
                />
                {/* Add more components as needed */}
              </ScrollView>
            </Card>

            <Card style={styles.card}>
              <ScrollView style={styles.scrollViewCard}>
                <TextInput
                  label='Date'
                  value={text}
                  onChangeText={(text) => setText(text)}
                  style={styles.textInput}
                  mode='outlined'
                  outlineColor='#240AE5'
                />
                {/* Add more components as needed */}
              </ScrollView>
            </Card>

            <Card style={styles.card}>
              <ScrollView style={styles.scrollViewCard}>
                <TextInput
                  label='Date'
                  value={text}
                  onChangeText={(text) => setText(text)}
                  style={styles.textInput}
                  mode='outlined'
                  outlineColor='#240AE5'
                />
                {/* Add more components as needed */}
              </ScrollView>
            </Card>

          </View>
        </Animatable.View>
      </ScrollView>

      {/* Add the footer content as needed */}
      <Animatable.View style={styles.footer} animation='bounceIn'>
        <View style={styles.btnArea}>
          <TouchableOpacity
            style={[styles.button, styles.shadowProp]}
            onPress={() => {
              navigation.navigate('DrawerNav');
            }}>
            <Text style={styles.buttonText}>Search</Text>
          </TouchableOpacity>
        </View>
      </Animatable.View>
    </SafeAreaView>
  );
};

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
  },
  midleContent: {
    flex: 2,
    marginTop: '55%',
  },
  footer: {
    flex: 1,
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
  scrollViewCard: {
    backgroundColor: 'pink',
  },
  textInput: {
    height: 50,
    width: 300,
    borderRadius: 5,
    fontSize: 20,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 25,
    fontFamily: 'Inder',
    letterSpacing: 0.5,
  },
  button: {
    shadowColor: 'rgba(0,0,0, .4)',
    shadowOffset: { height: 2, width: 2 },
    shadowOpacity: 6,
    shadowRadius: 6,
    elevation: 10,
    width: 280,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: '#65A9E7',
  },
  text1: {
    fontSize: 30,
    fontWeight: 'bold',
    fontFamily: 'Inter',
    marginVertical: 5,
    
    alignItems:'center'
  },
  card: {
    marginTop: 15,
    marginHorizontal: 10,
    padding: 15,
    backgroundColor: '#29B8D8',
  },
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