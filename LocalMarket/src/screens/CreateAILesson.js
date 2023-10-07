import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  KeyboardAvoidingView,
  Platform,
  Image,
  TouchableOpacity,
} from 'react-native';
import {Header, InputField} from '../components';
import Colors from '../constant/Colors';

const CreateAILesson = () => {
  return (
    <KeyboardAvoidingView
      style={styles.mainContainer}
      behavior={Platform.OS === 'ios' ? 'padding' : null}>
      <Header
        heading={'Ready to learn'}
        title={'Create AI Lesson'}
        description={'Create your lesson'}
      />
      <View style={styles.internalContainer}>
        <View style={styles.inputContainer}>
          <InputField
            customStyle={styles.customStyle}
            placeholder={'Write lesson here'}
            placeholderTextColor={Colors.primaryText}
            multiline={true}
            icon={true}
          />
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: Colors.backgroundColor,
    // justifyContent: 'space-between',
  },
  internalContainer: {
    backgroundColor: Colors.secondaryColor,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    height: '80%',
  },
  inputContainer: {
    flex: 1,
    marginBottom: '10%',
    width: '100%',
    marginHorizontal: '5.5%',
    justifyContent: 'flex-end',
  },
  customStyle: {
    backgroundColor: Colors.secondaryColor,
    borderRadius: 10,
    padding: 15,
    fontSize: 16,
    fontWeight: '500',
    elevation: 4,
    shadowColor: Colors.primaryText,
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.4,
  },
});

export default CreateAILesson;
