import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Welcome from './screens/Welcome';
import Login from './screens/Login';
import SignUp from './screens/SignUp';
import RiderOrDriver from './screens/RiderOrDriver';
import DriverInfo from './screens/DriverInfo';
import RiderInfo from './screens/RiderInfo';
import OTP from './screens/OTP';
import ForgotPassword from './screens/ForgotPassword';
import CheckEmail from './screens/CheckEmail';
import CreatePassword from './screens/CreatePassword';
import SearchDestination from './screens/SearchDestination';
import SearchLocation from './screens/SearchLocation';
import ListVehicles from './screens/ListVehicles';
import VehiclesFullList from './screens/VehiclesFullList';
import RequestSent from './screens/RequestSent';
const App = () => {
  return (
    <View style={styles.body}>
      {/* <Welcome /> */}
      {/* <Login /> */}
      {/* <SignUp /> */}
      {/* <RiderOrDriver /> */}
      {/* <DriverInfo /> */}
      {/* <RiderInfo /> */}
      {/* <OTP /> */}
      {/* <ForgotPassword /> */}
      {/* <CheckEmail /> */}
      {/* <CreatePassword /> */}
      {/* <SearchDestination /> */}
      {/* <SearchLocation /> */}
      {/* <ListVehicles /> */}
      {/* <VehiclesFullList /> */}
      <RequestSent />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
