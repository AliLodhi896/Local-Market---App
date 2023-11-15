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
         <View style={[{width:'100%',flexDirection:'row',alignContent:'center',alignItems:'center',justifyContent:'center'},props.boxStyle]}>
          {props.lablevisible == true ?
          <Text style={styles.lable}>{props.lable}</Text>
          : null
          }
          <TouchableOpacity onPress={props.onPressSearch} style={[styles.inputContainer,props.style]}>
          <TextInput
            style={[styles.input,props.inputtextStyle]}
            placeholder={props.placeholder}
            placeholderTextColor={Colors.placeHolder}
            value={props.value}
            onChangeText={props.onChangeText}
            numberOfLines={1}
            editable={props.editable} selectTextOnFocus={props.selectTextOnFocus}
          />
          <TouchableOpacity style={{backgroundColor:Colors.lightprimary,borderRadius:20,padding:12}} onPress={props.onPressSearch}>
          <Icons
            icon_type={'FontAwesome'}
            name={'search'}
            size={20}
            color={Colors.green}
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
      marginTop: '5%',
      flexDirection: 'row',
      backgroundColor: Colors.secondaryColor,
      marginHorizontal: 20,
      borderRadius: 10,
      justifyContent:'space-between'
    },
    input: {
      padding: 10,
      color: Colors.primaryText,
      fontWeight: '500',
      elevation: 4,
      shadowColor: 'black',
      shadowOffset: {width: 0, height: 4},
  
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
  
