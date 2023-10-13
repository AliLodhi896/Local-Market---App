import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import Colors from '../../constant/Colors';

const FeaturedStore = props => {
  return (
    <TouchableOpacity style={styles.card}>
      <Image source={props.image} style={{width: '100%', height: '60%'}} />
      <View style={styles.cardContent}>
        <Text style={styles.name}>{props.name}</Text>

        <View style={styles.detailText1}>
          <Image
            source={require('../../assets/icons/delivery.png')}
            style={{width: '6%', height: '80%', top: 2}}
          />
          <Text style={styles.secondaryText}>Free delivery</Text>
          <Image
            source={require('../../assets/icons/stopwatch.png')}
            style={{width: '6%', height: '80%', top: 2}}
          />
          <Text style={styles.secondaryText}>10-15 mins</Text>
        </View>
        <View style={styles.detailText1}>
          <View style={styles.detailContainer}>
            <Text style={styles.secondaryText1}>Burger</Text>
          </View>

          <View style={styles.detailContainer}>
            <Text style={styles.secondaryText1}>Chicken</Text>
          </View>

          <View style={styles.detailContainer}>
            <Text style={styles.secondaryText1}>Fast Food</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    marginHorizontal: '2%',
    marginTop: 10,
    width: '78%',
    height: 210,
    borderRadius: 12,
    backgroundColor: Colors.secondaryColor,
    elevation: 5,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 5},
    shadowOpacity: 0.2,
    shadowRadius: 3,
    overflow: 'hidden',
  },
  cardContent: {
    borderRadius: 20,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000000',
    marginVertical: '2%',
    marginLeft: '2%',
  },
  detailText1: {
    flexDirection: 'row',
    marginLeft: '2%',
  },
  secondaryText: {
    color: 'grey',
    fontSize: 12,
    marginLeft: 4,
    marginRight: 20,
  },
  detailContainer:{
    backgroundColor: '#f4f4f4',
    marginTop: '2%',
    marginLeft: 4,
    marginRight: 10,
    paddingVertical: 2,
    paddingHorizontal: 6,
    borderRadius: 4
  },
  secondaryText1: {
    color: 'grey',
    fontSize: 12,
    // marginLeft: 20,
  },
});

export default FeaturedStore;
