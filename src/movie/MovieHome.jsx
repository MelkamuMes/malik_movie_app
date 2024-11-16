import React, { useState } from 'react'
import {View, Text, StyleSheet, SafeAreaView, Platform, StatusBar, TouchableOpacity, Image, ScrollView} from 'react-native';
import { Bars3CenterLeftIcon, MagnifyingGlassIcon } from "react-native-heroicons/outline";
// import sideBarImage from '../components/images/sidebar.png'
import { Themestyles } from '../components/theme';
import TrendingMovies from '../components/ui/trendingMovies';
import CarouselCards from '../CarouselCards';
import MovieCard from '../components/ui/trendingMovies'
import MovieList from '../components/ui/MovieList';

const ios = Platform.OS == 'ios';
export default function MovieHome() {
  const [trending, setTrending] = useState([1,2,3])
  const [upComing, setUpComing] = useState([1,2,3])
  const [topRated, setTopRated] = useState([1,2,3])
  return (
    <View style={styles.container}>
        {/* search bar and logo */}
        <SafeAreaView style={styles.SafeAreaViewHome}>
            {/* <StatusBar style="Light" /> */}
            <StatusBar barStyle="light-content" />
             <View style={styles.hederIcon}>
                <Bars3CenterLeftIcon size="30" strokeWidth={2} color="white"/>
                <TouchableOpacity  style={styles.toggleButton}>
                {/* <Image source={sideBarImage} style={styles.sideBarImage} /> */}
                  </TouchableOpacity>
                <Text style={styles.textHeader}>
                  <Text style={Themestyles.text}>M</Text>ovies
                  </Text>
             <TouchableOpacity  style={styles.toggleButton}>
                {/* <Image source={sideBarImage} style={styles.sideBarImage} /> */}
                <MagnifyingGlassIcon size={30} strokeWidth={2} color='white' />
              </TouchableOpacity>
             </View>
        </SafeAreaView>
        <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 10}}
        >
          {/* Trending movies carousel */}
          <MovieCard data={trending} />

          {/* upcoming movies row */}
          <MovieList title="Upcoming" data={upComing} />

          
          {/* upcoming movies row */}
          <MovieList title="Top Rated" data={topRated} />


        </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create ({
  container: {
    flex:1,
    backgroundColor: 'black',
  },
 SafeAreaViewHome: {
   marginBottom: ios.marginBottom? -2 : 3,
 },
 textHeader: {
  color: 'white',
  fontSize: 22,
  fontWeight: 'bold'
 },
 hederIcon: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginHorizontal: 4
 },
 sideBarImage: {
  border: 'none',
  color: '#fff',
  cursor: 'pointer',
  width: 18,
  height: 18
},
})

// npm i react-native-snap-carousel
// npm i expo-linear-gradient
// npm i react-native-progress