import React,{useContext} from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  ImageBackground,
} from 'react-native';
import Colors from '../../constant/Colors';
import {InputField, PrimaryButton} from '../../components';
import { AuthContext } from '../../context/Context';
import { useForm } from 'react-hook-form';

const OnBoarding = () => {
  const {setIsSignin,isSignin,setDescription} = useContext(AuthContext);
  const {
    control,
    register,
    handleSubmit,
    formState: {errors, isValid},
  } = useForm({mode: 'all'});


  const signIn = async data => {
    try {
      const responseData = await 
    } catch (error) {
      
    }

    setDescription({name:'WAHAJ',number:'120399123'})
     setIsSignin(true)
  }

  return (
    <ImageBackground
      style={styles.mainContainer}
      source={require('../../assets/Images/Background1.jpg')}
      blurRadius={50}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Sign in</Text>
      </View>
      <InputField
        customStyle={styles.customStyle}
        control={control}
        placeholder={'Email'}
        placeholderTextColor={Colors.primaryText}
        keyboardType='email-address'
      />
      <InputField
        customStyle={styles.customStyle2}
        control={control}
        placeholder={'Password'}
        placeholderTextColor={Colors.primaryText}
        secureTextEntry={true}
      />
      <View>
        <PrimaryButton
          title={'Sign in'}
          onPress={() => signIn()}
          containerStyle={styles.containerStyle}
          buttonPressed={styles.buttonPressed}
        />
        <Text style={styles.txt}>or</Text>
        <PrimaryButton
          title={'Sign in with Google'}
          containerStyleGoogle={styles.containerStyleGoogle}
          googleButtonPressed={styles.googleButtonPressed}
          textStyle={styles.textStyle}
        />
        <View style={styles.textContainer}>
          <Text style={styles.txt2}>Don't have an account?{'  '}</Text>
          <TouchableOpacity>
            <Text style={styles.txtSignUp}>Sign up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
  mainContainer: {
    width: '100%',
    height: '100%',
  },
  titleContainer: {
    marginTop: '35%',
    marginHorizontal: '9%',
    marginBottom: '15%',
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
    marginTop: '15%',
    marginBottom: '2%',
  },
  buttonPressed: {
    backgroundColor: Colors.btnPress
  },
  containerStyleGoogle: {
    backgroundColor: 'rgba(112, 92, 254, 0.15)',
    borderColor: Colors.primary,
    borderWidth: 1,
    width: '83%',
    marginHorizontal: '9%',
    marginTop: '2%',
  },
  googleButtonPressed: {
    backgroundColor: 'rgba(112, 92, 254, 0.25)',

  },
  textStyle: {
    color: Colors.primary,
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
    borderRadius: 10,
    padding: 15,
    fontSize: 16,
    fontWeight: '500',
    marginHorizontal: '9%',
    marginBottom: '5%',
    elevation: 4,
  },
  customStyle2: {
    backgroundColor: Colors.secondaryColor,
    borderRadius: 10,
    padding: 15,
    fontSize: 16,
    color: Colors.secondaryText,
    fontWeight: '500',
    marginHorizontal: '9%',
    elevation: 4,
  },
});

export default OnBoarding;
