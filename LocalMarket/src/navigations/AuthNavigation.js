import React from 'react';
import Colors from '../constant/Colors';
import {createStackNavigator, TransitionSpecs} from '@react-navigation/stack';
import Home from '../screens/Home';
import Subject from '../screens/Subject';
import { Welcome } from '../screens/Authentication';
import OnBoarding from '../screens/Authentication/OnBoarding';
import Registration from '../screens/Authentication/Registration';


const MainStack = createStackNavigator();

export const AuthStack = ({}) => {
  const horizontalAnimation = {
    gestureDirection: 'horizontal',
    transitionSpec: {
      open: TransitionSpecs.TransitionIOSSpec,
      close: TransitionSpecs.TransitionIOSSpec,
    },
    cardStyleInterpolator: ({current, layouts}) => {
      return {
        cardStyle: {
          transform: [
            {
              translateX: current.progress.interpolate({
                inputRange: [0, 1],
                outputRange: [layouts.screen.width, 0],
              }),
            },
          ],
        },
      };
    },
  };

  const defaultStackNavOptions = {
    headerStyle: {
      backgroundColor: Colors.primary,
      elevation: 0,
      shadowOpacity: 0,
    },
    headerTitleStyle: {
      fontSize: 18,
    },
    headerTintColor: 'white',
    gestureEnabled: true,
    ...horizontalAnimation,
  };

  return (
    <MainStack.Navigator screenOptions={defaultStackNavOptions}>
      <MainStack.Screen
        name="Welcome"
        component={Welcome}
        options={{headerShown: false}}
      />
      <MainStack.Screen
        name="OnBoarding"
        component={OnBoarding}
        options={{headerShown: false}}
      />
      <MainStack.Screen
        name="Registration"
        component={Registration}
        options={{headerShown: false}}
      />

    </MainStack.Navigator>
  );
};
