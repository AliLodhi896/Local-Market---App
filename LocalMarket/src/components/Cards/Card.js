import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import Colors from '../../constant/Colors';

const Card = props => {
  return (
    <>
      {props.dashboard == false ? (
        <TouchableOpacity
          style={[styles.card, props.style]}
          onPress={props.onPress}>
          <View style={styles.cardContent}>
            <Image
              source={require('../../assets/Images/Starbucks.jpg')}
              style={{width: '100%', height: '60%'}}
            />
            <Text style={styles.title}>{props.title}</Text>
          </View>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={[styles.dashboardCard, props.style]}
          onPress={props.onPress}>
          <View style={styles.cardContent}>
            <Text style={styles.dashboardCarttitle}>{props.title}</Text>
            <Text style={styles.dashboardCarttitle}>{props.total}</Text>
          </View>
        </TouchableOpacity>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  card: {
    marginHorizontal: '2%',
    marginTop: '10%',
    width: '40%',
    height: 150,
    borderRadius: 20,
    backgroundColor: Colors.secondaryColor,
    elevation: 5,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 5},
    shadowOpacity: 0.2,
    shadowRadius: 3,
    padding: 6,
  },
  
  cardContent: {
    backgroundColor: Colors.backgroundColor,
    height: '100%',
    borderRadius: 20,
    alignContent: 'center',
    alignItems: 'center',
    justifyContent:'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    marginTop: '10%',
  },
  dashboardCard: {
    marginHorizontal: '2%',
    marginTop: '10%',
    width: '100%',
    height: 140,
    borderRadius: 20,
    backgroundColor: Colors.secondaryColor,
    elevation: 5,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 5},
    shadowOpacity: 0.2,
    shadowRadius: 3,
    padding: 6,
  },
  dashboardCarttitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default Card;
