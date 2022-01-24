import React from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import * as NavigationService from '../navigators/NavigationService';
import {styles} from '../styles/welcome.style';
import Icon from 'react-native-vector-icons/Ionicons';
const Welcome = () => {
  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Image
          style={styles.logoImage}
          source={require('../../assets/images/medy-logo.png')}
        />
      </View>
      <View style={styles.mainCar}>
        <Image
          style={styles.tinyLogo}
          source={require('../../assets/images/Navigation-rafiki.png')}
        />
      </View>
      {/* <Text style={styles.tagLine}>Your pick of rides at low prices</Text> */}
      <TouchableOpacity
        style={styles.nextButton}
        onPress={() => NavigationService.navigate('Login')}
        underlayColor="#fff">
        <Icon name="chevron-forward-outline" style={styles.arrowRight} />
      </TouchableOpacity>
    </View>
  );
};

export default Welcome;
