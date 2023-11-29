import React, {useContext, useState} from 'react';
import {StyleSheet, View, Text, Image,ScrollView} from 'react-native';
import Colors from '../../constant/Colors';
import {InputField, PrimaryButton} from '../../components';
import {useNavigation} from '@react-navigation/native';
import {AuthContext} from '../../context/Context';
import {useForm} from 'react-hook-form';
import Toast from 'react-native-toast-message';
import {send_otp} from '../../apis/authentication';
import {OtplessModule} from 'otpless-react-native';
import DropdownClass from '../../components/Dropdown/DropdownClass';

const OnBoarding = () => {
  const {
    control,
    handleSubmit,
    formState: {errors, isValid},
  } = useForm({mode: 'all'});
  const {setIsSignin} = useContext(AuthContext);
  const navigation = useNavigation();
  const [isLoading, setIsLoading] = useState(false);
  const [selectedRole, setSelectedRole] = useState(null);
  const [roles, setRoles] = useState([
    {key: 1, name: 'Customer'},
    {key: 2, name: 'Store'},
  ]);

  const sendOtp = async data => {
    const min = 1000; 
    const max = 9999;
    const otp = Math.floor(Math.random() * (max - min + 1)) + min;
    setIsLoading(true);
    const responseData = await send_otp(data?.mobile_no,selectedRole?.key,otp);
    if(responseData?.success == true) {
      Toast.show({
        type: 'success',
        text1: responseData?.message,
        visibilityTime: 2000,
      });
      navigation.navigate('VerifyOtp',{otp:otp});
    }else{
      Toast.show({
        type: 'error',
        text1: responseData?.message,
        visibilityTime: 2000,
      });
      navigation.navigate('Registration')
    }
    setIsLoading(false);
  };

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
      <ScrollView style={styles.internalContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Sign in</Text>
          <Text style={styles.sectionDescription}>
            Enter your Whatsapp Number without country code to continue the app
          </Text>
        </View>
        <DropdownClass
          data={roles}
          defaultButtonText={'Select Role'}
          lable={'Select Role'}
          onSelect={(selectedItem, index) => {
            setSelectedRole(selectedItem)
          }}
        />
        <InputField
          name="mobile_no"
          control={control}
          lableVisible={false}
          lable={'Mobile Number'}
          rules={{
            required: 'Mobile Number is required',
          }}
          placeholder="eg 999-999-9999"
          keyboardType={'number-pad'}
        />
        {errors.mobile_no && (
          <Text style={styles.errormessage}>* {errors.mobile_no.message}</Text>
        )}
        <View style={styles.buttonContainer}>
        <PrimaryButton
          title={'Send Otp'}
          // onPress={handleSubmit(sendOtp)}/
          onPress={()=>navigation.navigate('VerifyOtp',{otp:123})}
        />
      </View>
      </ScrollView>
      
    </View>
  );
};
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: Colors.secondaryColor,
  },
  internalContainer: {
    flex:1,
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
  },
});

export default OnBoarding;
