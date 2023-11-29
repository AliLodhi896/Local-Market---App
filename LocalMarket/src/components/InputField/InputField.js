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
          <Text style={{fontSize:14,color:Colors.primaryText,textAlign:'left',marginBottom:4}}>
            {props.lable}
          </Text>
        </View>
        <TextInput
          style={[styles.input, props.customStyle]}
          value={field.value}
          ref={ref}
          onChangeText={field.onChange}
          placeholder={props.placeholder}
          placeholderTextColor={Colors.secondaryText}
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
  },
  inputContainer: {
    flex: 1,
    // backgroundColor: Colors.primary,
  },
  input: {
    borderRadius: 6,
    padding: 10,
    color: Colors.primaryText,
    backgroundColor: Colors.secondaryColor,
    borderWidth:1,
    borderColor:Colors.lightText
  },
  imgContainer: {
    backgroundColor: Colors.primary,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    marginTop: '5%',

  },
  img: {
    width: '50%',
    height: '50%',
  },
});

export default InputField;
