import React from 'react';
import {
  StyleSheet,
  Text,
  Image,
  TextInput,
  View,
  TouchableOpacity,
} from 'react-native';

const SearchLocation = () => {
  return (
    <View style={styles.container}>
      <View style={styles.innerBox}>
        <View style={styles.layout}>
          <TouchableOpacity style={styles.goLoginButton}>
            <Image
              style={styles.tinyLogo}
              source={require('../assets/images/arrow-right-circle.svg')}
            />
          </TouchableOpacity>
          <TextInput
            style={styles.textInput}
            placeholder="Leaving from"
            placeholderTextColor="#000"
          />
        </View>
      </View>
    </View>
  );
};

export default SearchLocation;

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
});
