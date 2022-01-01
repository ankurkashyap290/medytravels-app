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

const ListVehicles = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.conGap}>
        <View style={styles.layout}>
          <TouchableOpacity style={styles.backButton}>
            <Image
              style={styles.tinyLogo}
              source={require('../assets/images/back.png')}
            />
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
            <Image
              style={styles.filterIcon}
              source={require('../assets/images/person.png')}
            />
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
                source={require('../assets/images/av1.jpg')}
              />
            </View>
            <View style={styles.avtarTextBox}>
              <Text style={styles.avtarHeading}>Ruby</Text>
              <View style={styles.avtarStars}>
                <Image
                  style={styles.starIcon}
                  source={require('../assets/images/star.png')}
                />
                <Image
                  style={styles.starIcon}
                  source={require('../assets/images/star.png')}
                />
                <Image
                  style={styles.starIcon}
                  source={require('../assets/images/star.png')}
                />
                <Image
                  style={styles.starIcon}
                  source={require('../assets/images/starno.png')}
                />
                <Image
                  style={styles.starIcon}
                  source={require('../assets/images/starno.png')}
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
                  <Image
                    style={styles.seatIcon}
                    source={require('../assets/images/person.png')}
                  />
                </View>
                <View style={styles.numberPerson}>
                  <Image
                    style={styles.seatIcon}
                    source={require('../assets/images/person.png')}
                  />
                </View>
                <View style={styles.numberPersonOrgan}>
                  <Image
                    style={styles.seatIcon}
                    source={require('../assets/images/person.png')}
                  />
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
                  <Image
                    style={styles.seatIcon}
                    source={require('../assets/images/person.png')}
                  />
                </View>
                <View style={styles.numberPerson}>
                  <Image
                    style={styles.seatIcon}
                    source={require('../assets/images/person.png')}
                  />
                </View>
                <View style={styles.numberPersonNo}>
                  <Image
                    style={styles.seatIcon}
                    source={require('../assets/images/person.png')}
                  />
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
                source={require('../assets/images/av1.jpg')}
              />
            </View>
            <View style={styles.avtarTextBox}>
              <Text style={styles.avtarHeading}>Ruby</Text>
              <View style={styles.avtarStars}>
                <Image
                  style={styles.starIcon}
                  source={require('../assets/images/star.png')}
                />
                <Image
                  style={styles.starIcon}
                  source={require('../assets/images/star.png')}
                />
                <Image
                  style={styles.starIcon}
                  source={require('../assets/images/star.png')}
                />
                <Image
                  style={styles.starIcon}
                  source={require('../assets/images/starno.png')}
                />
                <Image
                  style={styles.starIcon}
                  source={require('../assets/images/starno.png')}
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
                  <Image
                    style={styles.seatIcon}
                    source={require('../assets/images/person.png')}
                  />
                </View>
                <View style={styles.numberPerson}>
                  <Image
                    style={styles.seatIcon}
                    source={require('../assets/images/person.png')}
                  />
                </View>
                <View style={styles.numberPersonOrgan}>
                  <Image
                    style={styles.seatIcon}
                    source={require('../assets/images/person.png')}
                  />
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
                  <Image
                    style={styles.seatIcon}
                    source={require('../assets/images/person.png')}
                  />
                </View>
                <View style={styles.numberPerson}>
                  <Image
                    style={styles.seatIcon}
                    source={require('../assets/images/person.png')}
                  />
                </View>
                <View style={styles.numberPersonNo}>
                  <Image
                    style={styles.seatIcon}
                    source={require('../assets/images/person.png')}
                  />
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
    backgroundColor: '#0077b6',
    alignContent: 'center',
    flex: 1,
  },
  conGap: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 15,
    paddingBottom: 15,
  },
  innerBox: {
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 20,
    paddingBottom: 20,
    marginBottom: 20,
  },
  layout: {
    backgroundColor: '#eee',
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
    backgroundColor: '#023e8a',
    borderRadius: 100,
    textAlign: 'center',
    paddingLeft: 8,
    paddingTop: 8,
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
    fontSize: 16,
    color: '#000',
    fontWeight: '600',
  },
  locationSubLine: {
    fontSize: 14,
    color: '#000',
  },
  filterLayout: {
    backgroundColor: '#023e8a',
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
    fontSize: 18,
    color: '#fff',
    fontWeight: '600',
  },
  FilterPara: {
    fontSize: 16,
    color: '#fff',
  },
  filterIconOuter: {
    backgroundColor: '#82c91e',
    width: 40,
    height: 40,
    borderRadius: 100,
    paddingLeft: 14,
    paddingTop: 6,
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
    fontSize: 18,
    color: '#0077b6',
    fontWeight: '800',
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
    fontSize: 18,
    color: '#000',
    fontWeight: '900',
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
    fontSize: 16,
    marginBottom: 10,
  },
  timeSubHeading: {
    color: '#023e8a',
    fontWeight: '900',
    fontSize: 16,
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
    borderRadius: 100,
    paddingLeft: 10,
    paddingTop: 4,
  },
  seatIcon: {
    width: 10,
    height: 20,
  },
  timeAp: {
    color: '#023e8a',
    fontSize: 16,
    fontWeight: '800',
  },
  ClickText: {
    backgroundColor: '#82c91e',
    color: '#fff',
    textAlign: 'center',
    fontSize: 18,
    borderRadius: 20,
    padding: 10,
    marginTop: 15,
  },
  alertBox: {
    backgroundColor: '#fff',
    marginTop: 20,
    marginBottom: 100,
    borderRadius: 20,
  },
  alertText: {
    color: '#000',
    fontSize: 20,
    fontWeight: '600',
    textAlign: 'center',

    padding: 10,
  },
});
