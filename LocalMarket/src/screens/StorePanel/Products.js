import React, {useState} from 'react';
import {Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {Header} from '../../components';
import Colors from '../../constant/Colors';
import Order from '../../components/Cards/Order';
import Icons from '../../constant/Icons';
import {useNavigation} from '@react-navigation/native';



const Products = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.mainContainer}>
      <Header heading={'My Products'} title={'Go back'} description={''} />
      <View style={styles.internalContainer}>
        <>
          <Order
            image={require('../../assets/Images/Zinger.jpg')}
            date={'25 june 2023'}
            name={'Zinger'}
            price={'15.00'}
            stock={'Avalaible'}
            editIcon={require('../../assets/icons/edit2.png')}
            onPress={() => {
              navigation.navigate('CustomHeaderScreen');
            }}
          />
          <Order
            image={require('../../assets/Images/Zinger.jpg')}
            date={'25 june 2023'}
            name={'Zinger'}
            price={'15.00'}
            stock={'Avalaible'}
            editIcon={require('../../assets/icons/edit2.png')}
            onPress={() => {
              navigation.navigate('CustomHeaderScreen');
            }}
          />
          <Order
            image={require('../../assets/Images/Zinger.jpg')}
            date={'25 june 2023'}
            name={'Zinger'}
            price={'15.00'}
            stock={'Avalaible'}
            editIcon={require('../../assets/icons/edit2.png')}
            onPress={() => {
              navigation.navigate('CustomHeaderScreen');
            }}
          />
        </>
      </View>
      <TouchableOpacity
        style={{
          position: 'absolute',
          bottom: 40,
          right: 20,
          backgroundColor: Colors.primary,
          borderRadius: 40,
          padding: 15,
          shadowColor: '#000',
          shadowOffset: {
            width: 0.5,
            height: 0.5,
          },
          shadowOpacity: 0.2,
          shadowRadius: 5,
          elevation: 2,
        }}
        onPress={() => navigation.navigate('ProductAdd')}>
        <Icons
          icon_type={'Entypo'}
          name={'plus'}
          size={30}
          color={Colors.secondaryColor}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: Colors.backgroundColor,
  },
  internalContainer: {
    backgroundColor: Colors.backgroundColor,
    paddingBottom: 20,
    paddingHorizontal:20
  },
  switchableBox: {
    width: '80%',
    flexDirection: 'row',
    marginTop: '2%',
    borderWidth: 1,
    borderRadius: 30,
    borderColor: Colors.primary,
    padding: 2,
    marginBottom: '4%',
  },
});

export default Products;
