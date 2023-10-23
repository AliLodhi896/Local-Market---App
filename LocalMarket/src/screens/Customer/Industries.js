import React, {useState, useRef} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, FlatList} from 'react-native';
import Colors from '../../constant/Colors';
import {
  Header,
  Card,
  BottomSheet,
  FloatingButton,
  LessonCard,
} from '../../components';
import {useNavigation} from '@react-navigation/native';
import Subject from '../Subject';
import CreateAILesson from '../CreateAILesson';

const Industries = () => {
  const navigation = useNavigation();
  const subjectItems = [
    {heading: 'Industry 1', description: 'This is Industry 1 '},
    {heading: 'Industry 2', description: 'This is Industry 2 '},
    {heading: 'Industry 3', description: 'This is Industry 3 '},
    {heading: 'Industry 4', description: 'This is Industry 4 '},
    {heading: 'Industry 5', description: 'This is Industry 5 '},
    {heading: 'Industry 5', description: 'This is Industry 5 '},
    {heading: 'Industry 5', description: 'This is Industry 5 '},
    {heading: 'Industry 5', description: 'This is Industry 5 '},
    {heading: 'Industry 5', description: 'This is Industry 5 '},
    {heading: 'Industry 6', description: 'This is Industry 6 '},
  ];

  return (
    <View style={styles.mainContainer}>
      <Header
        heading={'Industries'}
        title={'Go back'}
        description={''}
      />
      <View style={styles.internalContainer}>
        <View
          style={{
            height: 'auto',
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop:20
          }}>
          <FlatList
            data={subjectItems}
            renderItem={itemData => {
              return (
                <LessonCard
                  heading={itemData.item.heading}
                  description={itemData.item.description}
                  onPress={() => {
                    navigation.navigate('Products');
                  }}
                />
              );
            }}
          />
        </View>
        <FloatingButton
          createLesson={() => refRBSheet.current.open()}
          openCreateAI={() => {
            navigation.navigate(CreateAILesson);
          }}
        />
      </View>
      {/* <BottomSheet refRBSheet={refRBSheet} classes={classes} subject={card}/> */}
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
    height: '85%',
    paddingBottom: 20,
  },
  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
    height: '100%',
  },
});

export default Industries;
