import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Colors from '../../constant/Colors';

const Order = props => {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.logoContainer}>
        <Image
          source={props.image}
          style={{width: '100%', height: '100%', borderRadius: 6}}
        />
      </View>
      <View style={styles.detailContainer}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={styles.date}>{props.date}</Text>
          <View>
            <Text style={styles.price}>${props.price}</Text>
          </View>
        </View>
        <Text style={styles.storeName}>{props.name}</Text>
          <View style={styles.statusContainer}>
            <View style={styles.dot}></View>
              <Text style={styles.status}>{props.stock}</Text>
              
              
          </View>
          <View style={styles.editIconContainer}>
            <TouchableOpacity onPress={props.onPress}>
              <Image source={props.editIcon} style={{width: '100%', height: '100%'}}/>
            </TouchableOpacity>
          </View>
        
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    width: '90%',
    height: 100,
    elevation: 8,
    shadowColor: Colors.primaryText,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 2,
    marginTop: '6%',
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 10,
    flexDirection: 'row',
  },
  logoContainer: {
    width: '24%',
    backgroundColor: 'white',
    elevation: 8,
    shadowColor: Colors.primaryText,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 2,
    padding: 6,
    borderRadius: 10,
  },
  detailContainer: {
    marginLeft: '5%',
  },
  date: {
    color: Colors.secondaryText,
    fontSize: 12,
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: '40%',
    color: Colors.primary,
  },
  storeName: {
    color: Colors.primaryText,
    fontSize: 18,
    fontWeight: 'bold',
  },
  statusContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 6,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 50,
    backgroundColor: '#4EE476',
  },
  status: {
    color: '#4EE476',
    marginLeft: 4,
  },
  editIconContainer:{
    width: 16,
    height: 16,
    marginLeft: '74%',
    bottom: 20
  }
});

export default Order;
