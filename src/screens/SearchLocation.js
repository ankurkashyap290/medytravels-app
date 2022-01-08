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
          <TouchableOpacity style={styles.backButton}>
            <Image
              style={styles.tinyLogo}
              source={require('../../assets/images/back.png')}
            />
          </TouchableOpacity>
          <TextInput
            style={styles.textInput}
            placeholder="Station Road or The Bridge..."
            placeholderTextColor="#000"
          />
        </View>
        <TouchableOpacity style={styles.searchLocation}>
          <Image
            style={styles.LocationIcon}
            source={require('../../assets/images/loaction.png')}
          />
          <Text style={styles.searchHeading}>Use current Location</Text>
          <Image
            style={styles.tinyLogo}
            source={require('../../assets/images/next.png')}
          />
        </TouchableOpacity>
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
  innerBox: {
    width: 326,
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 20,
    paddingBottom: 20,
  },
  layout: {
    backgroundColor: '#eee',
    borderRadius: 100,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 15,
    paddingRight: 15,
    marginBottom: 15,
  },
  textInput: {
    color: '#fff',
    fontSize: 16,
    backgroundColor: '#eee',
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 100,
  },
  backButton: {
    width: 30,
    height: 30,
    backgroundColor: '#023e8a',
    borderRadius: 100,
    textAlign: 'center',
    paddingLeft: 8,
    paddingTop: 8,
  },
  tinyLogo: {
    width: 15,
    height: 15,
  },
  LocationIcon: {
    width: 25,
    height: 25,
  },
  searchLocation: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 10,
    paddingBottom: 10,
  },
  searchHeading: {
    fontSize: 16,
    color: '#000',
  },
});
