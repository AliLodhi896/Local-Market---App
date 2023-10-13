import {Text, StyleSheet, Pressable, View} from 'react-native';
import React from 'react';
import Colors from '../../constant/Colors';

const LessonCard = props => {
  return (
    <View style={styles.items}>
      <Pressable style={({pressed}) => pressed && styles.pressedItem} onPress={props.onPress}>
        <Text style={styles.lectureHeading}>{props.heading}</Text>
        <Text style={styles.lectureDescription}>{props.description}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  items: {
    backgroundColor: Colors.secondaryColor,
    marginVertical: '2%',
    borderRadius: 10,
    marginHorizontal: '7%',
    justifyContent: 'flex-start',
    elevation: 5,
    shadowColor: Colors.secondaryText,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  pressedItem: {
    borderRadius: 10,
  },
  lectureHeading: {
    color: Colors.primaryText,
    marginTop: '6%',
    marginHorizontal: '5%',
    marginBottom: '2%',
    fontSize: 19,
    fontWeight: '700',
  },
  lectureDescription: {
    color: Colors.primaryText,
    fontSize: 14,
    marginBottom: '6%',
    marginHorizontal: '5%',
    fontWeight: '500',
  },
});

export default LessonCard;
