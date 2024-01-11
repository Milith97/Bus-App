import React from 'react';
import { View, TouchableOpacity, StyleSheet, Dimensions, StatusBar, ScrollView, SafeAreaView } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { TextInput, Card, Text } from 'react-native-paper';

const BusSchedule = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor='#85B3E9' />
      <View style={styles.header}>
        <Animatable.View
          animation="bounceIn"
          duration={1500}
          backgroundColor='#6033eb'
          style={styles.logo}
        />
      </View>
      <View style={styles.content}>
        <Animatable.View style={styles.midleContent} animation="bounceIn">
          <View>
            <Text style={styles.Text1}>Choose Your Bus</Text>
          </View>
          <View>
            <Text style={styles.Text1}>04th-Jan-2024/ Thursday</Text>
          </View>
          <ScrollView style={styles.scrollView}>
            {[1, 2, 3, 4, 5 , 6, 7].map((item) => (
              <Card key={item} style={styles.card}>
                <TextInput
                  label={`Date ${item}`}
                  value=""
                  onChangeText={() => {}}
                  style={styles.Text1}
                  mode='outlined'
                  outlineColor='#240AE5'
                />
              </Card>
            ))}
          </ScrollView>
        </Animatable.View>
      </View>
      {/* Footer or any other components */}
    </SafeAreaView>
  );
};

export default BusSchedule;

const { height } = Dimensions.get("screen");
const height_logo = height * 0.48;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: '#6033eb',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomRightRadius: 140,
    borderBottomLeftRadius: 140,
    position:'absolute',
    marginBottom: '5%', // Adjust margin as needed
  },
  content: {
    flex: 2,
  },
  midleContent: {
    marginTop: '5%',
    paddingHorizontal: '5%', // Adjust paddingHorizontal as needed
  },
 
  logo: {
    width: height_logo,
    height: height_logo,
  },
  scrollView: {
    backgroundColor: 'pink',
    marginHorizontal: '5%', // Adjust margin as needed
  },
  Text1: {
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'Inter',
    width: 250,
    height: 50,
    margin: 5,
    borderRadius: 10,
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