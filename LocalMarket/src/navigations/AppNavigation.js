
import React, {useContext, useState, useEffect} from 'react';
import {
  Image,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  Animated,
} from 'react-native';
///***********Icon
//Import Navigation
import {createStackNavigator, TransitionSpecs} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Colors from '../constant/Colors';



import {createDrawerNavigator} from '@react-navigation/drawer';

import CustomDrawer from './CustomDrawer';
import Products from '../screens/Customer/Products';
import ProductDetails from '../screens/Customer/ProductDetails';
import Industries from '../screens/Customer/Industries';
import Cart from '../screens/Customer/Cart';
import MyOrders from '../screens/Customer/MyOrders';
import Icons from '../constant/Icons';
import Notification from '../screens/Settings/Notification';
import Stores from '../screens/Customer/Stores';

//******SCREEN********* */

const MainStack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

export default function DrawerNavigation() {
  return (
    <View style={{flex: 1, backgroundColor: Colors.backgroundColor}}>
      <Drawer.Navigator
        screenOptions={{
          drawerStyle: {
            flex: 1,
            width: '70%',
            paddingRight: 20,
            backgroundColor: 'transparent',
          },
          statusBarColor: Colors.primary,
          overlayColor: 'transparent',
          headerShown: false,
          drawerType: 'slide',
        }}
        drawerContent={props => {
          return <CustomDrawer {...props} />;
        }}
        initialRouteName="Home">
        <Drawer.Screen
          name="HomeStack"
          component={HomeStack}
          options={{headerShown: false}}
        />
      </Drawer.Navigator>
    </View>
  );
}

export const HomeStack = ({navigation}) => {
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
        name="Industries"
        component={Industries}
        options={{headerShown: false}}
      />
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
      <MainStack.Screen
        name="Notification"
        component={Notification}
        options={{headerShown: false}}
      />


    </MainStack.Navigator>
  );
};

const TabArr = [
  {
    route: 'Home',
    lable: 'App',
    icon: (
      <Icons
        name={'home'}
        size={25}
        icon_type={'FontAwesome5'}
        color={Colors.secondaryColor}
      />
    ),
    component: DrawerNavigation,
  },
  {
    route: 'Cart',
    lable: 'Cart',
    icon: (
      <Icons
        name={'shopping-cart'}
        size={25}
        icon_type={'FontAwesome5'}
        color={Colors.secondaryColor}
      />
    ),
    component: Cart,
  },

  {
    route: 'Orders',
    lable: 'Orders',
    icon: (
      <Icons
        name={'shopping-bag'}
        size={25}
        icon_type={'Entypo'}
        color={Colors.secondaryColor}
      />
    ),
    component: MyOrders,
  }
  ,
  {
    route: 'Notifications',
    lable: 'Notifications',
    icon: (
      <Icons
        name={'bell-alt'}
        size={25}
        icon_type={'Fontisto'}
        color={Colors.secondaryColor}
      />
    ),
    component: Notification,
  },
];

const {width} = Dimensions.get('window');
const MARGIN = 0;
const Tab_Bar_Width = width - 1 * MARGIN;
const TAB_WIDTH = Tab_Bar_Width / TabArr.length;

function MyTabBar({state, descriptors, navigation}) {
  const [translateX] = useState(new Animated.Value(0));

  const translateTab = index => {
    Animated.spring(translateX, {
      toValue: index * TAB_WIDTH,
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    translateTab(state.index);
  }, [state.index]);

  return (
    <View style={styles.mainBox}>
      <Animated.View style={[styles.slidingTabCotainer, {}]}>
        <Animated.View
          style={[styles.slidingTab, {transform: [{translateX}]}]}
        />
      </Animated.View>

      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate({name: route.name, merge: true});
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };
        const tabBarIcons = options.tabBarIcon;
        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{flex: 1, alignItems: 'center'}}>
            <TabIcon
              tabIcon={tabBarIcons?.activeIcon}
              isFocused={isFocused}
              label={label}
              index={state.index}
            />
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const TabIcon = ({isFocused, tabIcon, label, index}) => {
  const [translateY] = useState(new Animated.Value(0));
  const translateIcon = val => {
    Animated.spring(translateY, {toValue: val, useNativeDriver: true}).start();
  };
  useEffect(() => {
    if (isFocused) {
      translateIcon(-15);
    } else {
      translateIcon(0);
    }
  }, [index]);
  return (
    <>
      <Animated.View style={{width: 28, height: 28, transform: [{translateY}]}}>
        {tabIcon}
      </Animated.View>
      <Text
        style={{
          color: isFocused ? Colors.primary : Colors.secondary,
          fontSize: 12,
          fontWeight: 500,
        }}>
        {label}
      </Text>
    </>
  );
};

export const AppBottomTab = () => {
  const defaultTabNavOptions = {
    tabBarStyle: {
      backgroundColor: Colors.secondary,
    },
    tabBarActiveTintColor: Colors.secondary,
  };
  return (
    <Tab.Navigator
      initialRouteName="Dashboard"
      tabBar={props => <MyTabBar {...props} />}
      screenOptions={{...defaultTabNavOptions}}>
      {TabArr.map((item, index) => {
        return (
          <Tab.Screen
            name={item?.route}
            component={item?.component}
            options={{
              headerShown: false,
              tabBarShowLabel: false,
              tabBarIcon: {activeIcon: item.icon},
            }}
          />
        );
      })}
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  mainBox: {
    width: Tab_Bar_Width,
    flexDirection: 'row',
    height: 60,
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: Colors.primary,
    justifyContent: 'space-around',
    elevation: 10,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 5},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  slidingTabCotainer: {
    width: TAB_WIDTH,
    ...StyleSheet.absoluteFillObject,
    alignItems: 'center',
  },
  slidingTab: {
    width: 60,
    height: 60,
    borderRadius: 40,
    backgroundColor: Colors.primary,
    position: 'absolute',
    bottom: 25,
    borderWidth: 4,
    borderColor: Colors.secondaryColor,
  },
});

