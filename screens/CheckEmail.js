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

const CheckEmail = () => {
  return (
    <View style={styles.container}>
      <View style={styles.outerBox}>
        <Text style={styles.headingText}>Check Your Email</Text>
        <View style={styles.innerBox}>
          <Text style={styles.tagline}>
            We have sent a password recover instructions to your email.
          </Text>
          <TouchableOpacity style={styles.SubmitButtonStyle}>
            <Text style={styles.TextStyle}> Open Email App</Text>
          </TouchableOpacity>
          <Text style={styles.anotherEmail}>
            Did not receive the email? Check your spam filter, or try another
            email address
          </Text>
        </View>
      </View>
    </View>
  );
};

export default CheckEmail;

const styles = StyleSheet.create({
  container: {
    paddingLeft: 20,
    paddingRight: 20,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: '#0077b6',
    alignContent: 'center',
    flex: 1,
  },
  outerBox: {
    textAlign: 'center',
    paddingTop: 40,
    paddingBottom: 40,
  },
  headingText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 20,
  },
  innerBox: {
    backgroundColor: '#fff',
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
    fontSize: 16,
    color: '#023e8a',
    fontWeight: '600',
    fontStyle: 'italic',
    textAlign: 'center',
  },
  anotherEmail: {
    fontSize: 16,
    color: '#000',
    fontWeight: '600',
    fontStyle: 'italic',
    textAlign: 'center',
  },
  SubmitButtonStyle: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 12,
    paddingBottom: 12,
    borderRadius: 100,
    marginBottom: 15,
    marginTop: 15,
    backgroundColor: '#023e8a',
  },
  TextStyle: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 14,
  },
});
