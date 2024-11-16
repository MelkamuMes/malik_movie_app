import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, ScrollView, TouchableWithoutFeedback, Image,Dimensions } from 'react-native';
import { Themestyles } from '../theme/index';
import { useNavigation } from '@react-navigation/native';



var {width, height} = Dimensions.get('window');


const MovieList = ({ title, data,hideSeeAll}) => {
    const navigation = useNavigation();
    let movieName = "Ant-man and the wasp: Quantumania";
    
    return (
        <View style={styles.container}>
            <View style={styles.Textcontainer}>
                <Text style={styles.textTitle}>{title}</Text>
                {
                    !hideSeeAll && (
                    <TouchableOpacity>
                         <Text style={Themestyles.text}>See All</Text>
                    </TouchableOpacity>
                    )
                }

            </View>

            {/* Movie row */}
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ paddingHorizontal: 13 }}
            >
                {data.map((item, index) => (
                    <TouchableWithoutFeedback
                        key={index}
                        onPress={() => navigation.push('Movie', item)}
                    >
                        <View style={styles.movieItem}>
                            <View style={styles.ImgList}>
                                <Image 
                                source={require('../images/One-Piece-Monkey-D-Luffy-Gear-5th-sun-god-nika-vincentnoon-noonvincent-2266262-wallhere.com.jpg')}
                                style={{width: width*0.33, height: height*0.27, borderRadius:10}}
                                />
                            </View>
                            <Text style={styles.textList}>
                                {
                                    movieName.length>14? movieName.slice(0,14) +'...': movieName
                                }
                            </Text>
                        </View>
                    </TouchableWithoutFeedback>
                ))}
            </ScrollView>
        </View>
    );
};

export default MovieList;

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 8,
        letterSpacing: 4
    },
    Textcontainer: {
        marginHorizontal: 4,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    textTitle: {
        color: 'white',
        fontSize: 20,
        marginHorizontal: 4,
        marginBottom: 5
    },
    textList: {
        color: 'white',
        marginLeft: 1
    },
    ImgList: {
        width: 100,
        height: 150,
        backgroundColor: '#333',
        marginBottom: 5,
        borderRadius:10
    },
    movieItem: {
        alignItems: 'center',
        marginRight: 15
    }
});
