import {View, ImageBackground, Image, Text, StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';
import {deviceHeight, deviceWidth} from './Dimensions';
import Icon from 'react-native-vector-icons/Ionicons';
import {API_KEY} from './Constants';

interface DetailsProps {
  route: {
    params: {
      name: string; // You might need to adjust the type based on your actual data
    };
  };
}

export default function Details(props: DetailsProps) {
  const [data, setData] = useState<any>(); // Adjust the type according to the expected data type
  const {name} = props.route.params;

  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${API_KEY}`,
    )
      .then(res => res.json())
      .then(res => setData(res))
      .catch(err => console.log(err));
  }, []);


  const Data = ({title, value}: {title: string; value: string}) => (
    <View style={styles.viewstyle}>
      <Text style={styles.textStyle}>{title}</Text>
      <Text style={styles.textStyle2}>{value}</Text>
    </View>
  );

  return (
    <View>
      <ImageBackground
        source={require('../assets/images/image1.jpg')}
        style={styles.imagestyle}
        imageStyle={{opacity: 0.6, backgroundColor: 'black'}}
      />
      <View style={styles.viewstyle2}>
      {data ? (
          <View style={styles.view3}>
            <View>
              <Text style={{color: 'white', fontSize: 40}}>{name}</Text>
              <Text style={{fontSize: 22, color: 'white', textAlign: 'center'}}>
                {data['weather'][0]['main']}
              </Text>
            </View>

            <Text style={{color: 'white', fontSize: 64}}>
              {(data['main']['temp'] - 273).toFixed(2)}&deg; C
            </Text>

            <View>
              <Text style={{color: 'white', fontSize: 22, marginBottom: 16}}>
                Weather Details
              </Text>
              <View style={{width: deviceWidth - 60}}>
                <Data value={data['wind']['speed']} title="Wind" />
                <Data value={data['main']['pressure']} title="Pressure" />
                <Data value={`${data['main']['humidity']}%`} title="Humidity" />
                <Data value={data['visibility']} title="Visibility" />
              </View>
            </View>
          </View>
        ) : null}
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  touchstyle: {
    marginHorizontal: 10,
  },
  imagestyle: {
    height: deviceHeight,
    width: deviceWidth,
  },
  imagestyle2: {
    height: 46,
    width: 46,
    borderRadius: 50,
  },
  viewstyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  viewstyle2: {
    position: 'absolute',
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  viewstyle3: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: deviceWidth - 20,
  },
  view3: {
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    height: deviceHeight - 100,
  },
  textStyle: {
    color: 'gray',
    fontSize: 22,
  },
  textStyle2: {
    color: 'white',
    fontSize: 22,
  },
});
