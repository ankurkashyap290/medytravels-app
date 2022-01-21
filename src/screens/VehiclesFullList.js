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
const VehiclesFullList = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.layout}>
            <TouchableOpacity style={styles.backButton}>
              <Icon name="chevron-back-outline" style={styles.arrowRight} />
            </TouchableOpacity>
            <View>
              <Text style={styles.locationHeading}>
                This ride has already departed.
              </Text>
              <Text style={styles.locationSubLine}>Sat 01 january</Text>
            </View>
          </View>
          <View style={styles.filterLayout}>
            <View style={styles.filterIconOuter}>
              <Icon name="ios-walk-sharp" size={30} color="#fff" />
            </View>
            <View style={styles.filterTextBox}>
              <Text style={styles.filterHeading}>
                ISBT Kashmiri Gate, New Delhi
              </Text>
              <Text style={styles.FilterPara}>2.1 km from your departure</Text>
            </View>
          </View>

          <View style={styles.filterLayout}>
            <View style={styles.filterIconOuterOrg}>
              <Icon name="ios-walk-sharp" size={30} color="#fff" />
            </View>
            <View style={styles.filterTextBox}>
              <Text style={styles.filterHeading}>Nagrota bagwan bus stand</Text>
              <Text style={styles.FilterPara}>2.2 km from your arrival</Text>
            </View>
          </View>

          <View style={styles.innerBox}>
            <View style={styles.personAvtar}>
              <View style={styles.avtarIconOuter}>
                <Image
                  style={styles.avtarIcon}
                  source={require('../../assets/images/av1.jpg')}
                />
              </View>
              <View style={styles.avtarTextBox}>
                <Text style={styles.avtarHeading}>Ruby </Text>
                <Text style={styles.avtarHeading}>5.0/5 ratings</Text>
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
              </View>
            </View>
            <Text style={styles.rateText}>
              Total Price for 1 passenger 900 Rs
            </Text>

            <View style={styles.timeLayout}>
              <View style={styles.textCol}>
                <Text style={styles.timeHeading}>Staring Time</Text>
                <Text style={styles.timeSubHeading}>10:00 am</Text>
                <Text style={styles.timeSubHeading}>Delhi</Text>
              </View>
              <View>
                <Text style={styles.timeAp}>10h 40m</Text>
              </View>
              <View style={styles.textCol}>
                <Text style={styles.timeHeading}>Reach time </Text>
                <Text style={styles.timeSubHeading}>9:00 pm</Text>
                <Text style={styles.timeSubHeading}>Shahpur</Text>
              </View>
            </View>
            <View style={styles.smokingBox}>
              <Text style={styles.smoText}>Show your id prof</Text>
              <Text style={styles.smoText}>
                Drinking and shmoking not Allowed
              </Text>
            </View>
            <View style={styles.petIconBox}>
              <Image
                style={styles.petIcon}
                source={require('../../assets/images/nosmoking.png')}
              />
              <Text style={styles.petText}>No Smoking</Text>
            </View>
            <View style={styles.petIconBox}>
              <Image
                style={styles.petIcon}
                source={require('../../assets/images/nopet.png')}
              />
              <Text style={styles.petText}>No Pets</Text>
            </View>
            <View style={styles.petIconBox}>
              <Icon
                name="car-sport"
                size={30}
                color="#000"
                style={styles.petIcon}
              />
              <Text style={styles.petText}>MARUTI SWIFT DZIRE (Dark grey)</Text>
            </View>
          </View>

          <View style={styles.layout}>
            <Text style={styles.PassHeading}>Passengers</Text>
          </View>
          <View style={styles.filterLayout}>
            <View style={styles.passIconBox}>
              <Image
                style={styles.passIcon}
                source={require('../../assets/images/av1.jpg')}
              />
            </View>
            <View style={styles.filterTextBox}>
              <Text style={styles.filterHeading}>Nindi</Text>
              <Text style={styles.FilterPara}>New Delhi to Nagrota Bagwan</Text>
            </View>
          </View>

          <View style={styles.filterLayout}>
            <View style={styles.passIconBox}>
              <Image
                style={styles.passIcon}
                source={require('../../assets/images/avtar.png')}
              />
            </View>
            <View style={styles.filterTextBox}>
              <Text style={styles.filterHeading}>Ron david</Text>
              <Text style={styles.FilterPara}>New Delhi to Nagrota Bagwan</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.alertBox}>
            <Text style={styles.alertText}> Report ride</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.alertBox2}>
            <Text style={styles.alertText}>Continue</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default VehiclesFullList;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    // alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: theme.PRIMARY_COLOR,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 15,
    paddingBottom: 30,
  },

  innerBox: {
    backgroundColor: theme.APP_BACKGROUND,
    borderRadius: 10,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 20,
    paddingBottom: 20,
    marginBottom: 20,
    marginBottom: 15,
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
    paddingLeft: 5,
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
    color: '#000',
    fontFamily: 'Lato-Bold',
  },
  locationSubLine: {
    fontSize: theme.FONT_SIZE_SMALL,
    color: '#000',
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
  filterIconOuterOrg: {
    backgroundColor: '#D8781B',
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
    marginBottom: 10,
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
    fontFamily: 'Lato-Bold',
  },
  timeSubHeading: {
    color: theme.SECONDARY_COLOR,
    fontFamily: 'Lato-Bold',
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
    paddingLeft: 10,
    paddingTop: 4,
  },
  numberPersonNo: {
    backgroundColor: '#999',
    width: 30,
    height: 30,
    borderRadius: 100,
    paddingLeft: 10,
    paddingTop: 4,
  },
  numberPersonOrgan: {
    backgroundColor: '#D8781B',
    width: 30,
    height: 30,
    borderRadius: 10,
    paddingLeft: 10,
    paddingTop: 4,
  },
  seatIcon: {
    width: 10,
    height: 20,
  },
  timeAp: {
    color: theme.SECONDARY_COLOR,
    fontSize: theme.FONT_SIZE_MEDIUM,
    fontFamily: 'Lato-Bold',
  },
  ClickText: {
    backgroundColor: '#82c91e',
    color: theme.APP_BACKGROUND,
    textAlign: 'center',
    fontSize: theme.FONT_SIZE_MEDIUM_OVER,
    borderRadius: 20,
    fontFamily: 'Lato-Regular',
    padding: 10,
    marginTop: 15,
  },
  alertBox: {
    backgroundColor: theme.BLACK_COLOR,
    marginTop: 20,
    marginBottom: 10,
    borderRadius: 10,
  },
  alertBox2: {
    backgroundColor: '#82c91e',
    marginTop: 20,
    marginBottom: 10,
    borderRadius: 10,
  },
  alertText: {
    color: theme.APP_BACKGROUND,
    fontSize: theme.FONT_SIZE_MEDIUM_OVER,
    fontFamily: 'Lato-Regular',
    textAlign: 'center',
    padding: 10,
  },
  petIconBox: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 6,
    marginTop: 6,
  },
  petIcon: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  petText: {
    fontSize: theme.FONT_SIZE_MEDIUM,
    color: '#000',
    fontFamily: 'Lato-Regular',
  },
  smokingBox: {
    borderBottomWidth: 1,
    borderColor: '#999',
    paddingTop: 10,
    paddingBottom: 10,
  },
  smoText: {
    fontSize: theme.FONT_SIZE_MEDIUM,
    color: '#999',
    marginBottom: 6,
    fontFamily: 'Lato-Regular',
  },
  PassHeading: {
    fontSize: theme.FONT_SIZE_MEDIUM_OVER,
    color: '#000',
    fontFamily: 'Lato-Bold',
  },
  passIconBox: {
    width: 40,
    height: 40,
    borderWidth: 3,
    borderColor: '#82c91e',
    borderRadius: 100,
    overflow: 'hidden',
  },
  passIcon: {
    width: 40,
    height: 40,
  },
  arrowRight: {
    fontSize: 20,
    color: theme.BLACK_COLOR,
  },
});
