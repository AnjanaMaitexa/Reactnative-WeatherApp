import {View, Text, ImageBackground, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import {deviceHeight, deviceWidth} from './Dimensions';
interface CardsProps {
  name: string;
  image: any; // Adjust the type according to your actual image data type
  navigation: any; // Adjust the type according to your navigation object type
}
export default function Cards({ name, image, navigation }: CardsProps) {
  return (
    <TouchableOpacity style={styles.touchstyle} onPress={() => navigation.navigate('Details', {name})}>
      <ImageBackground
        source={image}
        style={styles.imagestyle}
        imageStyle={{borderRadius: 16}}
      />
      <View style={styles.viewstyle}>
        <Text
          style={styles.textStyle}>
          {name}
        </Text>
      </View>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  touchstyle:{
    marginHorizontal: 10
  },
  imagestyle:{
    height: deviceHeight / 5,
    width: deviceWidth / 2 - 50
  },
  viewstyle:{
    position: 'absolute',
    height: '100%',
    width: '100%'
  },
  textStyle:{
    fontSize: 28,
    width: '100%',
    height: '100%',
    textAlign: 'center',
    textAlignVertical: 'center',
    color: 'black',
  }
})