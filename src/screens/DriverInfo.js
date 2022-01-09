import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import theme from '../styles/theme.style';
export default function DriverInfo() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.outerBox}>
          <Text style={styles.headingText}>Driver Info</Text>
          <View style={styles.innerBox}>
            <Text style={styles.tagline}>Please fill out this field</Text>
            <View>
              <TextInput
                style={styles.textInput}
                placeholder="Full Name"
                placeholderTextColor="#000"
              />
              <TextInput
                style={styles.textInput}
                placeholder="Your Mobile Number"
                placeholderTextColor="#000"
              />
              <TextInput
                style={styles.textInput}
                placeholder="Your driver licence no"
                placeholderTextColor="#000"
              />
              <TextInput
                style={styles.textInput}
                placeholder="Your Rc no"
                placeholderTextColor="#000"
              />
              <TextInput
                style={styles.textInput}
                placeholder="Insurance"
                placeholderTextColor="#000"
              />
              <TextInput
                style={styles.textInput}
                placeholder="Insurance"
                placeholderTextColor="#000"
              />
              <TextInput
                style={styles.textInput}
                placeholder="Vehicle type"
                placeholderTextColor="#000"
              />
              <TextInput
                style={styles.textInput}
                placeholder="Location"
                placeholderTextColor="#000"
              />
              <TextInput
                style={styles.textInput}
                secureTextEntry={true}
                placeholder="Your Password"
                placeholderTextColor="#000"
              />
              <TextInput
                style={styles.textInput}
                secureTextEntry={true}
                placeholder="Confirm Password"
                placeholderTextColor="#000"
              />

              <TouchableOpacity style={styles.SubmitButtonStyle}>
                <Text style={styles.TextStyle}> Next </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    // paddingLeft: 20,
    // paddingRight: 20,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: theme.PRIMARY_COLOR,
    alignContent: 'center',
    flex: 1,
  },
  outerBox: {
    textAlign: 'center',
    paddingTop: 40,
    paddingBottom: 40,
  },
  headingText: {
    color: theme.APP_BACKGROUND,
    fontSize: theme.FONT_SIZE_LARGE,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 20,
  },
  innerBox: {
    backgroundColor: theme.APP_BACKGROUND,
    borderRadius: 10,
    overflow: 'hidden',
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 20,
    paddingBottom: 20,
    textAlign: 'center',
    width: 300,
  },
  tagline: {
    fontSize: theme.FONT_SIZE_MEDIUM,
    color: theme.SECONDARY_COLOR,
    marginBottom: 15,
    fontWeight: '600',
    fontStyle: 'italic',
    textAlign: 'center',
  },
  textInput: {
    color: theme.APP_BACKGROUND,
    fontSize: theme.FONT_SIZE_SMALL,
    backgroundColor: '#eee',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 100,
    marginBottom: 15,
  },
  SubmitButtonStyle: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 12,
    paddingBottom: 12,
    borderRadius: 100,
    backgroundColor: theme.SECONDARY_COLOR,
  },
  TextStyle: {
    textAlign: 'center',
    color: theme.APP_BACKGROUND,
    fontSize: theme.FONT_SIZE_SMALL,
  },
  lastLInks: {
    marginTop: 20,
    flex: 0,
    alignItems: 'center',
    textAlign: 'center',
  },
  already: {
    fontSize: theme.FONT_SIZE_MEDIUM,
    color: theme.APP_BACKGROUND,
    marginBottom: 15,
    fontWeight: '600',
    fontStyle: 'italic',
  },
  goLoginButton: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 12,
    paddingBottom: 12,
    borderRadius: 100,
    backgroundColor: '#111',
    width: 200,
  },
});
