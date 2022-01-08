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

const CreatePassword = () => {
  return (
    <View style={styles.container}>
      <View style={styles.outerBox}>
        <Text style={styles.headingText}>Create Password</Text>
        <View style={styles.innerBox}>
          <Text style={styles.tagline}>
            Your new password must be different from pervious used password.
          </Text>
          <View>
            <TextInput
              style={styles.textInput}
              placeholder="Password"
              secureTextEntry={true}
              placeholderTextColor="#000"
            />
            <Text style={styles.matchPassword}>
              Must be at least 8 characters.
            </Text>
            <TextInput
              style={styles.textInput}
              placeholder="Confirm Password"
              secureTextEntry={true}
              placeholderTextColor="#000"
            />
            <Text style={styles.matchPassword}>Both password must match.</Text>
          </View>
          <TouchableOpacity style={styles.SubmitButtonStyle}>
            <Text style={styles.TextStyle}> Reset Password </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default CreatePassword;

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
    marginBottom: 15,
    fontWeight: '600',
    fontStyle: 'italic',
    textAlign: 'center',
  },
  matchPassword: {
    fontSize: 12,
    color: '#000',
    marginBottom: 10,
    fontWeight: '400',
  },
  textInput: {
    color: '#fff',
    fontSize: 14,
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
    backgroundColor: '#023e8a',
  },
  TextStyle: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 14,
  },

  lastLInks: {
    marginTop: 20,
    flex: 0,
    alignItems: 'center',
    textAlign: 'center',
  },
});
