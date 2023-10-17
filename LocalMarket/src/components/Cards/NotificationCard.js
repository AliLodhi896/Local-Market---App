import React from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import Colors from '../../constant/Colors';

const NotificationCard = () => {
  return (
    <View style={styles.mainContainer}>
      <Pressable
        style={({pressed}) => [
          styles.pressable,
          pressed && styles.pressedItem,
        ]}>
        <View style={styles.iconDateContainer}>
          <View style={styles.iconContainer}>
            <Image
              source={require('../../assets/icons/calendar.png')}
              style={{width: '100%', height: '100%'}}
            />
          </View>
          <View style={styles.dateContainer}>
            <Text style={styles.date}>2023-10-13</Text>
          </View>
          <View style={styles.timeContainer}>
            <Text style={styles.date}>17:2:47</Text>
          </View>
        </View>
        <View style={styles.messageContainer}>
          <Text style={styles.messageTitle}>Message</Text>
          <Text style={styles.message}>Appointment has been booked.</Text>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
    mainContainer: {
    width: '90%',
    height: '16%',
    elevation: 4,
    shadowColor: Colors.primaryText,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 2,
    marginTop: '6%',
    backgroundColor: Colors.secondaryColor,
    borderRadius: 10,
    marginLeft: 4,
  },
  pressable:{
    flex: 1,
    borderRadius: 10,
    paddingLeft: '4%'
  },
  pressedItem: {
    backgroundColor: '#f9f9f9'
  },
  iconDateContainer:{
    flexDirection: 'row',
    alignItems: 'center'
  },
  iconContainer: {
    width: '4.8%',
    height: '41.2%',
    
  },
  dateContainer:{
    marginLeft: '5%',
  },
  date:{
    fontSize: 12,
    fontWeight: 'bold',
    color: Colors.primaryText
  },
  timeContainer:{
    marginLeft: '2%',
  },
  messageContainer:{
    marginTop: 2
  },
  messageTitle:{
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.primaryText
  },
  message:{
    fontSize: 14,
    color: Colors.secondaryText
  }
  
});

export default NotificationCard;
