import React, {useState, useEffect} from 'react';
// import {connect} from 'react-redux';
// import {bindActionCreators} from 'redux';
import {
  NavigationContainer,
  createNavigationContainerRef,
} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import * as NavigationService from './NavigationService';
import Welcome from '../screens/Welcome';
// import WelcomePage from '../pages/WelcomePage';
import SignInNav from './SignInNav';
// import SignUpNav from './SignUpNav';
// import AppMain from './AppMain';
// import {fetchInitialData} from '../../redux/app/actions';
// import WebSockets from '../components/WebSockets';
// import AskLocation from '../components/Settings/AskLocation';
// import RegisterPush from '../components/Notifications/RegisterPush';
// import AccountDrawer from '../components/User/AccountDrawer';

const Stack = createStackNavigator();

const AppNavigator = () => {
  const navigationRef = createNavigationContainerRef();

  // useEffect(() => {
  //   if (!isAppInitialized) {
  //     fetchInitialData();
  //   }
  // }, []);

  return (
    <React.Fragment>
      {/* <AppSwitchNavigator
        ref={ref => setNavigator(ref)}
        screenProps={{...props}}
      /> */}
      {/* <RegisterPush />
      <AskLocation />
      <WebSockets />
      <AccountDrawer /> */}
      <NavigationContainer ref={navigationRef}>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="Welcome" component={Welcome} />
          <Stack.Screen name="SignInNav" component={SignInNav} />
          {/* <Stack.Screen name="SignUpNav" component={SignUpNav} /> */}
        </Stack.Navigator>
      </NavigationContainer>
    </React.Fragment>
  );
};

// const mapStateToProps = state => {
//   return {
//     isAppInitialized: state.app.isAppInitialized,
//   };
// };

// const mapDispatchToProps = dispatch =>
//   bindActionCreators(
//     {
//       fetchInitialData,
//     },
//     dispatch,
//   );

// export default connect(mapStateToProps, mapDispatchToProps)(AppNavigator);
export default AppNavigator;
