import React,{useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import  {AppBottomTab}  from './AppNavigation';
import { AuthContext } from '../context/Context';
import { AuthStack } from './AuthNavigation';
import { StoreBottomTab } from './StoreNavigation';
import Colors from '../constant/Colors';

const AppNavigationContainer = () => {
  const {isSignin} = useContext(AuthContext);
  const MyTheme = {
    colors: {
      background: Colors.primary,
    },
  };
  return (
    <NavigationContainer  theme={MyTheme}>
      {/* {isSignin == false &&   <AuthStack />}
      {isSignin == true && role == 'Customer' && <AppBottomTab />}
      {isSignin == true && role == 'Store' && <AppBottomTab />} */}
      
        <AppBottomTab />
    </NavigationContainer>
  );
};
export default AppNavigationContainer;