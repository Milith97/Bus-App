import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, StatusBar, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import backgroundImage from './assert/img/homebkimg.jpg'; 

export default function DrawerNav() {
  const navigation = useNavigation();

  const handleNavigation = (screen) => {
    navigation.navigate(screen);
  };

  return (
    <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
      <View style={styles.container}>
        <StatusBar backgroundColor='#EAE1F9' />
        <View style={styles.header}>
          <Text style={styles.headerText}>Hey John</Text>
        </View>

        <TouchableOpacity style={styles.buttonRow} onPress={() => handleNavigation('StudentDetail')}>
          <Text style={styles.btnText}>Profile</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonRow} onPress={() => handleNavigation('DeleteStudent')}>
          <Text style={styles.btnText}>Booking</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonRow} onPress={() => handleNavigation('UpdateStudent')}>
          <Text style={styles.btnText}>Ticket</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonRow} onPress={() => handleNavigation('AddNewStu')}>
          <Text style={styles.btnText}>Home</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // or 'stretch' or 'contain'
  },
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    justifyContent: 'space-around',
  },
  headerText: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#1E5D8B',
  },
  buttonRow: {
    backgroundColor: 'rgba(255, 255, 255, 0.7)', // Add some transparency to the buttons
    borderRadius: 8,
    marginVertical: 10,
    padding: 15,
  },
  btnText: {
    fontSize: 25,
    color: '#E3E4E4',
    textAlign: 'center',
    fontFamily: 'PTSerif_Bold',
  },
});












// import { View, Text, StyleSheet, TouchableOpacity, StatusBar } from 'react-native'
// import React from 'react'

// export default function DrawerNav({ navigation }) {
//     return (

//         <View style={styles.container}>
//             <StatusBar backgroundColor='#EAE1F9' />
//             <View style={{ flex: 1, justifyContent: 'space-around' }}>
//                 <Text style={{ fontSize: 40, fontWeight: 'bold', color: '#1E5D8B', }}>Hey Jhone</Text>
//             </View>

//             <View style={{ flex: 4, }}>
//                 <View style={{ flex: 1, flexDirection: 'row', }}>
//                     <View style={{ alignItems: 'center' }}>
//                         <TouchableOpacity style={styles.btn1} onPress={() => { navigation.navigate('StudentDetail') }} >
//                             <Text style={styles.btnText}>Profile</Text>
//                         </TouchableOpacity>
//                     </View>
//                     <View>
//                         <TouchableOpacity style={styles.btn1} onPress={() => { navigation.navigate('DeleteStudent') }}>
//                             <Text style={styles.btnText}>Booking</Text>
//                         </TouchableOpacity>
//                     </View>
//                 </View>

//                 <View style={{ flex: 1, flexDirection: 'row', }}>
//                     <View style={{ alignItems: 'center' }}>
//                         <TouchableOpacity style={styles.btn2} onPress={() => { navigation.navigate('UpdateStudent') }}  >
//                             <Text style={styles.btnText}>Ticket</Text>
//                         </TouchableOpacity>
//                     </View>
//                     <View style={{}}>
//                         <TouchableOpacity style={styles.btn2} onPress={() => { navigation.navigate('AddNewStu') }}  >
//                             <Text style={styles.btnText}>Home</Text>
//                         </TouchableOpacity>
//                     </View>
//                 </View>

//                 <View style={{ flex: 1, flexDirection: 'row', }}>
//                     <View style={{ alignItems: 'center' }}>
//                         <TouchableOpacity style={styles.btn2} onPress={() => { navigation.navigate('UpdateStudent') }}  >
//                             <Text style={styles.btnText}>Ticket</Text>
//                         </TouchableOpacity>
//                     </View>
//                 </View>
//             </View>

//         </View>
//     )
// }

// const styles = StyleSheet.create({

//     container: {
//         flex: 1,
//         backgroundColor: '#EAE1F9',
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
//     btnText: {
//         fontSize: 25,
//         color: '#E3E4E4',
//         alignItems: 'center',
//         fontFamily: 'PTSerif_Bold',
//         justifyContent: 'center'
//     },
// })