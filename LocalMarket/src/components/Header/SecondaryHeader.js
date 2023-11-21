import React, {useContext} from 'react';
import {
  Text,
  TouchableOpacity,
  ActivityIndicator,
  StyleSheet,
  View,
  Image,
} from 'react-native';

// import Constants
import Icons from '../../constant/Icons';
import Colors from '../../constant/Colors';

const SecondaryHeader = props => {

  return (
    <View
      style={{
        alignItems: 'center',
        width: '100%',
        padding: 20,
        flexDirection: 'row',
        paddingVertical: 40,
        justifyContent: 'space-between',
      }}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <TouchableOpacity
          style={[styles.container, props.style]}
          onPress={props.onPress}>
          {/* <Image
            source={require('../../assets/Images/user.png')}
            style={{width: '100%', height: '100%'}}
          /> */}
        </TouchableOpacity>
        <View style={{marginLeft: 10}}>
          <Text
            style={{
              fontSize: 14,
              fontWeight: 'bold',
              color: Colors.primaryText,
            }}>
           User name
          </Text>
          <Text style={{fontSize: 10, color: Colors.primaryText}}>
            user email
          </Text>
        </View>
      </View>
     <TouchableOpacity style={{borderRadius:100,backgroundColor:Colors.green,padding:10}} onPress={props.onPressRefresh}>
     <Icons
        icon_type={'Feather'}
        name={'bell'}
        size={20}
        color={Colors.secondaryColor}
      />
     </TouchableOpacity>
    </View>
  );
};

export default SecondaryHeader;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.backgroundColor,
    height: 60,
    width: 60,
    shadowColor: '#000',
    shadowOffset: {
      width: 0.5,
      height: 0.5,
    },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 2,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
