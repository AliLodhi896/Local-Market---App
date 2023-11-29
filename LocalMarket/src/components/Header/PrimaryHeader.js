import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import Colors from '../../constant/Colors';
import {useNavigation} from '@react-navigation/native';
import Icons from '../../constant/Icons';

const PrimaryHeader = props => {
  const navigation = useNavigation();
  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity
        style={styles.logoContainer}
        onPress={() => {
          navigation.openDrawer();
        }}>
        <Image
          source={require('../../assets/Images/female.jpg')}
          style={{width: '100%', height: '100%', borderRadius: 40}}
        />
      </TouchableOpacity>
      <Text style={styles.headerTitle}>{props.title}</Text>
      <TouchableOpacity
        style={styles.logoContainer}
        // onPress={() => {
        //   navigation.openDrawer();
        // }}
      >
        <Icons
          icon_type={'FontAwesome'}
          size={30}
          color={Colors.secondaryColor}
          name={'bell'}
        />
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: Colors.primary,
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    elevation: 10,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 5},
    shadowOpacity: 0.2,
    shadowRadius: 3,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 14,
    color: Colors.secondaryColor,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  logoContainer: {
    width: 40,
    height: 40,
    borderRadius: 10,
    padding: 2,
    backgroundColor: Colors.primary,
    borderRadius: 40,
    alignItems: 'center',
  },
});

export default PrimaryHeader;
