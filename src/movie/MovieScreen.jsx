import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View, Dimensions, Platform, Image } from 'react-native';
import { ChevronLeftIcon } from 'react-native-heroicons/outline';
import { HeartIcon } from 'react-native-heroicons/solid';
import { theme } from '../components/theme';
import { LinearGradient } from 'expo-linear-gradient';
import Cast from '../components/ui/cast';
import MovieList from '../components/ui/MovieList'

const { width, height } = Dimensions.get('window');
const ios = Platform.OS === 'ios';
let movieName = "Chainsaw Man – The Movie: Reze Arc";

function MovieScreen() {
    const navigation = useNavigation();
    const { params: item } = useRoute();
    const [isFavourite, toggleFavourite] = useState(false);
    const [cast,setCast] = useState([1,2,3,4,5])
    const [similarMovies, setSimilarMovies] = useState([1,2,3,4,5])

    useEffect(() => {
        // Call the movie detail API here if needed
    }, [item]);

    return (
        <ScrollView contentContainerStyle={{ paddingBottom: 35 }} style={{ flex: 1, backgroundColor: '#0e0e0e' }}>
            {/* Movie Poster and Back Button */}
            <View style={styles.container}>
                <SafeAreaView style={styles.SafeAreaContainer}>
                    <TouchableOpacity
                        style={{ borderRadius: 10, padding: 1.2, marginLeft: 2, marginBottom: 5, marginRight: 250, backgroundColor: theme.background }}
                        onPress={() => navigation.goBack()}
                    >
                        <ChevronLeftIcon size={25} strokeWidth={2.5} color="white" />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => toggleFavourite(!isFavourite)}>
                        <HeartIcon size={32} color={isFavourite ? theme.background : 'white'} />
                    </TouchableOpacity>
                </SafeAreaView>
                <View>
                    <Image
                        source={require('../components/images/Chainsaw-Man.jpg')}
                        style={{ width: width, height: height * 0.55 }}
                    />
                    <LinearGradient
                        colors={['transparent', 'rgba(23,23,23,0.8)', 'rgba(23,23,23,0.8)']}
                        style={{ width: width, height: height * 0.40, position: 'absolute', bottom: 0 }}
                        start={{ x: 0.5, y: 0 }}
                        end={{ x: 0.5, y: 1 }}
                    />
                </View>
            </View>

            {/* Movie Details */}
            <View style={styles.movieContainer}>
                <Text style={styles.movieTitle}>{movieName}</Text>
                <Text style={styles.generText}>Released -2020 - 170 min</Text>
                <View style={styles.gener}>
                    <Text style={styles.generText}> 
                        Action - 
                    </Text >
                    <Text style={styles.generText}>
                        Thrill - 
                    </Text>
                    <Text style={styles.generText}>
                        Comedy - 
                    </Text>
                </View>
                <Text style={styles.discription}>
                    An anime television series adaptation produced by MAPPA was broadcast from October to December 2022. An anime film, titled Chainsaw Man – The Movie: Reze Arc, has been announced. By August 2024, the manga had over 28 million copies in circulation, making it one of the best-selling manga series of all time.
                </Text>
            </View>
            {/* Cast content */}
            <Cast navigation={navigation} cast={cast}/>

            {/* Similar Movies */}
            <MovieList hideSeeAll={true} title="Similar Movies" data={similarMovies} />
        </ScrollView>
    );
}

export default MovieScreen;

const styles = StyleSheet.create({
    container: {
        width: '100%',
    },
    SafeAreaContainer: {
        position: 'absolute',
        flexDirection: 'row',
        zIndex: 20,
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 4,
        marginTop: ios ? 3 : 0,
    },
    movieContainer: {
        marginTop: -(height * 0.10),
        padding: 10,
        paddingTop: 0,
    },
    movieTitle: {
        color: "#fff",
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 23,
        letterSpacing: 0.05,
    },
    gener: {
        flexDirection: 'row',
        justifyContent:'center',
        marginHorizontal: 4,
        letterSpacing: 2,
        textAlign: 'center' 
    },
    generText: {
        color: '#cccccc',
        fontWeight: 'semibold',
        textAlign: 'center',
        letterSpacing: 0.15,

    },
    discription: {
        color: '#cccccc',
        marginHorizontal: 4,
        margin: 10,
        // tracking-wide
    }

});
