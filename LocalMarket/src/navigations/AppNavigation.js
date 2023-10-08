import React from 'react';
import Colors from '../constant/Colors';
import {createStackNavigator, TransitionSpecs} from '@react-navigation/stack';
import Home from '../screens/Home';
import Subject from '../screens/Subject';
import LessonDetail from '../screens/LessonDetail';
import CreateAILesson from '../screens/CreateAILesson';


const MainStack = createStackNavigator();

export const HomeStack = ({}) => {
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
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <MainStack.Screen
        name="Subject"
        component={Subject}
        options={{headerShown: false}}
      />
      <MainStack.Screen
        name="LessonDetail"
        component={LessonDetail}
        options={{headerShown: false}}
      />
      <MainStack.Screen
        name="CreateAILesson"
        component={CreateAILesson}
        options={{headerShown: false}}
      />
    </MainStack.Navigator>
  );
};
