import React from 'react';
import {Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import Colors from '../../constant/Colors';

const CategoryCard = props => {
  return (
    <>
      <TouchableOpacity
        style={{
          height: 70,
          width: 70,
          borderRadius: 30,
          alignItems: 'center',
          marginHorizontal: 2,
          marginVertical:10,
          //  transform: [{ rotate: '30deg' }], // Adjust the degree as per your requirement
        }}>
        <Image
          source={props.uri}
          style={{width: '60%', height: '60%', borderRadius: 30}}
        />
        <Text style={{color: Colors.secondaryColor, fontWeight: 'bold'}}>
          {props.name}
        </Text>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({});

export default CategoryCard;
