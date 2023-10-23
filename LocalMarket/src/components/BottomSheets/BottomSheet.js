import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
import InputField from '../InputField/InputField';
import Colors from '../../constant/Colors';
import DropdownClass from '../Dropdown/DropdownClass';
import DropdownSubject from '../Dropdown/DropdownSubject';
import PrimaryButton from '../Button/PrimaryButton';
const BottomSheet = ({refRBSheet, classes, subject}) => {
  const tabTextStyle = id => {
    return {
      fontSize: 14,
      fontWeight: 'bold',
      color: Colors.primary,
    };
  };
  return (
    <RBSheet
      ref={refRBSheet}
      closeOnDragDown={true}
      animationType={'fade'}
      closeDuration={5}
      openDuration={200}
      customStyles={{
        container: {
          borderTopRightRadius: 25,
          borderTopLeftRadius: 25,
          height: '60%',
          shadowColor: 'black',
          shadowOffset: {
            width: 100,
            height: 100,
          },
          shadowOpacity: 100,
          shadowRadius: 100,
          elevation: 100,
          width: '100%',
        },
        wrapper: {},
        draggableIcon: {
          width: 100,
        },
      }}>
      <DropdownClass classes={classes} />
      <DropdownSubject subject={subject} />
      <InputField
        customStyle={styles.customStyle}
        placeholder={'Write lesson here'}
        placeholderTextColor={Colors.primaryText}
        multiline={true}
      />
      <View style={styles.btnContainer}>
        <PrimaryButton  
          title={'Save'}
          containerStyle={styles.containerStyle}
          buttonPressed={styles.buttonPressed}
        />
      </View>
    </RBSheet>
  );
};
const styles = StyleSheet.create({
  customStyle: {
    backgroundColor: Colors.secondaryColor,
    borderRadius: 10,
    padding: 15,
    fontSize: 20,
    fontWeight: '500',
    marginHorizontal: '9%',
    marginBottom: '12%',
    elevation: 4,
    shadowColor: Colors.primaryText,
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.4,
    height: 100
  },
  className: {
    color: Colors.primaryText,
  },
  lessonDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: '4%',
    marginHorizontal: '7%',
  },
  txtDetails: {
    color: Colors.primaryText,
    fontWeight: 'bold',
  },
  btnContainer:{
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  containerStyle:{
    width: '30%',
    borderRadius: 10,
    padding: '2%',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4,
    shadowColor: Colors.primaryText,
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.4,

    
  },
  buttonPressed: {
    backgroundColor: Colors.btnPress, // Define a different style when the button is pressed
    // padding: '5%',
  },
});

export default BottomSheet;
