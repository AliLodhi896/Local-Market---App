import React, {useState} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {DottedSlider, PrimaryButton} from '../../components';
import Colors from '../../constant/Colors';
import {useNavigation} from '@react-navigation/native';
import Home from '../Home';

const Welcome = () => {
  const navigation = useNavigation();
  const slides = [
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys',
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys',
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys',
  ];
  return (
    <View style={styles.mainContainer}>
      <View
        style={{
          width: '80%',
          height: '40%',
          alignContent: 'center',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: '25%',
        }}>
        <Image
          source={require('../../assets/Images/welcomeImage.png')}
          style={{width: '100%', height: '100%'}}
        />
      </View>
      <View style={styles.internalContainer}>
        <Text style={styles.txt}>
          Let's start{' '}
          <Text style={{fontWeight: '900', color: Colors.primary}}>
            Growing
          </Text>{' '}
          your{' '}
          <Text style={{fontWeight: '900', color: Colors.primary}}>Skill</Text>
        </Text>
        <DottedSlider slides={slides} />
        <View style={styles.buttonContainer}>
          <PrimaryButton
            title={'Get Started'}
            style={{width: '50%'}}
            buttonPressed={styles.buttonPressed}
            onPress={() => navigation.navigate('OnBoarding')}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: Colors.primary,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  internalContainer: {
    backgroundColor: Colors.secondaryColor,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    paddingHorizontal: 20,
    paddingTop: 20,
    height: '40%',
  },
  buttonContainer: {
    marginHorizontal: 20,
    marginBottom: 20,
  },
  txt: {
    fontSize: 32,
    color: Colors.primaryText,
    textAlign: 'center',
    marginHorizontal: 8,
    fontWeight: '500',
  },
  buttonPressed: {
    backgroundColor: Colors.btnPress
  },
});

export default Welcome;
