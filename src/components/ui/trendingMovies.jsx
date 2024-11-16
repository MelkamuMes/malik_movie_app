import React from 'react'
import { View,Text, StyleSheet, TouchableWithoutFeedback, Dimensions, Image } from 'react-native'
import { Themestyles } from '../theme'
import Carousel from 'react-native-snap-carousel'
import { useNavigation } from '@react-navigation/native';

var {width, height} = Dimensions.get('window');

export default function TrendingMovies({data}) {

   const navigation = useNavigation();
   const handleClick = (item) =>{
    navigation.navigate('Movie', {item});
   }

  return (
    <View>
        <Text style={styles.textTitle}>Trending</Text>
        <Carousel
        data={data}
        renderItem={({ item }) => <MovieCard item={item} handleClick={handleClick} />}
        firstItem={1}
        inactiveSlideOpacity={0.6}  // Corrected typo here
        sliderWidth={width}
        itemWidth={width*0.62}
        slideStyle={{ display: 'flex', alignItems: 'center' }}
      />
      

    </View>
  )
}

const MovieCard = ({item, handleClick}) => {
    return (
        <TouchableWithoutFeedback onPress={()=>handleClick(item)}>
            <Image 
            source={require('../images/6096159911907012211_120.jpg')}
            style={{
              width: width*0.6,
              height: height*0.4,
              borderRadius: 30
            }}
            />
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create ({
    textTitle: {
        color: 'white',
        fontSize: 20,
        marginHorizontal: 4,
        marginBottom: 5
    }
})