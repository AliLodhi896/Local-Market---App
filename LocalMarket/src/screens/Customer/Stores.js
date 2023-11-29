import React, {useState, useRef} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import Colors from '../../constant/Colors';
import {PrimaryHeader, Card, CategoryCard} from '../../components';
import {useNavigation} from '@react-navigation/native';
import {DrawerAnimationPage} from '../../components/animationconstant/DrawerAnimationPage';
import Animated from 'react-native-reanimated';
import SearchInput from '../../components/InputField/SearchInput';

const Stores = () => {
  const navigation = useNavigation();
  const animatedStyle = DrawerAnimationPage();

  const industries = [
    {id: 1, name: 'Industry 1',uri:require('../../assets/Images/female.jpg')},
    {id: 2, name: 'Industry 2',uri:require('../../assets/Images/female.jpg')},
    {id: 3, name: 'Industry 3',uri:require('../../assets/Images/female.jpg')},
    {id: 4, name: 'Industry 4',uri:require('../../assets/Images/female.jpg')},
    {id: 5, name: 'Industry 5',uri:require('../../assets/Images/female.jpg')},
    {id: 5, name: 'Industry 5',uri:require('../../assets/Images/female.jpg')},
    {id: 5, name: 'Industry 5',uri:require('../../assets/Images/female.jpg')},
    {id: 5, name: 'Industry 5',uri:require('../../assets/Images/female.jpg')},
    {id: 5, name: 'Industry 5',uri:require('../../assets/Images/female.jpg')},
    {id: 5, name: 'Industry 5',uri:require('../../assets/Images/female.jpg')},
    {id: 5, name: 'Industry 5',uri:require('../../assets/Images/female.jpg')},
  ];
 
  return (
    <Animated.View
      style={[styles.container(animatedStyle), styles.mainContainer]}>
      <PrimaryHeader title={'Local Market'} />
      <View style={styles.internalContainer}>
        <View style={styles.internalContainer}>
          <SearchInput boxStyle={{marginVertical:10}} placeholder={'Search Industries...'} />
          <View style={styles.industriesContainer}>
            {industries?.map((item)=>{
              return(
                <CategoryCard uri={item?.uri} name={item?.name} />
              )
            })
            }
          </View>
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
    padding: 4,
    paddingVertical: 10,
  },
  industriesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});

export default Stores;
