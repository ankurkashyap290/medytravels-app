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
      <Image
        source={require('../../assets/images/road.png')}
        style={styles.bgImage}
      />
      <View style={styles.outerBox}>
        <Text style={styles.headingText}>Your pick of rides at low prices</Text>
        <View style={styles.innerBox}>
          <View style={styles.whiteBgBox}>
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
          </View>
          <TouchableOpacity style={styles.SubmitButtonStyle}>
            <Text style={styles.TextStyle}> Next </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default SearchDestination;

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
  outerBox: {
    textAlign: 'center',
    paddingTop: 40,
    paddingBottom: 40,
  },
  headingText: {
    color: theme.BLACK_COLOR,
    fontSize: theme.FONT_SIZE_LARGE,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 20,
    fontFamily: 'Lato-Regular',
    textTransform: 'capitalize',
  },
  innerBox: {
    width: 300,
  },
  whiteBgBox: {
    backgroundColor: theme.APP_BACKGROUND,
    overflow: 'hidden',
    paddingLeft: 25,
    paddingRight: 25,
    paddingTop: 60,
    paddingBottom: 50,
    textAlign: 'center',
    width: '100%',
    borderRadius: 30,
    marginBottom: 15,
  },
  textInput: {
    color: theme.APP_BACKGROUND,
    fontSize: theme.FONT_SIZE_MEDIUM,
    backgroundColor: '#eee',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 10,
    marginBottom: 15,
    width: '100%',
  },
  SubmitButtonStyle: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 12,
    paddingBottom: 12,
    borderRadius: 10,
    backgroundColor: theme.BLACK_COLOR,
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
    borderRadius: 10,
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
