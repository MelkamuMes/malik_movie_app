import React, { useState } from 'react'
import { Text, View ,Dimensions,Platform, ScrollView, StyleSheet,SafeAreaView,TouchableOpacity, Image} from 'react-native'
import { ChevronLeftIcon } from 'react-native-heroicons/outline';
import { HeartIcon } from 'react-native-heroicons/solid';
import { useNavigation } from '@react-navigation/native';
import { theme } from '../components/theme';

const { width, height } = Dimensions.get('window');
const ios = Platform.OS === 'ios';
// const verticalMargin =  ios? '': {marginVertical:3};
export default function PersonScreen(){
    const navigation = useNavigation();
    const [isFavourite, toggleFavourite] = useState(false);
  return (
    <ScrollView 
    style={{
        flex:1,
        backgroundColor: '#0e0e0e',
    }}
    contentContainerStyle={{paddingBottom:35}}
    >
       <SafeAreaView style={styles.SafeAreaContainer}>
         <TouchableOpacity
            style={{ borderRadius: 10, padding: 1.2, marginLeft: 2, marginBottom: 5, marginRight: 250, backgroundColor: theme.background }}
            onPress={() => navigation.goBack()}
            >
             <ChevronLeftIcon size={25} strokeWidth={2.5} color="white" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => toggleFavourite(!isFavourite)}>
             <HeartIcon size={32} color={isFavourite ? 'red' : 'white'} />
          </TouchableOpacity>
        </SafeAreaView>

        {/* person Detailes */}
        <View >
           <View  style={{
            flexDirection: 'row',
            justifyContent: 'center',
            shadowColor: 'gray',
            // shadowRadius: 40,
            // shadowOffset: { width: 0, height: 5 },
            // shadowOpacity: 1,
            // elevation: {width:30 , height:5,}, // Android shadow equivalent
        }}>
            <View style={{
                    alignItems: 'center',
                    borderRadius: 215, // Use half of height/width for a circular shape
                    borderWidth: 2,    // 2px border width
                    borderColor: 'white', // Red border color
                    overflow: 'hidden',
                    height: 230,
                    width: 230,
                }}>
                <Image source={require('../components/images/1328396.png')}
                    style={{height: height*0.43, width: width*0.74,borderRadius: 120,}} />
            </View>
           </View>
           <View style={{marginTop:10}}>
            <Text style={{color:'white', fontWeight:'bold', textAlign: 'center', fontSize:23}}>
                  Keanu Reeves 
            </Text>
            <Text style={{color:'white', fontWeight:'normal', textAlign: 'center', fontSize:13}}>
                  london, united kingdom 
            </Text>
           </View>
            
           <View style={{marginLeft:10,marginRight:10,borderRadius:64 ,marginTop:20, padding:6,flexDirection:'row',marginHorizontal: 3 , flexDirection: 'row', justifyContent: 'space-between' ,alignItems: 'center', backgroundColor:'#c7c7c718',overflow: 'hidden'}}>
            <View style={{  paddingRight:6, borderRadius: 0,borderWidth: 2,borderTopColor:'transparent',borderLeftColor:'transparent',borderBottomColor: 'transparent' , borderRightColor: '#ffffff9d', alignItems: 'center'}}>
            <Text style={{color: 'white',fontWeight: 'semibold'}}>Gender</Text>
            <Text style={{color: 'white',fontWeight: 'thin', color: "#f5f5ff45"}}>Male</Text>
            </View>
            <View style={{  paddingRight:6, borderRadius: 0,borderWidth: 2,borderTopColor:'transparent',borderLeftColor:'transparent',borderBottomColor: 'transparent' , borderRightColor: '#ffffff9d', alignItems: 'center'}}>
            <Text style={{color: 'white',fontWeight: 'semibold'}}>Gender</Text>
            <Text style={{color: 'white',fontWeight: 'thin', color: "#f5f5ff45"}}>Male</Text>
            </View>
            <View style={{  paddingRight:6, borderRadius: 0,borderWidth: 2,borderTopColor:'transparent',borderLeftColor:'transparent',borderBottomColor: 'transparent' , borderRightColor: '#ffffff9d', alignItems: 'center'}}>
            <Text style={{color: 'white',fontWeight: 'semibold'}}>Gender</Text>
            <Text style={{color: 'white',fontWeight: 'thin', color: "#f5f5ff45"}}>Male</Text>
            </View>
            <View style={{  paddingRight:6, borderRadius: 0,borderWidth: 2,borderTopColor:'transparent',borderLeftColor:'transparent',borderBottomColor: 'transparent' , borderRightColor: '#ffffff9d', alignItems: 'center'}}>
            <Text style={{color: 'white',fontWeight: 'semibold'}}>Gender</Text>
            <Text style={{color: 'white',fontWeight: 'thin', color: "#f5f5ff45"}}>Male</Text>
            </View>
           </View>
        </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    SafeAreaContainer: {
        // position: 'relative',
        flexDirection: 'row',
        // zIndex: 120,
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 4,
        marginVertical: ios ? 3 : 0,
    },
})



// !UPDATED

// import React, { useState } from 'react';
// import {
//   Text,
//   View,
//   Dimensions,
//   Platform,
//   ScrollView,
//   StyleSheet,
//   SafeAreaView,
//   TouchableOpacity,
//   Image
// } from 'react-native';
// import { ChevronLeftIcon } from 'react-native-heroicons/outline';
// import { HeartIcon } from 'react-native-heroicons/solid';
// import { useNavigation } from '@react-navigation/native';
// import { theme } from '../components/theme';

// const { width, height } = Dimensions.get('window');
// const ios = Platform.OS === 'ios';

// export default function PersonScreen() {
//   const navigation = useNavigation();
//   const [isFavourite, toggleFavourite] = useState(false);

//   return (
//     <ScrollView
//       style={{
//         flex: 1,
//         backgroundColor: '#000000',
//       }}
//       contentContainerStyle={{ paddingBottom: 35 }}
//     >
//       <SafeAreaView style={styles.SafeAreaContainer}>
//         <TouchableOpacity
//           style={{
//             borderRadius: 10,
//             padding: 1.2,
//             marginLeft: 2,
//             marginBottom: 5,
//             marginRight: 250,
//             backgroundColor: theme.background,
//           }}
//           onPress={() => navigation.goBack()}
//         >
//           <ChevronLeftIcon size={25} strokeWidth={2.5} color="white" />
//         </TouchableOpacity>
//         <TouchableOpacity onPress={() => toggleFavourite(!isFavourite)}>
//           <HeartIcon size={32} color={isFavourite ? 'red' : 'white'} />
//         </TouchableOpacity>
//       </SafeAreaView>

//       {/* Person Details */}
//       <View>
//         <View style={[styles.UniqeStyleForshadowContainer,styles.shadowContainer]}>
//           <View style={styles.imageContainer}>
//             <Image
//               source={require('../components/images/1328396.png')}
//               style={styles.image}
//             />
//           </View>
//         </View>
//         <View style={{ marginTop: 10 }}>
//           <Text
//             style={{
//               color: 'white',
//               fontWeight: 'bold',
//               textAlign: 'center',
//               fontSize: 23,
//             }}
//           >
//             Keanu Reeves
//           </Text>
//           <Text
//             style={{
//               color: 'white',
//               fontWeight: 'normal',
//               textAlign: 'center',
//               fontSize: 13,
//             }}
//           >
//             London, United Kingdom
//           </Text>
//         </View>
//         <View style={styles.infoContainer}>
//           <View style={styles.infoSection}>
//             <Text style={{ color: 'white', fontWeight: '600' }}>Gender</Text>
//             <Text style={{ color: '#f5f5ff45' }}>Male</Text>
//           </View>
//         </View>
//       </View>
//     </ScrollView>
//   );
// }

// const styles = StyleSheet.create({
//   SafeAreaContainer: {
//     flexDirection: 'row',
//     width: '100%',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     paddingHorizontal: 4,
//     marginVertical: ios ? 3 : 0,
//   },
//   UniqeStyleForshadowContainer: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//     // backgroundColor: '#ffffff18',
//     borderRadius: 213,
//     paddingVertical: 15,
//     paddingHorizontal: 5,
//     width: '100%',
//     // marginVertical: 10,

//   },
//   shadowContainer: {
//     shadowColor: '#aa1212',
//     // shadowRadius: 50,
//     // shadowOffset: { width: 0, height: 5 },
//     // shadowOpacity: 0.2,
//     elevation: 40, // Increase elevation for a more visible shadow on Android
//     // backgroundColor: '#1a1a1a', // Set background color for better shadow visibility
//     // padding: 15, // Adjust padding to prevent shadow clipping
//     // borderRadius: 215,
//   },
//   imageContainer: {
//     alignItems: 'center',
//     borderRadius: 215, // Circular shape by setting radius to half of height/width
//     borderWidth: 2,
//     borderColor: 'white',
//     overflow: 'hidden',
//     height: 230,
//     width: 230,
//   },
//   image: {
//     height: height * 0.43,
//     width: width * 0.74,
//     borderRadius: 120,
//   },
//   infoContainer: {
//     marginLeft: 10,
//     marginRight: 10,
//     borderRadius: 64,
//     marginTop: 20,
//     padding: 6,
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     backgroundColor: '#c7c7c718',
//   },
//   infoSection: {
//     paddingRight: 6,
//     borderWidth: 2,
//     borderTopColor: 'transparent',
//     borderLeftColor: 'transparent',
//     borderBottomColor: 'transparent',
//     borderRightColor: '#ffffff9d',
//     alignItems: 'center',
//   },
// });
