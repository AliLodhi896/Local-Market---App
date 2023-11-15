import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import Colors from '../../constant/Colors';
import {useNavigation} from '@react-navigation/native';
import DropdownClass from '../Dropdown/DropdownClass';
import Icons from '../../constant/Icons';

const   SecondaryHeader = props => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        flexDirection: 'row',
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'space-between',
        elevation: 5,
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 5},
        shadowOpacity: 0.2,
        shadowRadius: 3,padding:10,
        backgroundColor:Colors.backgroundColor
      }}>
      <TouchableOpacity
        onPress={() => navigation.openDrawer()}
        style={{
          borderRadius: 100,
          height: 40,
          width: 40,
          alignItems: 'center',
          justifyContent: 'center',
          padding: 10,
          backgroundColor: Colors.green,
        }}>
        <Icons
          name={'list'}
          size={15}
          icon_type={'FontAwesome5'}
          color={Colors.secondaryColor}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('UserProfile')}
        style={{borderRadius: 100, height: 60, width: 60}}>
        <Image
          style={{height: '100%', width: '100%'}}
          source={require('../../assets/Images/user.png')}
        />
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: Colors.backgroundColor,
    elevation: 5,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 5},
    shadowOpacity: 0.2,
    shadowRadius: 3,padding:20
  },
  txt: {
    fontSize: 32,
    color: Colors.primaryText,
    marginHorizontal: '6%',
    fontWeight: 'bold',
  },
  txt2: {
    marginHorizontal: '5%',
    fontWeight: 'bold',
    marginTop: '1%',
    color: Colors.secondaryColor,
  },
  headerTitle: {
    fontSize: 14,
    color: Colors.secondaryColor,
    fontWeight: 'bold',
    marginLeft: 10,
  },
});

export default SecondaryHeader;
