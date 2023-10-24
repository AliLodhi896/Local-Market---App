import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import Colors from '../../constant/Colors';

const ProductCard = props => {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.imageContainer}>
        <Image source={props.image} style={{width: '100%', height: '100%'}} />
      </View>
      <TouchableOpacity style={styles.cartIconContainer}>
        <Image
          source={require('..//../assets/icons/cart1.png')}
          style={{width: '100%', height: '100%'}}
        />
      </TouchableOpacity>
      <View style={styles.addsubContainer}>
        <TouchableOpacity
          style={{
            backgroundColor: Colors.secondaryColor,
            borderRadius: 100,
            height: 25,
            width: 25,
            padding: 10,
            borderWidth: 1,
            borderColor: Colors.primary,
          }}></TouchableOpacity>
        <Text style={styles.qtyText}>02</Text>
        <TouchableOpacity
          style={{
            backgroundColor: Colors.primary,
            borderRadius: 100,
            height: 25,
            width: 25,
            padding: 10,
            elevation: 8,
            shadowColor: Colors.primary,
            shadowOffset: {width: 0, height: 2},
            shadowOpacity: 0.2,
            shadowRadius: 2,
          }}></TouchableOpacity>
      </View>
      <View style={styles.detailContainer}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginHorizontal: 6,
          }}>
          <Text style={styles.productName}>{props.name}</Text>
          <Text style={styles.price}>{props.price}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    width: '40%',
    height: '40%',
    elevation: 8,
    shadowColor: Colors.primaryText,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 2,
    backgroundColor: '#ffd3c1',
    borderRadius: 8,
    marginTop: 10,
  },
  imageContainer: {
    width: '80%',
    height: '60%',
    marginLeft: '10%',
    // backgroundColor: 'black'
  },
  detailContainer: {
    backgroundColor: '#fdab8b',
    justifyContent: 'center',
    flex: 1,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
  },
  price: {
    fontSize: 14,
    fontWeight: 'bold',
    marginLeft: '40%',
    color: Colors.primaryText,
    right: 18,
  },
  productName: {
    color: Colors.primaryText,
    fontSize: 16,
    fontWeight: 'bold',
    // textAlign: 'center',
    marginLeft: 4,
  },
  cartIconContainer: {
    width: 35,
    height: 35,
    elevation: 8,
    shadowColor: Colors.primaryText,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 2,
    padding: 6,
    backgroundColor: Colors.secondaryColor,
    borderRadius: 6,
    top: 10,
    left: 100,
    position: 'absolute',
  },
  addsubContainer: {
    flexDirection: 'row',
    marginLeft: 8,
    // justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  qtyText: {
    fontSize: 14,
    color: Colors.primaryText,
    fontWeight: 'bold',
    marginHorizontal: 5,
  },
  // statusContainer: {
  //   flexDirection: 'row',
  //   alignItems: 'center',
  //   marginTop: 6,
  // },
  // dot: {
  //   width: 10,
  //   height: 10,
  //   borderRadius: 50,
  //   backgroundColor: '#4EE476',
  // },
  // status: {
  //   color: '#4EE476',
  //   marginLeft: 4,
  // },
  // editIconContainer:{
  //   width: 16,
  //   height: 16,
  //   marginLeft: '74%',
  //   bottom: 20
  // }
});

export default ProductCard;
