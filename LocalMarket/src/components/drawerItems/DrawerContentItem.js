import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {scale, verticalScale, moderateScale} from 'react-native-size-matters';
import Icons from '../../constant/Icons';
import Colors from '../../constant/Colors';

const DrawerContentItem = ({
  iconType,
  iconName,
  iconColor,
  iconSize,
  label,
  focused,
  onPress
}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container(focused)}>
      <Icons
        name={iconName}
        size={iconSize}
        icon_type={iconType}
        color={focused ? '#fff' : '#fff'}
      />
      <Text style={styles.textStyle(focused)}>{label}</Text>
    </TouchableOpacity>
  );
};

export default DrawerContentItem;

const styles = StyleSheet.create({
  container: focused => ({
    flexDirection: 'row',
    borderRadius: moderateScale(20),
    padding: scale(8),
    alignItems: 'center',
    marginBottom: verticalScale(8),
  }),
  textStyle: ( focused) => ({
    fontSize: scale(14),
    paddingLeft: scale(5),
    color: focused ? Colors.secondaryColor : Colors.secondaryColor,
    fontWeight:'bold'
  }),
});
