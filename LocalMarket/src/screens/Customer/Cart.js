import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {Header, PrimaryButton} from '../../components';
import Colors from '../../constant/Colors';
import CartItem from '../../components/Cards/CartItem';
import {useNavigation} from '@react-navigation/native';

const Cart = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.mainContainer}>
      <Header heading={'Cart'} title={'Go back'} description={''} />
      <View style={styles.internalContainer}>
        <CartItem
          productName={'Zinger Burger'}
          additional={'with cheese'}
          price={'$15.00'}
          onPress={() => {
            navigation.navigate('ProductDetails');
          }}
        />
        <CartItem
          productName={'Red n Hot'}
          additional={'with cheese'}
          price={'$15.00'}
          onPress={() => {
            navigation.navigate('ProductDetails');
          }}
        />
        <View style={styles.priceDetails}>
          <View style={styles.txtRow}>
            <Text style={styles.txt}>Subtotal</Text>
            <Text style={styles.txt}>$31.00</Text>
          </View>

          <View style={styles.txtRow}>
            <Text style={styles.txt}>Delivery</Text>
            <Text style={styles.txt}>$1.00</Text>
          </View>

          <View style={styles.txtRow}>
            <Text style={styles.txt}>Total</Text>
            <Text style={styles.txt}>$32.00</Text>
          </View>
        </View>
        <PrimaryButton title={'Checkout'} containerStyle={styles.containerStyle}/>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: Colors.backgroundColor,
    justifyContent: 'space-between',
  },
  internalContainer: {
    backgroundColor: Colors.secondaryColor,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    height: '85%',
    paddingBottom: 20,
  },
  priceDetails:{
    marginHorizontal: '7%',
    marginTop: '12%'
  },
  txtRow:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 24,
    borderBottomWidth: 1,
    borderBottomColor: 'lightgrey',
    paddingBottom: 10
  },
  txt:{
    color: Colors.primaryText,
    fontSize: 16,
    fontWeight: 'bold'
  },
  containerStyle:{
    padding: '4%',
    borderRadius: 25,
    alignItems: 'center',
    width: '80%',
    marginTop: '12%',
    marginLeft: '10%'
  }
});

export default Cart;
