import React from 'react';
import {StyleSheet, View} from 'react-native';
import Colors from '../../constant/Colors';
import {Header, PrimaryHeader} from '../../components';
import NotificationCard from '../../components/Cards/NotificationCard';

const Notification = () => {
  return (
    <View style={styles.mainContainer}>
             <Header
        title={'Go back'}
        heading={'Local Market'}
      />
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
  },
  internalContainer: {
    paddingBottom: 20,
    alignItems: 'center',
  },
});

export default Notification;
