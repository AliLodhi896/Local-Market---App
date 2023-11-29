import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native'; // Import Pressable
import Colors from '../../constant/Colors';
import Background from '../../constant/Background';

const PrimaryButton = props => {
  return (
      <TouchableOpacity  onPress={props.onPress}>
    <Background style={styles.buttonContainer}>

      <Text style={[styles.btnText, props.textStyle]}>{props.title}</Text>
    </Background>

      </TouchableOpacity>
    // <Pressable
    //   onPress={props.onPress}
    //   style={({pressed}) => [
    //     styles.buttonContainer,
    //     props.containerStyle,
    //     props.containerStyleGoogle,
    //     pressed && props.buttonPressed,
    //     pressed && props.googleButtonPressed
    //   ]}>
    //   <Text style={[styles.btnText, props.textStyle, props.textStyle1, props.style]}>{props.title}</Text>
    // </Pressable>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    padding: 15,
    borderRadius: 6,
    alignItems: 'center',
    width: '100%',
    justifyContent:'center',
    marginTop:10
  },
  btnText: {
    fontSize: 20,
    color: Colors.secondaryColor,
    fontWeight: 'bold',
    textAlign: 'center'
  },
});

export default PrimaryButton;
