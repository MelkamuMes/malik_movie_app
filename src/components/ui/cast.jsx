import React from 'react'
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

export default function Cast({cast, navigation}) {

let  personName = "Keanu Rovick" 
let characterName = "Jhon Wick"

  return (
    <View style={styles.castContainer}>
        <Text style={styles.castText}>Top Cast</Text>
        <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{paddingHorizontal:15}}
        >
          {
            cast && cast.map((person, index)=>{
              return (
                <TouchableOpacity
                  key={index}
                  style={{margin:4, alignItems:'center'}}
                  onPress={()=> navigation.navigate('Person', person)}
                  >
                    <View  style={{                    alignItems: 'center',
                    borderWidth: 2,    // 2px border width
                    borderColor: 'white',
                    overflow:'hidden',
                     borderRadius:100,
                      height: 90,
                       width:90, 
                       alignItems:'center',
                       borderColor:'white'}}>
                    <Image  source={require('../images/1328396.png')} style={{borderRadius: 16, height: 96, width:112}}/>
                    </View>
                    <Text style={{color:'white', fontSize: 14}}>
                      {
                        characterName.length>10? characterName.slice(0,10)+'...': characterName
                      }
                    </Text>
                    <Text style={{color:'#cccc', fontSize: 14}}>
                      {
                        personName.length>10? personName.slice(0,10)+'...': personName
                      }
                    </Text>
                  </TouchableOpacity>
              )
            })
          }

        </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    castContainer: {
        marginVertical: 24,

    },
    castText: {
        color: 'white',
        fontSize: 18
    }

})