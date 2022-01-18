import React, {useState} from 'react';
import {
  StyleSheet,
  Image,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Button,
} from 'react-native';
import DatePicker from 'react-native-date-picker';
import theme from '../styles/theme.style';

const SearchDestination = () => {
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  return (
    <View style={styles.container}>
      <View style={styles.mainCar}>
        <Image
          style={styles.tinyLogo}
          source={require('../../assets/images/welcome-car.png')}
        />
      </View>
      <View style={styles.outerBox}>
        <Text style={styles.headingText}>Your pick of rides at low prices</Text>
        <View style={styles.innerBox}>
          {/* <Text style={styles.tagline}>Please fill out this field</Text> */}
          <View>
            <TextInput
              style={styles.textInput}
              placeholder="Leaving from"
              placeholderTextColor="#000"
            />

            <TextInput
              style={styles.textInput}
              placeholder="Going to"
              placeholderTextColor="#000"
            />
            <View style={styles.dateBox}>
              <View style={styles.dateGapLeft}>
                <TouchableOpacity
                  style={styles.selectDateStyle}
                  onPress={() => setOpen(true)}>
                  <Text style={styles.DateStyle}>Select Date</Text>
                </TouchableOpacity>
                {/* <Button title="" onPress={() => setOpen(true)} /> */}
                <DatePicker
                  modal
                  open={open}
                  date={date}
                  onConfirm={date => {
                    setOpen(false);
                    setDate(date);
                  }}
                  onCancel={() => {
                    setOpen(false);
                  }}
                />
              </View>
              <View style={styles.dateGapRight}>
                <TextInput
                  style={styles.textInput}
                  placeholder="Person No."
                  placeholderTextColor="#000"
                />
              </View>
            </View>
            <TouchableOpacity style={styles.SubmitButtonStyle}>
              <Text style={styles.TextStyle}> Next </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default SearchDestination;

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
  mainCar: {
    width: 390,
    overflow: 'hidden',
  },
  tinyLogo: {
    width: 390,
    height: 200,
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
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 20,
    paddingBottom: 20,
    textAlign: 'center',
    width: 326,
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
    fontSize: theme.FONT_SIZE_MEDIUM,
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
    fontSize: theme.FONT_SIZE_MEDIUM,
  },
  selectDateStyle: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 12,
    paddingBottom: 12,
    borderRadius: 100,
    backgroundColor: '#eee',
  },
  DateStyle: {
    textAlign: 'center',
    color: '#000',
    fontSize: theme.FONT_SIZE_MEDIUM,
  },
  dateBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
});
