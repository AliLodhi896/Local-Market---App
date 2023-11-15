import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import Colors from '../../constant/Colors';
import { useNavigation } from '@react-navigation/native';
import Icons from '../../constant/Icons';

const Header = props => {
  const navigation = useNavigation();
  return (
    <View style={styles.headerContainer}>
      <View style={{flexDirection: 'row', marginHorizontal: '5%', marginTop: 20,alignItems:'center',justifyContent:'space-between'}}>
           <TouchableOpacity style={{width: 30,height: 30 }} onPress={()=>{navigation.goBack()}}> 
            <Image
              source={require('../../assets/icons/left.png')}
              style={{width: '100%', height: '100%'}}
            />
           </TouchableOpacity>
        <Text style={styles.headerTitle}>{props.heading}</Text>
        <View
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
          name={'shopping-cart'}
          size={15}
          icon_type={'FontAwesome5'}
          color={Colors.secondaryColor}
        />
      </View>
      </View>
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
    shadowRadius: 3,padding:10
  },
  txt: {
    fontSize: 32,
    color: Colors.secondaryColor,
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
    fontSize: 32,
    color: Colors.primaryText,
    marginHorizontal: '6%',
    fontWeight: 'bold',
  },
});

export default Header;
