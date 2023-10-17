import React from 'react';

import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  ImageBackground,
} from 'react-native';
import Colors from '../../constant/Colors';
import {InputField, PrimaryButton} from '../../components';
import {useForm} from 'react-hook-form';
import {useNavigation} from '@react-navigation/native';


const Registration = () => {
    const navigation = useNavigation();

  return (
    <View style={styles.mainContainer}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Sign up</Text>
      </View>
      <InputField
        customStyle={styles.customStyle}
        // control={control}
        placeholder={'First Name'}
        placeholderTextColor={Colors.primaryText}
      />
      <InputField
        customStyle={styles.customStyle}
        // control={control}
        placeholder={'Last Name'}
        placeholderTextColor={Colors.primaryText}
      />
      <InputField
        customStyle={styles.customStyle}
        // control={control}
        placeholder={'Email'}
        placeholderTextColor={Colors.primaryText}
        keyboardType="email-address"
      />
      <InputField
        customStyle={styles.customStyle2}
        // control={control}
        placeholder={'Password'}
        placeholderTextColor={Colors.primaryText}
        secureTextEntry={true}
      />
      <InputField
        customStyle={styles.customStyle}
        // control={control}
        placeholder={'Address'}
        placeholderTextColor={Colors.primaryText}
      />
      <View>
        <PrimaryButton
          title={'Sign up'}
          // onPress={() => signIn()}
          containerStyle={styles.containerStyle}
          buttonPressed={styles.buttonPressed}
          textStyle1={styles.textStyle1}
        />
        <Text style={styles.txt}>or</Text>
        <PrimaryButton
          title={'Sign up with Google'}
          containerStyleGoogle={styles.containerStyleGoogle}
          googleButtonPressed={styles.googleButtonPressed}
          textStyle={styles.textStyle}
        />
        <View style={styles.textContainer}>
          <Text style={styles.txt2}>Already have an account?{'  '}</Text>
          <TouchableOpacity onPress={() => navigation.navigate('OnBoarding')}>
            <Text style={styles.txtSignUp}>Sign in</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: Colors.secondaryColor
  },
  titleContainer: {
    marginTop: '25%',
    marginHorizontal: '9%',
    marginBottom: '10%',
  },
  title: {
    color: Colors.primary,
    fontSize: 32,
    fontWeight: 'bold',
  },
  txt: {
    color: Colors.secondaryText,
    textAlign: 'center',
    fontSize: 18,
  },
  containerStyle: {
    backgroundColor: Colors.backgroundColor,
    width: '83%',
    marginHorizontal: '9%',
    marginTop: '10%',
    marginBottom: '2%',
  },
  buttonPressed: {
    backgroundColor: Colors.btnPress,
  },
  containerStyleGoogle: {
    backgroundColor: 'rgba(254, 114, 76, 0.15)',
    borderColor: Colors.primary,
    borderWidth: 1,
    width: '83%',
    marginHorizontal: '9%',
    marginTop: '2%',
  },
  googleButtonPressed: {
    backgroundColor: 'rgba(254, 114, 76, 0.25)',
  },
  textStyle: {
    color: Colors.primary,
  },
  textStyle1: {
    fontSize: 18,
  },
  textContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: '5%',
  },
  txt2: {
    color: Colors.secondaryText,
    textAlign: 'center',
  },
  txtSignUp: {
    textAlign: 'center',
    color: Colors.primary,
    fontWeight: 'bold',
  },
  customStyle: {
    backgroundColor: Colors.secondaryColor,
    borderRadius: 8,
    padding: 8,
    fontSize: 16,
    fontWeight: '500',
    marginHorizontal: '9%',
    // marginBottom: '5%',
    elevation: 4,
  },
  customStyle2: {
    backgroundColor: Colors.secondaryColor,
    borderRadius: 8,
    padding: 8,
    fontSize: 16,
    color: Colors.secondaryText,
    fontWeight: '500',
    marginHorizontal: '9%',
    elevation: 4,
  },
});

export default Registration;
