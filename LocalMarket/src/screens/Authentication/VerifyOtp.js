import React, {useContext} from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import Colors from '../../constant/Colors';
import {CodeInput, InputField, PrimaryButton} from '../../components';
import {useNavigation} from '@react-navigation/native';
import {AuthContext} from '../../context/Context';
import {useForm} from 'react-hook-form';

const VerifyOtp = ({route}) => {
  const {otp} =  route.params
  const {setIsSignin,setRole} = useContext(AuthContext);
  const navigation = useNavigation();

  return (
    <View style={styles.mainContainer}>
      <View
        style={{
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 50,
        }}>
        <View style={{width: 200, height: 200}}>
          <Image
            style={{width: '100%', height: '100%'}}
            source={require('../../assets/Logo/Starbucks.png')}
          />
        </View>
      </View>

      <View style={styles.internalContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Verify Otp</Text>
          <Text style={styles.sectionDescription}>
            Enter your otp received on your whatsapp to continue the app
          </Text>
        </View>
        <CodeInput />
      </View>
      <View style={styles.buttonContainer}>
        <PrimaryButton
          title={'Send Otp'}
          onPress={() => {setIsSignin(true),setRole(1)}}
          // onPress={()=> }
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: Colors.secondaryColor,
  },
  internalContainer: {
    marginHorizontal: 20,
  },
  titleContainer: {
    marginTop: 40,
    marginBottom: '15%',
  },
  title: {
    color: Colors.primary,
    fontSize: 32,
    fontWeight: 'bold',
  },
  sectionDescription: {
    fontSize: 14,
    color: Colors.lightText,
    fontWeight: '500',
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
  buttonContainer: {
    marginTop: 60,
    marginHorizontal: 20,
  },
});

export default VerifyOtp;
