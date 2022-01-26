import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel,
} from 'react-native-simple-radio-button';
import theme from '../styles/theme.style';
var radio_props = [
  {label: 'Login as Rider', value: 0},
  {label: 'Login as Driver', value: 1},
];

const RiderOrDriver = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/images/road.png')}
        style={styles.bgImage}
      />
      <View style={styles.outerBox}>
        <Text style={styles.headingText}>Please select any</Text>
        <View style={styles.innerBox}>
          <View style={styles.whiteBgBox}>
            <RadioForm
              style={styles.radioButtons}
              radio_props={radio_props}
              initial={0}
              buttonSize={16}
              onPress={value => {
                this.setState({value: value});
              }}
            />
          </View>
          <TouchableOpacity style={styles.nextButton}>
            <Text style={styles.buttonText}> Next </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default RiderOrDriver;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: theme.PRIMARY_COLOR,
    alignContent: 'center',
    flex: 1,
  },
  bgImage: {
    position: 'absolute',
    left: 0,
    bottom: 0,
    resizeMode: 'cover',
    width: '100%',
    height: 500,
  },
  outerBox: {
    textAlign: 'center',
    paddingLeft: 20,
    paddingRight: 20,
  },
  headingText: {
    color: theme.BLACK_COLOR,
    fontSize: theme.FONT_SIZE_LARGE,
    textAlign: 'center',
    marginBottom: 30,
    fontFamily: 'Lato-Bold',
    fontWeight: '900',
    textTransform: 'capitalize',
  },
  innerBox: {
    width: 300,
  },
  whiteBgBox: {
    backgroundColor: theme.APP_BACKGROUND,
    overflow: 'hidden',
    paddingLeft: 25,
    paddingRight: 25,
    paddingTop: 60,
    paddingBottom: 50,
    textAlign: 'center',
    width: '100%',
    borderRadius: 30,
    marginBottom: 15,
  },
  radioButtons: {
    fontSize: theme.FONT_SIZE_MEDIUM,
    marginBottom: 20,
    color: theme.PRIMARY_COLOR,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  buttonText: {
    fontSize: theme.FONT_SIZE_MEDIUM,
    color: theme.APP_BACKGROUND,
    fontWeight: '600',
    fontStyle: 'italic',
    textAlign: 'center',
  },
  nextButton: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 12,
    paddingBottom: 12,
    borderRadius: 10,
    backgroundColor: theme.BLACK_COLOR,
    fontFamily: 'Lato-thin',
  },
});
