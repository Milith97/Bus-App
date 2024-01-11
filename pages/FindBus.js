// import React from 'react';
// import { View, Text, Image, StyleSheet, StatusBar, ScrollView, } from 'react-native';
// import { useTheme } from '@react-navigation/native';
// import Swiper from 'react-native-swiper';

// const HomeScreen = ({ navigation }) => {
//   const theme = useTheme();

//   return (
//     <ScrollView style={styles.container}>
//       <StatusBar backgroundColor='#2b2b2b' />
//       <View style={styles.sliderContainer}>
//         <Swiper
//           autoplay
//           horizontal={false}
//           height={200}
//           activeDotColor="#FF6347">
//           <View style={styles.slide}>
//             <Image
//               source={require('../assets/img/banner3.jpg')}
//               resizeMode="cover"
//               style={styles.sliderImage}
//             />
//           </View>
//           <View style={styles.slide}>
//             <Image
//               source={require('../assets/img/banner2.jpg')}
//               style={styles.sliderImage}
//             />
//           </View>
//           <View style={styles.slide}>
//             <Image
//               source={require('../assets/img/banner4.jpg')}
//               resizeMode="cover"
//               style={styles.sliderImage}
//             />
//           </View>
//         </Swiper>
//       </View>
//       <View style={[styles.categoryContainer, { marginTop: 10 }]}>
//       </View>

//       <View style={styles.cardsWrapper}>
//         <Text style={{ alignSelf: 'center', fontSize: 18, fontWeight: 'bold', color: '#333', }}>
//           Recently Viewed
//         </Text>

//         <View style={styles.card}>
//           <View style={styles.cardImgWrapper}>
//             <Image
//               source={require('../assets/img/bus1.jpg')}
//               resizeMode="cover"
//               style={styles.cardImg}
//             />
//           </View>
//           <View style={styles.cardInfo}>
//             <Text style={styles.cardTitle}>Colombo to Ambangoda</Text>
//             <Text style={styles.cardDetails}>
//               Ticket Price : Rs.700.00/-
//             </Text>
//             <Text style={styles.cardDetails}>
//               Date : 2023-12-21
//             </Text>
//             <Text style={styles.cardDetails}>
//               Duration : 2 hrous
//             </Text>
//             <Text style={styles.cardDetails}>
//               Time: 10:00
//             </Text>
//             <Text style={styles.cardDetails}>
//               Availble Sheet : 25
//             </Text>
//           </View>
//         </View>
//         <View style={styles.card}>
//           <View style={styles.cardImgWrapper}>
//             <Image
//               source={require('../assets/img/bus2.jpg')}
//               resizeMode="cover"
//               style={styles.cardImg}
//             />
//           </View>
//           <View style={styles.cardInfo}>
//             <Text style={styles.cardTitle}>Colombo to Ambangoda</Text>
//             {/*     <StarRating ratings={4} reviews={99} /> */}
//             <Text style={styles.cardDetails}>
//               Ticket Price : Rs.700.00/-
//             </Text>
//             <Text style={styles.cardDetails}>
//               Date : 2023-12-21
//             </Text>
//             <Text style={styles.cardDetails}>
//               Duration : 2 hrous
//             </Text>
//             <Text style={styles.cardDetails}>
//               Time: 12:00
//             </Text>
//             <Text style={styles.cardDetails}>
//               Availble Sheet : 15
//             </Text>
//           </View>
//         </View>
//         <View style={styles.card}>
//           <View style={styles.cardImgWrapper}>
//             <Image
//               source={require('../assets/img/bus3.png')}
//               resizeMode="cover"
//               style={styles.cardImg}
//             />
//           </View>
//           <View style={styles.cardInfo}>
//             <Text style={styles.cardTitle}>Colombo to Ambangoda</Text>
//             {/*   <StarRating ratings={4} reviews={99} /> */}
//             <Text style={styles.cardDetails}>
//               Ticket Price : Rs.700.00/-
//             </Text>
//             <Text style={styles.cardDetails}>
//               Date : 2023-12-21
//             </Text>
//             <Text style={styles.cardDetails}>
//               Duration : 2 hrous
//             </Text>
//             <Text style={styles.cardDetails}>
//               Time: 02:00
//             </Text>
//             <Text style={styles.cardDetails}>
//               Availble Sheet : 35
//             </Text>
//           </View>
//         </View>
//       </View>
//     </ScrollView>
//   );
// };

// export default HomeScreen;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '353884'
//   },
//   sliderContainer: {
//     height: 200,
//     width: '90%',
//     marginTop: 10,
//     justifyContent: 'center',
//     alignSelf: 'center',
//     borderRadius: 8,
//   },

//   wrapper: {},

//   slide: {
//     flex: 1,
//     justifyContent: 'center',
//     backgroundColor: 'transparent',
//     borderRadius: 8,
//   },
//   sliderImage: {
//     height: '100%',
//     width: '100%',
//     alignSelf: 'center',
//     borderRadius: 8,
//   },
//   categoryContainer: {
//     flexDirection: 'row',
//     width: '90%',
//     alignSelf: 'center',
//     marginTop: 25,
//     marginBottom: 10,
//   },
//   categoryBtn: {
//     flex: 1,
//     width: '30%',
//     marginHorizontal: 0,
//     alignSelf: 'center',
//   },
//   categoryIcon: {
//     borderWidth: 0,
//     alignItems: 'center',
//     justifyContent: 'center',
//     alignSelf: 'center',
//     width: 70,
//     height: 70,
//     backgroundColor: '#fdeae7' /* '#FF6347' */,
//     borderRadius: 50,
//   },
//   categoryBtnTxt: {
//     alignSelf: 'center',
//     marginTop: 5,
//     color: '#de4f35',
//   },
//   cardsWrapper: {
//     marginTop: 20,
//     width: '90%',
//     alignSelf: 'center',
//   },
//   card: {
//     height: 150,
//     marginVertical: 10,
//     flexDirection: 'row',
//     shadowColor: '#999',
//     shadowOffset: { width: 0, height: 1 },
//     shadowOpacity: 0.8,
//     shadowRadius: 2,
//     elevation: 5,
//   },
//   cardImgWrapper: {
//     flex: 1,
//   },
//   cardImg: {
//     height: '100%',
//     width: '100%',
//     alignSelf: 'center',
//     borderRadius: 8,
//     borderBottomRightRadius: 0,
//     borderTopRightRadius: 0,
//   },
//   cardInfo: {
//     flex: 2,
//     padding: 10,
//     borderColor: '#ccc',
//     borderWidth: 1,
//     borderLeftWidth: 0,
//     borderBottomRightRadius: 8,
//     borderTopRightRadius: 8,
//     backgroundColor: '#fff',
//   },
//   cardTitle: {
//     fontWeight: 'bold',
//     fontSize: 15,
//   },
//   cardDetails: {
//     fontSize: 14,
//     color: '#444',
//   },
// });
