import React from 'react';
import {View, StyleSheet, Text, FlatList} from 'react-native';
import {Header, LessonCard} from '../components';
import Colors from '../constant/Colors';
import {useNavigation} from '@react-navigation/native';
import LessonDetail from './LessonDetail';


const Subject = () => {
  const navigation = useNavigation();
  const subjectItems = [
    {heading: 'Lesson 1', description: 'This is lesson 1 of choosen Subject'},
    {heading: 'Lesson 2', description: 'This is lesson 2 of choosen Subject'},
    {heading: 'Lesson 3', description: 'This is lesson 3 of choosen Subject'},
    {heading: 'Lesson 4', description: 'This is lesson 4 of choosen Subject'},
    {heading: 'Lesson 5', description: 'This is lesson 5 of choosen Subject'},
    {heading: 'Lesson 6', description: 'This is lesson 6 of choosen Subject'},
  ];

  return (
    <View style={styles.mainContainer}>
      <Header
        heading={'Ready to learn'}
        title={'Lesson'}
        description={'Choose your lesson'}
      />
      <View style={styles.internalContainer}>
        <View style={styles.internalHeading}>
          <Text style={styles.text}>Total Lessons: 6</Text>
          <Text style={styles.text}>Class 1</Text>
          <Text style={styles.text}>Subject Name</Text>
        </View>
        <FlatList
          data={subjectItems}
          renderItem={itemData => {
            return (
              <LessonCard
                heading={itemData.item.heading}
                description={itemData.item.description}
                onPress={() => {
                  navigation.navigate(LessonDetail);
                }}
              />
            );
          }}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: Colors.backgroundColor,
    justifyContent: 'space-between',
  },
  internalContainer: {
    backgroundColor: Colors.secondaryColor,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    height: '80%',
  },
  internalHeading: {
    marginTop: '4%',
    marginBottom: '3%',
    flexDirection: 'row',
    marginHorizontal: '7%',
    justifyContent: 'space-between',
  },
  text: {
    color: Colors.primary,
    fontWeight: '800',
    fontSize: 15,
  },
});

export default Subject;
