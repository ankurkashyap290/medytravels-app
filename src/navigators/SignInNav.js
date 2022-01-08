import React from 'react';

// import SignIn from '../screens/signin';
// import VerifyEmail from "../screens/verifyEmail";
// import VerifyMobile from "../screens/verifyMobile";
// import Registration from "../screens/registration";
// import CreateProfile from "../screens/createProfile";
// import ResetPassword from '../screens/resetPassword';
// import CreateAccount from "../screens/createAccount";
// import RegisterMobile from "../screens/registrationMobile";
// import ForgotPassword from '../screens/forgotPassword';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

const SignInStack = createNativeStackNavigator();

const SignInRoutes = props => {
  return (
    <SignInStack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={'SignIn'}>
      {/* <SignInStack.Screen name="SignIn" component={SignIn}
                                options={{contentStyle: {backgroundColor: '#fff'}}}
            />
            <SignInStack.Screen name="Registration" component={Registration}
                                options={{contentStyle: {backgroundColor: '#fff'}}}
            />
            <SignInStack.Screen name="RegisterMobile" component={RegisterMobile} />
            <SignInStack.Screen name="CreateAccount" component={CreateAccount} />
            <SignInStack.Screen name="VerifyEmail" component={VerifyEmail} />
            <SignInStack.Screen name="VerifyMobile" component={VerifyMobile} />
            <SignInStack.Screen name="CreateProfile" component={CreateProfile} />
            <SignInStack.Screen name="ForgotPassword" component={ForgotPassword}
                                options={{headerShown: true, title: '', contentStyle: {backgroundColor: '#fff'}}}
            />
            <SignInStack.Screen name="ResetPassword" component={ResetPassword}
                                options={{headerShown: true, title: '', contentStyle: {backgroundColor: '#fff'}}}
            /> */}
    </SignInStack.Navigator>
  );
};

export default SignInRoutes;
