import React from 'react';
import {StyleSheet, View} from 'react-native';
import Colors from '../../constant/Colors';
import {Header} from '../../components';
import NotificationCard from '../../components/Cards/NotificationCard';

const Notification = () => {
  return (
    <View style={styles.mainContainer}>
      <Header heading={'Notification'} title={'Go back'} description={''} />
      <View style={styles.internalContainer}>
        <NotificationCard/>
        <NotificationCard/>
        <NotificationCard/>
        
        
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
    alignItems: 'center',
  },
});

export default Notification;
