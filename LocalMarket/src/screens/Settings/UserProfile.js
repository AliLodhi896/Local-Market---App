import React from 'react';
import {View, StyleSheet, Image, Text, ScrollView} from 'react-native';
import Colors from '../../constant/Colors';
import {Header} from '../../components';
import ProfileDetails from '../../components/Cards/ProfileDetails';

const UserProfile = () => {
  return (
    <View style={styles.mainContainer}>
      <Header heading={'Profile'} title={'Go back'} description={''} />
      <View style={styles.internalContainer}>
        <ScrollView>
          <View style={styles.subContainer}>
            <View style={styles.imageContainer}>
              <Image
                style={{height: '100%', width: '100%'}}
                source={require('../../assets/Images/user.png')}
              />
            </View>
            <View style={styles.nameContainer}>
              <Text style={styles.name}>User Name</Text>
            </View>
          </View>
          <ProfileDetails label={'Email Address'} cardtext={'xyz@domain.com'} />
          <ProfileDetails label={'Phone Number'} cardtext={'1321312312312'} />
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
  },
  internalContainer: {
    backgroundColor: Colors.backgroundColor,
  },
  subContainer: {
    alignItems: 'center',
  },
  imageContainer: {
    backgroundColor: Colors.secondaryColor,
    alignItems: 'center',
    width: 100,
    borderRadius: 100,
    justifyContent: 'center',
    height: 100,
    alignContent:'center',

  },
  nameContainer: {
  },
  name: {
    color: Colors.primaryText,
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default UserProfile;
