import React from 'react';
import {
  StyleSheet,
  Text,
  Image,
  TextInput,
  View,
  TouchableOpacity,
} from 'react-native';
import theme from '../styles/theme.style';
import Icon from 'react-native-vector-icons/Ionicons';
const SearchLocation = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/images/road.png')}
        style={styles.bgImage}
      />
      <View style={styles.innerBox}>
        <View style={styles.layout}>
          <TouchableOpacity style={styles.backButton}>
            <Icon name="chevron-back-outline" style={styles.arrowRight} />
          </TouchableOpacity>
          <TextInput
            style={styles.textInput}
            placeholder="Station Road or The Bridge..."
            placeholderTextColor="#000"
          />
        </View>
        <TouchableOpacity style={styles.searchLocation}>
          <Icon name="map-marker" style={styles.arrowRight} />

          <Text style={styles.searchHeading}>Use current Location</Text>
          <Icon name="chevron-forward-outline" style={styles.arrowRight} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SearchLocation;

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
  bgImage: {
    position: 'absolute',
    left: 0,
    bottom: 0,
    resizeMode: 'cover',
    width: '100%',
    height: 500,
  },
  innerBox: {
    backgroundColor: theme.APP_BACKGROUND,
    borderRadius: 10,
    overflow: 'hidden',
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 20,
    paddingBottom: 20,
    textAlign: 'center',
    // width: 300,
  },
  layout: {
    backgroundColor: '#eee',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 15,
    paddingRight: 15,
    marginBottom: 15,
  },
  textInput: {
    color: theme.APP_BACKGROUND,
    fontSize: theme.FONT_SIZE_MEDIUM,
    backgroundColor: '#eee',
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 10,
  },
  backButton: {
    width: 30,
    height: 30,
    backgroundColor: theme.SECONDARY_COLOR,
    borderRadius: 100,
    textAlign: 'center',
    paddingLeft: 4,
    paddingTop: 4,
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
    fontSize: theme.FONT_SIZE_MEDIUM,
    color: '#000',
  },
  arrowRight: {
    fontSize: 20,
    color: theme.BLACK_COLOR,
  },
});
