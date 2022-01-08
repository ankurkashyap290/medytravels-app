import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Provider as PaperProvider} from 'react-native-paper';
import {Provider} from 'react-redux';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import SafeAreaView from 'react-native-safe-area-view';
import {ifIphoneX} from 'react-native-iphone-x-helper';
import AppNavigator from './src/navigators';
import theme from './src/styles/theme.style';

import Welcome from './src/screens/Welcome';
import Login from './src/screens/Login';
import SignUp from './src/screens/SignUp';
import RiderOrDriver from './src/screens/RiderOrDriver';
import DriverInfo from './src/screens/DriverInfo';
import RiderInfo from './src/screens/RiderInfo';
import OTP from './src/screens/OTP';
import ForgotPassword from './src/screens/ForgotPassword';
import CheckEmail from './src/screens/CheckEmail';
import CreatePassword from './src/screens/CreatePassword';
import SearchDestination from './src/screens/SearchDestination';
import SearchLocation from './src/screens/SearchLocation';
import ListVehicles from './src/screens/ListVehicles';
import VehiclesFullList from './src/screens/VehiclesFullList';
import RequestSent from './src/screens/RequestSent';

const App = () => {
  return (
    // <Provider store={store}>
    <SafeAreaProvider>
      <PaperProvider theme={theme.DEFAULT_THEME}>
        <SafeAreaView
          forceInset={{top: 'never', bottom: 'never'}}
          style={{
            flex: 1,
            backgroundColor: 'transparent',
            ...ifIphoneX(
              {
                paddingTop: 0, //getStatusBarHeight(),
                paddingBottom: 0, // getBottomSpace(),
              },
              {
                paddingTop: 0,
                paddingBottom: 0,
              },
            ),
          }}>
          <AppNavigator />
          {/* <AppNotifier /> */}
        </SafeAreaView>
      </PaperProvider>
    </SafeAreaProvider>
    // </Provider>
    // <View style={styles.body}>
    //   {/* <Welcome /> */}
    //   {/* <Login /> */}
    //   {/* <SignUp /> */}
    //   {/* <RiderOrDriver /> */}
    //   {/* <DriverInfo /> */}
    //   {/* <RiderInfo /> */}
    //   {/* <OTP /> */}
    //   {/* <ForgotPassword /> */}
    //   {/* <CheckEmail /> */}
    //   {/* <CreatePassword /> */}
    //   {/* <SearchDestination /> */}
    //   {/* <SearchLocation /> */}
    //   {/* <ListVehicles /> */}
    //   {/* <VehiclesFullList /> */}
    //   {/* <RequestSent /> */}
    // {/* </View> */}
  );
};

export default App;

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
