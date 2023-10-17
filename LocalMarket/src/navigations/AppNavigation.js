import React from 'react';
import Colors from '../constant/Colors';
import {createStackNavigator, TransitionSpecs} from '@react-navigation/stack';
import Home from '../screens/Home';
import Subject from '../screens/Subject';
import LessonDetail from '../screens/LessonDetail';
import CreateAILesson from '../screens/CreateAILesson';
import Industries from '../screens/Customer/Industries';
import Products from '../screens/Customer/Products';
import ProductDetails from '../screens/Customer/ProductDetails';
import Stores from '../screens/Customer/Stores';
import Cart from '../screens/Customer/Cart';
import MyOrders from '../screens/Customer/MyOrders';


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
        name="Stores"
        component={Stores}
        options={{headerShown: false}}
      />
       <MainStack.Screen
        name="Products"
        component={Products}
        options={{headerShown: false}}
      />
      <MainStack.Screen
        name="ProductDetails"
        component={ProductDetails}
        options={{headerShown: false}}
      />
      <MainStack.Screen
        name="Cart"
        component={Cart}
        options={{headerShown: false}}
      />
      <MainStack.Screen
        name="My Orders"
        component={MyOrders}
        options={{headerShown: false}}
      />

    </MainStack.Navigator>
  );
};
