import React from 'react';
import {StyleSheet, Text, Pressable} from 'react-native'; // Import Pressable
import Colors from '../../constant/Colors';

const PrimaryButton = props => {
  return (
    <Pressable
      onPress={props.onPress}
      style={({pressed}) => [
        styles.buttonContainer,
        props.containerStyle,
        props.containerStyleGoogle,
        pressed && props.buttonPressed,
        pressed && props.googleButtonPressed
      ]}>
      <Text style={[styles.btnText, props.textStyle, props.textStyle1, props.style]}>{props.title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: Colors.primary,
    padding: '4%',
    borderRadius: 25,
    alignItems: 'center',
    width: '100%',
    justifyContent:'center',
  },
  btnText: {
    fontSize: 20,
    color: Colors.backgroundColor,
    fontWeight: 'bold',
    textAlign: 'center'
  },
});

export default PrimaryButton;
