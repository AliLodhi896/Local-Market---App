import React from 'react';
import {View, StyleSheet, ViewBase, Text, ScrollView} from 'react-native';
import Colors from '../../constant/Colors';
import {Header} from '../../components';
import ProfileDetails from '../../components/Cards/ProfileDetails';

const Profile = () => {
  return (
    <View style={styles.mainContainer}>
      <Header heading={'Profile'} title={'Go back'} description={''} />
      <View style={styles.internalContainer}>
        <ScrollView>
          <View style={styles.subContainer}>
            <View style={styles.imageContainer}></View>
            <View style={styles.nameContainer}>
              <Text style={styles.name}>Name Here</Text>
            </View>
          </View>
          <ProfileDetails
            label={'Email Address'}
            cardtext={'profile@gmail.com'}
          />
          <ProfileDetails label={'Phone Number'} cardtext={'03362644566'} />
          <ProfileDetails label={'Gender'} cardtext={'male'} />
          <ProfileDetails label={'Address'} cardtext={'test'} />
        </ScrollView>
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
  },
  subContainer: {
    alignItems: 'center',
  },
  imageContainer: {
    marginVertical: '4%',
    backgroundColor: Colors.secondaryColor,
    elevation: 8,
    shadowColor: Colors.primaryText,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 2,
    padding: '18%',
    alignItems: 'center',
    width: '34%',
    borderRadius: 100,
    justifyContent: 'center',
  },
  nameContainer: {
    marginBottom: '6%',
  },
  name: {
    color: Colors.primaryText,
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Profile;
