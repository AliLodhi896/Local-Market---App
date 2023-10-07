/* eslint-disable no-undef */
import React from 'react';
import {View, StyleSheet} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import SelectDropdown from 'react-native-select-dropdown';
import Colors from '../../constant/Colors';

export default DropdownSubject = (props) => {

  return (
    <View style={styles.viewContainer}>
      <SelectDropdown
        data={props.subject}
        // defaultValueByIndex={1}
        // defaultValue={'Egypt'}
        defaultButtonText={'Select Subject'}
        buttonTextAfterSelection={(selectedItem) => {
          return selectedItem.Subject;
        }}
        rowTextForSelection={(item) => {
          return item.Subject;
        }}
        buttonStyle={styles.dropdown1BtnStyle}
        buttonTextStyle={styles.dropdown1BtnTxtStyle}
        renderDropdownIcon={isOpened => {
          return (
            <FontAwesome
              name={isOpened ? 'chevron-up' : 'chevron-down'}
              color={Colors.primaryText}
              size={16}
            />
          );
        }}
        dropdownIconPosition={'right'}
        dropdownStyle={styles.dropdown1DropdownStyle}
        rowStyle={styles.dropdown1RowStyle}
        rowTextStyle={styles.dropdown1RowTxtStyle}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  shadow: {
    shadowColor: Colors.primaryText,
    shadowOffset: {width: 0, height: 6},
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 10,
  },

  dropdown1BtnStyle: {
    width: '82%',
    marginHorizontal: '9%',
    marginTop: '5%',
    height: 50,
    backgroundColor: Colors.secondaryColor,
    borderRadius: 8,
    elevation: 4,
    shadowColor: Colors.primaryText,
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.4
  },
  dropdown1BtnTxtStyle: {
    color: Colors.primaryText,
    textAlign: 'left',
  },
  dropdown1DropdownStyle: {
    backgroundColor: Colors.secondaryColor
  },
  dropdown1RowStyle: {
    backgroundColor: Colors.secondaryColor, 
    borderBottomColor: '#C5C5C5'
  },
  dropdown1RowTxtStyle: {
    color: Colors.primaryText, 
    textAlign: 'center'
  },
});
