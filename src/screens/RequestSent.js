import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';

const RequestSent = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Request Sent</Text>
      <View style={styles.mainCar}>
        <Image
          style={styles.tinyLogo}
          source={require('../../assets/images/sentmessage.png')}
        />
      </View>
      <Text style={styles.tagLine}>
        your request has been sent successfully
      </Text>
      <TouchableOpacity
        style={styles.nextButton}
        onPress={() => navigate('Login')}
        underlayColor="#fff">
        <Text style={styles.loginText}>OK</Text>
        <Image
          style={styles.arrowRight}
          source={require('../../assets/images/arrowright.png')}
        />
      </TouchableOpacity>
    </View>
  );
};

export default RequestSent;

const styles = StyleSheet.create({
  container: {
    paddingLeft: 20,
    paddingRight: 20,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  logo: {
    fontSize: 30,
    fontWeight: '700',
    color: '#023e8a',
    textAlign: 'center',
    fontStyle: 'italic',
    marginTop: 60,
  },
  mainCar: {
    width: 390,
    overflow: 'hidden',
  },
  tinyLogo: {
    width: 390,
    height: 320,
  },
  tagLine: {
    fontSize: 26,
    fontWeight: '300',
    marginTop: 40,
    color: '#333',
    textAlign: 'center',
    paddingLeft: 20,
    paddingRight: 20,
  },
  nextButton: {
    marginTop: 26,
    backgroundColor: '#0077b6',
    paddingLeft: 26,
    paddingRight: 26,
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 100,
    width: 100,
    textAlign: 'center',
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  loginText: {
    paddingRight: 10,
    fontSize: 20,
    color: '#fff',
  },
  arrowRight: {
    width: 18,
    height: 18,
  },
});
