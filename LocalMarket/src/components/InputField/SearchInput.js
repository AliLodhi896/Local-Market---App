import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  Platform,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Colors from '../../constant/Colors';
import Icons from '../../constant/Icons';

const SearchInput = props => {
  return (
    <View
      style={[
        {
          width: '100%',
          flexDirection: 'row',
          alignContent: 'center',
          alignItems: 'center',
          justifyContent: 'center',
        },
        props.boxStyle,
      ]}>
      {props.lablevisible == true ? (
        <Text style={styles.lable}>{props.lable}</Text>
      ) : null}
      <TouchableOpacity
        onPress={props.onPressSearch}
        style={[styles.inputContainer, props.style]}>
        <TextInput
          style={[styles.inputContainer, props.inputtextStyle]}
          placeholder={props.placeholder}
          placeholderTextColor={Colors.secondaryText}
          value={props.value}
          onChangeText={props.onChangeText}
          numberOfLines={1}
          editable={props.editable}
          selectTextOnFocus={props.selectTextOnFocus}
        />
        <TouchableOpacity
          style={{
            backgroundColor: Colors.lightprimary,
            borderRadius: 20,
            padding: 12,
          }}
          onPress={props.onPressSearch}>
          <Icons
            icon_type={'FontAwesome'}
            name={'search'}
            size={20}
            color={Colors.secondaryText}
          />
        </TouchableOpacity>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: Colors.secondaryColor,
    marginHorizontal: 10,
    borderRadius: 6,
    color: Colors.primaryText,
    fontWeight: '500',
    justifyContent: 'space-between',
  },

  imgContainer: {
    backgroundColor: Colors.primary,
    width: 40,
    flexDirection: 'row',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    marginTop: '5%',
    right: 50,
  },
  img: {
    width: '50%',
    height: '50%',
  },
});
export default SearchInput;
