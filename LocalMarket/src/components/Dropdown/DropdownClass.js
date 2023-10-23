/* eslint-disable no-undef */
import React from 'react';
import {View, StyleSheet,Text} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import SelectDropdown from 'react-native-select-dropdown';
import Colors from '../../constant/Colors';

export default DropdownClass = (props) => {

  return (
    <View style={styles.viewContainer}>
            <View>
          <Text style={{fontSize:14,color:Colors.primaryText,textAlign:'left',marginHorizontal:20,marginVertical:10}}>
            {props.lable}
          </Text>
        </View>
      <SelectDropdown
        data={props.data}
        defaultButtonText={props.defaultButtonText}
        buttonTextAfterSelection={(selectedItem) => {
          return selectedItem.name;
        }}
        rowTextForSelection={(item) => {
          return item.name;
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
    height: 50,
    backgroundColor: Colors.secondaryColor,
    borderRadius: 8,
    elevation: 4,
    shadowColor: Colors.primaryText,
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.4,
    marginHorizontal:20,
    width:"90%"
  },
  dropdown1BtnTxtStyle: {
    color: Colors.secondaryText,
    textAlign: 'left',
  },
  dropdown1DropdownStyle: {
    backgroundColor: Colors.secondaryColor,
    borderRadius:4
  },
  dropdown1RowStyle: {
    backgroundColor: Colors.secondaryColor, 
    borderBottomColor: '#C5C5C5'
  },
  dropdown1RowTxtStyle: {
    color: Colors.secondaryText, 
    textAlign: 'center'
  },
});
