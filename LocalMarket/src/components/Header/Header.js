import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import Colors from '../../constant/Colors';
import { useNavigation } from '@react-navigation/native';

const Header = props => {
  const navigation = useNavigation();
  return (
    <View style={styles.headerContainer}>
      <View style={{flexDirection: 'row', marginHorizontal: '5%', marginTop: 20,alignItems:'center'}}>
      {props.secondary == false ?
          <TouchableOpacity style={{width: 30,height: 30,
            borderRadius:10,
            padding:2,
            backgroundColor:Colors.backgroundColor,
            
          }} onPress={()=>{navigation.openDrawer()}}> 
            <Image
              source={require('../../assets/icons/menu.png')}
              style={{width: '100%', height: '100%'}}
            />
           </TouchableOpacity>
           :
           <TouchableOpacity style={{width: 30,height: 30 }} onPress={()=>{navigation.goBack()}}> 
            <Image
              source={require('../../assets/icons/left.png')}
              style={{width: '100%', height: '100%'}}
            />
           </TouchableOpacity>
          }

        <Text style={styles.headerTitle}>{props.title}</Text>
      </View>
      <View style={{marginTop: '3%'}}>
        <Text style={styles.txt}>{props.heading}</Text>
        <Text style={styles.txt2}>{props.description}</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  headerContainer: {
    flex: 1,
    backgroundColor: Colors.backgroundColor,
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
    fontSize: 14,
    color: Colors.secondaryColor,
    fontWeight: 'bold',
    marginLeft: 10,
  },
});

export default Header;
