import React from 'react';
import {
  StyleSheet,
  Text,
  Image,
  TextInput,
  View,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import theme from '../styles/theme.style';
import Icon from 'react-native-vector-icons/Ionicons';
const ListVehicles = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={require('../../assets/images/road.png')}
        style={styles.bgImage}
      />
      <ScrollView style={styles.conGap}>
        <View style={styles.layout}>
          <TouchableOpacity style={styles.backButton}>
            <Icon name="chevron-back-outline" style={styles.arrowRight} />
          </TouchableOpacity>
          <View>
            <Text style={styles.locationHeading}>
              Delhi to shahpur, Himachal Pradesh.
            </Text>
            <Text style={styles.locationSubLine}>Today, 1 passenger</Text>
          </View>
        </View>
        <View style={styles.filterLayout}>
          <View style={styles.filterIconOuter}>
            <Icon name="ios-walk-sharp" size={30} color="#fff" />
          </View>
          <View style={styles.filterTextBox}>
            <Text style={styles.filterHeading}>Leave and arrive closer</Text>
            <Text style={styles.FilterPara}>
              You can now filter results by proximity
            </Text>
          </View>
        </View>

        <TouchableOpacity style={styles.innerBox}>
          <View style={styles.personAvtar}>
            <View style={styles.avtarIconOuter}>
              <Image
                style={styles.avtarIcon}
                source={require('../../assets/images/av1.jpg')}
              />
            </View>
            <View style={styles.avtarTextBox}>
              <Text style={styles.avtarHeading}>Ruby</Text>
              <View style={styles.avtarStars}>
                <Image
                  style={styles.starIcon}
                  source={require('../../assets/images/star.png')}
                />
                <Image
                  style={styles.starIcon}
                  source={require('../../assets/images/star.png')}
                />
                <Image
                  style={styles.starIcon}
                  source={require('../../assets/images/star.png')}
                />
                <Image
                  style={styles.starIcon}
                  source={require('../../assets/images/starno.png')}
                />
                <Image
                  style={styles.starIcon}
                  source={require('../../assets/images/starno.png')}
                />
              </View>
              <Text style={styles.rateText}>Rate: 900 Rs</Text>
            </View>
          </View>

          {/* Timing code */}
          <View style={styles.timeLayout}>
            <View style={styles.textCol}>
              <Text style={styles.timeHeading}>Staring Time</Text>
              <Text style={styles.timeSubHeading}>10:00 am</Text>
              <Text style={styles.timeSubHeading}>Delhi</Text>

              <View style={styles.personNumbers}>
                <View style={styles.numberPerson}>
                  <Icon name="ios-walk-sharp" size={20} color="#fff" />
                </View>
                <View style={styles.numberPerson}>
                  <Icon name="ios-walk-sharp" size={20} color="#fff" />
                </View>
                <View style={styles.numberPersonOrgan}>
                  <Icon name="ios-walk-sharp" size={20} color="#fff" />
                </View>
              </View>
            </View>
            <View>
              <Text style={styles.timeAp}>10h 40m</Text>
            </View>
            <View style={styles.textCol}>
              <Text style={styles.timeHeading}>Reach time </Text>
              <Text style={styles.timeSubHeading}>9:00 pm</Text>
              <Text style={styles.timeSubHeading}>Shahpur</Text>
              <View style={styles.personNumbers}>
                <View style={styles.numberPerson}>
                  <Icon name="ios-walk-sharp" size={20} color="#fff" />
                </View>
                <View style={styles.numberPerson}>
                  <Icon name="ios-walk-sharp" size={20} color="#fff" />
                </View>
                <View style={styles.numberPersonNo}>
                  <Icon name="ios-walk-sharp" size={20} color="#fff" />
                </View>
              </View>
            </View>
          </View>
          <Text style={styles.ClickText}>Click Here</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.innerBox}>
          <View style={styles.personAvtar}>
            <View style={styles.avtarIconOuter}>
              <Image
                style={styles.avtarIcon}
                source={require('../../assets/images/av1.jpg')}
              />
            </View>
            <View style={styles.avtarTextBox}>
              <Text style={styles.avtarHeading}>Ruby</Text>
              <View style={styles.avtarStars}>
                <Image
                  style={styles.starIcon}
                  source={require('../../assets/images/star.png')}
                />
                <Image
                  style={styles.starIcon}
                  source={require('../../assets/images/star.png')}
                />
                <Image
                  style={styles.starIcon}
                  source={require('../../assets/images/star.png')}
                />
                <Image
                  style={styles.starIcon}
                  source={require('../../assets/images/starno.png')}
                />
                <Image
                  style={styles.starIcon}
                  source={require('../../assets/images/starno.png')}
                />
              </View>
              <Text style={styles.rateText}>Rate: 900 Rs</Text>
            </View>
          </View>

          {/* Timing code */}
          <View style={styles.timeLayout}>
            <View style={styles.textCol}>
              <Text style={styles.timeHeading}>Staring Time</Text>
              <Text style={styles.timeSubHeading}>10:00 am</Text>
              <Text style={styles.timeSubHeading}>Delhi</Text>

              <View style={styles.personNumbers}>
                <View style={styles.numberPerson}>
                  <Icon name="ios-walk-sharp" size={20} color="#fff" />
                </View>
                <View style={styles.numberPerson}>
                  <Icon name="ios-walk-sharp" size={20} color="#fff" />
                </View>
                <View style={styles.numberPersonOrgan}>
                  <Icon name="ios-walk-sharp" size={20} color="#fff" />
                </View>
              </View>
            </View>
            <View>
              <Text style={styles.timeAp}>10h 40m</Text>
            </View>
            <View style={styles.textCol}>
              <Text style={styles.timeHeading}>Reach time </Text>
              <Text style={styles.timeSubHeading}>9:00 pm</Text>
              <Text style={styles.timeSubHeading}>Shahpur</Text>
              <View style={styles.personNumbers}>
                <View style={styles.numberPerson}>
                  <Icon name="ios-walk-sharp" size={20} color="#fff" />
                </View>
                <View style={styles.numberPerson}>
                  <Icon name="ios-walk-sharp" size={20} color="#fff" />
                </View>
                <View style={styles.numberPersonNo}>
                  <Icon name="ios-walk-sharp" size={20} color="#fff" />
                </View>
              </View>
            </View>
          </View>
          <Text style={styles.ClickText}>Click Here</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.alertBox}>
          <Text style={styles.alertText}>Create a Ride Alert</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ListVehicles;

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
  conGap: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 15,
    paddingBottom: 15,
  },
  innerBox: {
    backgroundColor: theme.APP_BACKGROUND,
    borderRadius: 10,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 20,
    paddingBottom: 20,
    marginBottom: 20,
  },
  layout: {
    backgroundColor: theme.WHITE_COLOR,
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 15,
    paddingRight: 15,
    marginBottom: 15,
  },
  backButton: {
    width: 30,
    height: 30,
    backgroundColor: theme.SECONDARY_COLOR,
    borderRadius: 100,
    textAlign: 'center',
    paddingLeft: 4,
    paddingTop: 4,
    marginRight: 10,
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
  locationHeading: {
    fontSize: theme.FONT_SIZE_MEDIUM,
    color: theme.BLACK_COLOR,
    fontFamily: 'Lato-Bold',
  },
  locationSubLine: {
    fontSize: theme.FONT_SIZE_SMALL,
    color: theme.BLACK_COLOR,
    fontFamily: 'Lato-Regular',
  },
  filterLayout: {
    backgroundColor: theme.SECONDARY_COLOR,
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 15,
    paddingRight: 15,
    marginBottom: 15,
  },
  filterTextBox: {
    marginLeft: 10,
  },
  filterHeading: {
    fontSize: theme.FONT_SIZE_MEDIUM_OVER,
    color: theme.APP_BACKGROUND,
    fontFamily: 'Lato-Bold',
  },
  FilterPara: {
    fontSize: theme.FONT_SIZE_MEDIUM,
    color: theme.APP_BACKGROUND,
    fontFamily: 'Lato-Regular',
  },
  filterIconOuter: {
    backgroundColor: '#82c91e',
    width: 40,
    height: 40,
    borderRadius: 100,
    paddingLeft: 6,
    paddingTop: 3,
  },
  filterIcon: {
    width: 10,
    height: 30,
  },
  personAvtar: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 10,
  },
  avtarIconOuter: {
    width: 40,
    height: 40,
    borderRadius: 100,
    borderRadius: 100,
    overflow: 'hidden',
    borderColor: '#82c91e',
    marginRight: 15,
  },
  avtarIcon: {width: 40, height: 40, borderRadius: 100},
  avtarHeading: {
    fontSize: theme.FONT_SIZE_MEDIUM_OVER,
    color: '#0077b6',
    fontFamily: 'Lato-Bold',
    marginBottom: 5,
  },
  avtarStars: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  starIcon: {
    width: 24,
    height: 24,
  },
  rateText: {
    fontSize: theme.FONT_SIZE_MEDIUM_OVER,
    color: '#000',
    fontFamily: 'Lato-Bold',
    marginBottom: 5,
  },
  timeLayout: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textCol: {
    flexDirection: 'column',
    width: 110,
  },
  timeHeading: {
    color: '#000',
    fontSize: theme.FONT_SIZE_MEDIUM,
    marginBottom: 10,
  },
  timeSubHeading: {
    color: theme.SECONDARY_COLOR,
    fontFamily: 'Lato-Regular',
    fontSize: theme.FONT_SIZE_MEDIUM,
    marginBottom: 10,
  },
  personNumbers: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  numberPerson: {
    backgroundColor: '#82c91e',
    width: 30,
    height: 30,
    borderRadius: 100,
    paddingLeft: 5,
    paddingTop: 4,
  },
  numberPersonNo: {
    backgroundColor: '#999',
    width: 30,
    height: 30,
    borderRadius: 100,
    paddingLeft: 5,
    paddingTop: 4,
  },
  numberPersonOrgan: {
    backgroundColor: '#F7A73E',
    width: 30,
    height: 30,
    borderRadius: 100,
    paddingLeft: 5,
    paddingTop: 4,
  },
  seatIcon: {
    width: 10,
    height: 20,
  },
  timeAp: {
    color: theme.SECONDARY_COLOR,
    fontSize: theme.FONT_SIZE_MEDIUM,
    fontFamily: 'Lato-Regular',
  },
  ClickText: {
    backgroundColor: theme.PRIMARY_COLOR,
    color: theme.APP_BACKGROUND,
    textAlign: 'center',
    fontSize: theme.FONT_SIZE_MEDIUM_OVER,
    borderRadius: 10,
    padding: 10,
    fontFamily: 'Lato-Regular',
    marginTop: 15,
  },
  alertBox: {
    backgroundColor: theme.BLACK_COLOR,
    marginTop: 20,
    marginBottom: 100,
    borderRadius: 10,
  },
  alertText: {
    color: theme.WHITE_COLOR,
    fontSize: theme.FONT_SIZE_MEDIUM,
    textAlign: 'center',
    padding: 13,
    fontFamily: 'Lato-Regular',
  },
  arrowRight: {
    fontSize: 20,
    color: theme.BLACK_COLOR,
  },
});
