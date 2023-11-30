import React, {useState, useRef} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import Colors from '../../constant/Colors';
import {PrimaryHeader, ProductCard, } from '../../components';
import {useNavigation} from '@react-navigation/native';
import {DrawerAnimationPage} from '../../components/animationconstant/DrawerAnimationPage';
import Animated from 'react-native-reanimated';
import SearchInput from '../../components/InputField/SearchInput';

const Products = () => {
  const navigation = useNavigation();
  const animatedStyle = DrawerAnimationPage();
  const stores = [
    {
      id: 1,
      name: 'Store 1',
      uri: require('../../assets/Images/female.jpg'),
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
    },
    {
      id: 2,
      name: 'Store 2',
      uri: require('../../assets/Images/female.jpg'),
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
    },
    {
      id: 3,
      name: 'Store 3',
      uri: require('../../assets/Images/female.jpg'),
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
    },
    {
      id: 5,
      name: 'Store 5',
      uri: require('../../assets/Images/female.jpg'),
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
    },
    {
      id: 5,
      name: 'Store 5',
      uri: require('../../assets/Images/female.jpg'),
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
    },
  ];

  return (
    <Animated.View
      style={[styles.container(animatedStyle), styles.mainContainer]}>
      <PrimaryHeader title={'Local Market'} />
      <View style={styles.internalContainer}>
        <View style={{width: '20%', height: '100%'}}></View>
        <View style={{width: '80%'}}>
          <ScrollView >
            <View style={styles.industriesContainer}>
            {stores?.map(item => {
              return (
                <ProductCard
                  image={require('../../assets/Images/KfcZinger.jpg')}
                  name={'Zinger'}
                  price={'$15.00'}
                />
              );
            })}
            </View>
            
          </ScrollView>
        </View>
      </View>
    </Animated.View>
  );
};
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: Colors.primary,
  },
  container: animatedStyle => ({
    ...animatedStyle,
    flex: 1,
  }),
  internalContainer: {
    width: '100%',
    flexDirection: 'row',
  },
  industriesContainer: {
    flexDirection:'row',
    flexWrap:"wrap",
    justifyContent:'space-between',
    marginHorizontal:10
  },
});

export default Products;
