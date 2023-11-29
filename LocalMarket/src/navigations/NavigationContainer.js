import React,{useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import  {AppBottomTab}  from './AppNavigation';
import { AuthContext } from '../context/Context';
import { AuthStack } from './AuthNavigation';
import { StoreBottomTab } from './StoreNavigation';

const AppNavigationContainer = () => {
  const {isSignin,role} = useContext(AuthContext);
  const MyTheme = {
    colors: {
      background: 'transparent',
    },
  };
  return (
    <NavigationContainer  theme={MyTheme}>
      {/* {isSignin == false && <AuthStack />}
      {isSignin == true && role == 1 && <AppBottomTab />}
      {isSignin == true && role == 2 && <StoreBottomTab />} */}
      <AppBottomTab />
    </NavigationContainer>
  );
};
export default AppNavigationContainer;