import React,{useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import  {AppBottomTab}  from './AppNavigation';
import { AuthContext } from '../context/Context';
import { AuthStack } from './AuthNavigation';
import { StoreBottomTab } from './StoreNavigation';

const AppNavigationContainer = () => {
  const {isSignin} = useContext(AuthContext);
  const MyTheme = {
    colors: {
      background: 'transparent',
    },
  };
  return (
    <NavigationContainer  theme={MyTheme}>
      {/* {isSignin == true ? <AppBottomTab /> : <AuthStack />} */}
      
        <AppBottomTab />
    </NavigationContainer>
  );
};
export default AppNavigationContainer;