import React from 'react';
import {Text, TouchableOpacity, StyleSheet, Image, View} from 'react-native';
import Colors from '../../constant/Colors';
import Icons from '../../constant/Icons';

const StoreCard = props => {
  return (
    <>
      <TouchableOpacity onPress={props.onPress} style={styles.cardContainer}>
        <View style={styles.imageContainer}>
          <Image source={props.uri} style={{width: '80%', height: '60%'}} />
        </View>
        <View style={{width: '60%'}}>
          <Text
            style={{
              color: Colors.primaryText,
              fontWeight: 'bold',
              fontSize: 18,
            }}>
            {props.name}
          </Text>
          <Text
            numberOfLines={2}
            style={{
              color: Colors.primaryText,
              fontSize: 12,
              width: '90%',
              marginTop: 4,
            }}>
            {props.description}
          </Text>
          <Text
            numberOfLines={2}
            style={{
              color: Colors.secondaryText,
              fontSize: 12,
              width: '90%',
              marginTop: 2,
            }}>
            {props.address}
          </Text>
        </View>
        <TouchableOpacity style={{padding:4,backgroundColor:Colors.primary,height:40,borderRadius:10,width:40,alignItems:'center',justifyContent:'center'}}>
          <Icons
            name={'map-marker'}
            size={25}
            icon_type={'FontAwesome'}
            color={Colors.secondaryColor}
          />
        </TouchableOpacity >
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    width: '100%',
    borderRadius: 10,
    marginVertical: 10,
    padding: 20,
    height: 120,
    backgroundColor: Colors.secondaryColor,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  imageContainer: {
    height: 100,
    width: 100,
  },
});

export default StoreCard;
