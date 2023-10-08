import React,{useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { HomeStack } from './AppNavigation';
import { AuthContext } from '../context/Context';
import { AuthStack } from './AuthNavigation';

const AppNavigationContainer = () => {
  const {isSignin} = useContext(AuthContext);
  return (
    <NavigationContainer>
      {isSignin == true ? <HomeStack /> : <AuthStack />}
      
        {/* <HomeStack /> */}
    </NavigationContainer>
  );
};
export default AppNavigationContainer;