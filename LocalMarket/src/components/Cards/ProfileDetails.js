import React from 'react';
import Colors from '../../constant/Colors';
import {StyleSheet, View, Text} from 'react-native';

const ProfileDetails = (props) => {
  return (
    <View style={styles.detailsContainer}>
      <View style={styles.textContainer}>
        <Text style={styles.label}>{props.label}</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.cardText}>{props.cardtext}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  detailsContainer: {
    marginTop: '4%',
    marginHorizontal: '6%',
    marginBottom: 2
  },
  label: {
    color: Colors.primaryText,
    fontSize: 14,
    fontWeight: 'bold',
  },
  card: {
    marginTop: '2%',
    backgroundColor: Colors.secondaryColor,
    elevation: 4,
    shadowColor: Colors.primaryText,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 2,
    width: '100%',
    padding: 12,
    borderRadius: 6,
    // marginBottom: 2
  },
  cardText: {
    color: Colors.primaryText,
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default ProfileDetails;
