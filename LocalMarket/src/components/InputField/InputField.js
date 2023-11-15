import React, {forwardRef} from 'react';
import { StyleSheet, TextInput, View, TouchableOpacity, Image,Text } from 'react-native';
import Colors from '../../constant/Colors';
import {useController} from 'react-hook-form'

const InputField = forwardRef((props,ref) => {
  const {field} = useController({
    control: props.control,
    defaultValue: props.defaultValue || '',
    name: props.name,
    rules: props.rules
  });
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
      <View>
          <Text style={{fontSize:16,color:Colors.primaryText,textAlign:'left',marginBottom:10}}>
            {props.lable}
          </Text>
        </View>
        <TextInput
          style={[styles.input, props.customStyle]}
          value={field.value}
          ref={ref}
          onChangeText={field.onChange}
          placeholder={props.placeholder}
          placeholderTextColor={props.placeholderTextColor}
          secureTextEntry={props.secureTextEntry}
          keyboardType={props.keyboardType}
          multiline={props.multiline}
        />
      </View>
      {props.icon === true && (
        <TouchableOpacity style={styles.imgContainer}>
          <Image
            source={require('../../assets/icons/send.png')}
            style={styles.img}
          />
        </TouchableOpacity>
      )}
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop:10
  },
  inputContainer: {
    flex: 1,
    // backgroundColor: Colors.primary,
  },
  input: {
    borderRadius: 10,
    color: Colors.green,
    height: 50,
    fontWeight: '500',
    backgroundColor: Colors.secondaryColor,
    elevation: 4,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 4},
    paddingLeft:10,
    fontSize:16
  },
  imgContainer: {
    backgroundColor: Colors.primary,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    marginTop: '5%',
    right: 50,
  },
  img: {
    width: '50%',
    height: '50%',
  },
});

export default InputField;
