import React from 'react';
import {View, StyleSheet, Text, TouchableHighlight} from 'react-native';
import {Header, PrimaryButton} from '../../components';
import Colors from '../../constant/Colors';
import CartItem from '../../components/Cards/CartItem';
import {useNavigation} from '@react-navigation/native';
import RazorpayCheckout from 'react-native-razorpay';

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
        {/* <PrimaryButton
          title={'Checkout'} */}
        {/* <TouchableHighlight
          onPress={() => {
            var options = {
              description: 'Credits towards consultation',
              image: 'https://i.imgur.com/3g7nmJC.png',
              currency: 'INR',
              key: '',
              amount: '5000',
              name: 'foo',
              prefill: {
                email: 'void@razorpay.com',
                contact: '9191919191',
                name: 'Razorpay Software',
              },
              theme: {color: '#F37254'},
            };
            RazorpayCheckout.open(options)
              .then(data => {
                // handle success
                alert(`Success: ${data.razorpay_payment_id}`);
              })
              .catch(error => {
                // handle failure
                alert(`Error: ${error.code} | ${error.description}`);
              });
          }}>
            d
          </TouchableHighlight> */}
        <PrimaryButton
          title={'Checkout'}
          onPress={() => {
            var options = {
              description: 'Credits towards consultation',
              image: 'https://i.imgur.com/3g7nmJC.jpg',
              currency: 'INR',
              key: 'rzp_test_NhmDpp1mQ8L7Xm',
              // bex65H3u9ql9GZ4lsWhc66T2
              amount: '5000',
              name: 'Acme Corp',
              order_id: 'order_DslnoIgkIDL8Zt',//Replace this with an order_id created using Orders API.
              prefill: {
                email: 'gaurav.kumar@example.com',
                contact: '9191919191',
                name: 'Gaurav Kumar'
              },
              theme: {color: '#53a20e'}
            }
            RazorpayCheckout.open(options)
              .then(data => {
                // handle success
                alert(`Success: ${data.razorpay_payment_id}`);
              })
              .catch(error => {
                // handle failure
                alert(`Error: ${error.code} | ${error.description}`);
              });
          }}
          containerStyle={styles.containerStyle}
          buttonPressed={styles.buttonPressed}
        />
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
  priceDetails: {
    marginHorizontal: '7%',
    marginTop: '12%',
  },
  txtRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 24,
    borderBottomWidth: 1,
    borderBottomColor: 'lightgrey',
    paddingBottom: 10,
  },
  txt: {
    color: Colors.primaryText,
    fontSize: 16,
    fontWeight: 'bold',
  },
  containerStyle: {
    padding: '4%',
    width: '80%',
    marginTop: '12%',
    marginLeft: '10%',
  },
  buttonPressed: {
    backgroundColor: Colors.btnPress,
  },
});

export default Cart;
