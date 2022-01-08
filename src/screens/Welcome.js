import React from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import * as NavigationService from '../navigators/NavigationService';
import {styles} from '../styles/welcome.style';

const Welcome = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Medy Travels</Text>
      <View style={styles.mainCar}>
        <Image
          style={styles.tinyLogo}
          source={require('../../assets/images/welcome-car.png')}
        />
      </View>
      <Text style={styles.tagLine}>Your pick of rides at low prices</Text>
      <TouchableOpacity
        style={styles.nextButton}
        onPress={() => NavigationService.navigate('Login')}
        underlayColor="#fff">
        <Text style={styles.loginText}>Go</Text>
        <Image
          style={styles.arrowRight}
          source={require('../../assets/images/arrowright.png')}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Welcome;
