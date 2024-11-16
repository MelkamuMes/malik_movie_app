// import React from 'react'
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';

// const Stack = createNativeStackNavigator();

// export default function AppNavigation() {
//       return (
//       <NavigationContainer>
//           <Stack.Navigator>
//             <Stack.Screen name="Home" options={{handleShown: false}} component={MovieHome}/>
//           </Stack.Navigator>
//       </NavigationContainer>
//     )
// }


// // !this is the New Start

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MovieHome from '../movie/MovieHome'
import MovieScreen from '../movie/MovieScreen';
import PersonScreen from '../movie/PersonScreen'

const Stack = createNativeStackNavigator();

export default function AppNavigation() {
  return (
    <NavigationContainer>
        <Stack.Navigator>
            {/* <Stack.Screen
                name="Home"
                component={HomeScreen}
            /> */}
         <Stack.Screen name="Home" options={{handleShown: false, headerShown:false}} component={MovieHome} />
         <Stack.Screen name="Movie" options={{handleShown: false, headerShown:false}} component={MovieScreen} />
         <Stack.Screen name="Person" options={{handleShown: false, headerShown:false}} component={PersonScreen}/>
         {/* <Stack.Screen name="Trending" options={{handleShown: false}} component={TrendingMovies}/> */}
        </Stack.Navigator>
    </NavigationContainer>
);
}