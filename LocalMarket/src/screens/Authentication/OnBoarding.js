import React, {useContext} from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  Image,
} from 'react-native';
import Colors from '../../constant/Colors';
import {InputField, PrimaryButton} from '../../components';
import {useForm} from 'react-hook-form';
import {useNavigation} from '@react-navigation/native';
import {AuthContext} from '../../context/Context';

const OnBoarding = () => {
  const {
    control,
    handleSubmit,
    formState: {errors, isValid},
  } = useForm({mode: 'all'});
  const {setIsSignin} = useContext(AuthContext);
  const navigation = useNavigation();
  return (
    <View style={styles.mainContainer}>
      <View
        style={{
          backgroundColor: Colors.backgroundColor,
          paddingHorizontal: 20,
          flex: 1,
        }}>
           <View
        style={{
          width: '100%',
          height: '40%',
          alignItems:'center'
        }}>
        <Image
          source={require('../../assets/Images/welcomeImage.png')}
          style={{width: '100%', height: '100%'}}
        />
      </View>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Sign in</Text>
        </View>
        <InputField
          name="Email Address"
          control={control}
          lable={'Email Address'}
          rules={{
            required: 'Email Address is required',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'Invalid Email Address',
            },
          }}
          placeholder="Enter your Email Address..."
        />
        <InputField
          name="Password "
          control={control}
          lable={'Password '}
          rules={{
            required: 'Password  is required',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'Invalid Password',
            },
          }}
          placeholder="Enter your Password..."
        />
        <View>
          <PrimaryButton
            title={'Sign in'}
            onPress={() => setIsSignin(true)}
            // onPress={()=> navigation.navigate('Stores')}
            containerStyle={styles.containerStyle}
            buttonPressed={styles.buttonPressed}
            textStyle1={styles.textStyle1}
          />
          <View style={styles.textContainer}>
            <Text style={styles.txt2}>Don't have an account?{'  '}</Text>
            <TouchableOpacity
              onPress={() => navigation.navigate('Registration')}>
              <Text style={styles.txtSignUp}>Sign up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: Colors.secondaryColor,
  },
  titleContainer: {
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
    backgroundColor: Colors.primary,
    width: '83%',
    marginHorizontal: '9%',
    marginTop: '15%',
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
    marginBottom: '5%',
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

export default OnBoarding;
