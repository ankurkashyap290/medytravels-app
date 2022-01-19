import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import theme from '../styles/theme.style';
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
          source={require('../../assets/images/arrowright-black.png')}
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
    height: '100%',
    backgroundColor: theme.WHITE_COLOR,
  },
  logo: {
    fontSize: theme.FONT_SIZE_EXTRA_LARGE,
    fontWeight: '700',
    color: theme.BLACK_COLOR,
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
    fontSize: theme.FONT_SIZE_LARGE,
    fontWeight: '300',
    marginTop: 40,
    color: '#333',
    textAlign: 'center',
    paddingLeft: 20,
    paddingRight: 20,
  },
  nextButton: {
    marginTop: 26,
    backgroundColor: theme.PRIMARY_COLOR,
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
    fontSize: theme.FONT_SIZE_MEDIUM,
    color: theme.BLACK_COLOR,
  },
  arrowRight: {
    width: 18,
    height: 18,
  },
});
