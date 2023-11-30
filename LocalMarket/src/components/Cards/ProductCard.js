import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import Colors from '../../constant/Colors';
import Icons from '../../constant/Icons';

const ProductCard = props => {
  return (
    <TouchableOpacity onPress={props.onPress} style={styles.cardContainer}>
      <View style={styles.imageContainer}>
        <Image source={props.image} style={{width: '100%', height: '100%'}} />
      </View>
      <View style={styles.addsubContainer}>
        <TouchableOpacity
          style={{
            backgroundColor: Colors.secondaryColor,
            borderRadius: 100,
            height: 25,
            width: 25,
            borderWidth: 1,
            borderColor: Colors.primary,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Icons
            icon_type={'AntDesign'}
            name={'minus'}
            size={20}
            color={Colors.green}
          />
        </TouchableOpacity>
        <Text style={styles.qtyText}>02</Text>
        <TouchableOpacity
          style={{
            backgroundColor: Colors.secondaryColor,
            borderRadius: 100,
            height: 25,
            width: 25,
            borderWidth: 1,
            borderColor: Colors.primary,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Icons
            icon_type={'AntDesign'}
            name={'plus'}
            size={20}
            color={Colors.green}
          />
        </TouchableOpacity>
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
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    width: 140,
    height: 160,
    elevation: 8,
    shadowColor: Colors.primaryText,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 2,
    backgroundColor: Colors.secondaryColor,
    borderRadius: 8,
    marginTop: 10,
  },
  imageContainer: {
    width: '100%',
    height: '60%',
    padding:10
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
    left: 140,
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