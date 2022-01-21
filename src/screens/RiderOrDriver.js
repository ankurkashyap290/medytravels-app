import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
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
      <View style={styles.outerBox}>
        <Text style={styles.headingText}>Please select any</Text>
        <View style={styles.innerBox}>
          <RadioForm
            style={styles.radioButtons}
            radio_props={radio_props}
            initial={0}
            buttonSize={16}
            onPress={value => {
              this.setState({value: value});
            }}
          />
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
    paddingLeft: 20,
    paddingRight: 20,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: theme.PRIMARY_COLOR,
    alignContent: 'center',
    flex: 1,
  },
  outerBox: {
    textAlign: 'center',
  },
  headingText: {
    color: theme.BLACK_COLOR,
    fontSize: theme.FONT_SIZE_LARGE,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 20,
    fontFamily: 'Lato-Regular',
    textTransform: 'capitalize',
  },
  innerBox: {
    backgroundColor: theme.APP_BACKGROUND,
    borderRadius: 10,
    overflow: 'hidden',
    paddingLeft: 40,
    paddingRight: 40,
    paddingTop: 20,
    paddingBottom: 20,
    textAlign: 'center',
  },
  radioButtons: {
    fontSize: theme.FONT_SIZE_MEDIUM,
    marginBottom: 20,
    color: theme.PRIMARY_COLOR,
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
    width: 265,
    fontFamily: 'Lato-thin',
  },
});
