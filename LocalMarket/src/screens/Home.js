import React, {useState, useRef} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, FlatList} from 'react-native';
import Colors from '../constant/Colors';
import {Header, Card, BottomSheet, FloatingButton} from '../components';
import {useNavigation} from '@react-navigation/native';
import Subject from './Subject';
import CreateAILesson from './CreateAILesson';

const Home = () => {
  const navigation = useNavigation();

  const [classId, setClassId] = useState(1);
  const refRBSheet = useRef(null);

  const saveClassIdHandler = id => {
    setClassId(id);
  };

  const classes = [
    {id: 1, name: 'Class 1'},
    {id: 2, name: 'Class 2'},
    {id: 3, name: 'Class 3'},
    {id: 4, name: 'Class 4'},
    {id: 5, name: 'Class 5'},
    {id: 6, name: 'Class 6'},
    {id: 7, name: 'Class 7'},
    {id: 8, name: 'Class 8'},
    {id: 9, name: 'Class 9'},
    {id: 10, name: 'Class 10'},
  ];
  const card = [
    {id: 1, classId: 1, Subject: 'Math'},
    {id: 2, classId: 1, Subject: 'Eng'},
    {id: 3, classId: 1, Subject: 'Islamiat'},
    {id: 4, classId: 1, Subject: 'Pak.St'},
    {id: 5, classId: 2, Subject: 'Physics'},
    {id: 6, classId: 2, Subject: 'Chemistry'},
    {id: 7, classId: 2, Subject: 'Social.St'},
    {id: 8, classId: 2, Subject: 'Science'},
  ];

  const tabTextStyle = id => {
    return {
      fontSize: 14,
      fontWeight: id === classId ? 'bold' : '500',
      color: id === classId ? Colors.secondaryColor : Colors.primary,
    };
  };

  return (
    <View style={styles.mainContainer}>
      <Header
        heading={'Ready to learn'}
        title={'Classes'}
        description={'Choose your subject'}
      />
      <View style={styles.internalContainer}>
        <View
          style={{
            height: 'auto',
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginHorizontal: '6%',
          }}>
          <FlatList
            data={classes}
            horizontal={true}
            renderItem={itemData => {
              return (
                <TouchableOpacity
                  key={itemData.item.id}
                  style={{
                    marginTop: '10%',
                    paddingHorizontal: 9,
                    paddingVertical: 6,
                    backgroundColor:
                      itemData.item.id === classId
                        ? Colors.btnPress
                        : 'white',
                    borderRadius: itemData.item.id === classId ? 8 : 0,
                    // elevation: classItem.id === classId ? 6 : 0,
                  }}
                  onPress={() => saveClassIdHandler(itemData.item.id)}>
                  <Text style={tabTextStyle(itemData.item.id)}>
                    {itemData.item.name}
                  </Text>
                </TouchableOpacity>
              );
            }}
          />
        </View>
        <View style={styles.cardContainer}>
          {card.map(cardItem => {
            return (
              cardItem.classId == classId && (
                <Card
                  key={cardItem.id}
                  title={cardItem.Subject}
                  onPress={() => {
                    navigation.navigate(Subject);
                  }}></Card>
              )
            );
          })}
        </View>
        <FloatingButton createLesson={() => refRBSheet.current.open()} openCreateAI={() => {navigation.navigate(CreateAILesson)}} />
      </View>
      <BottomSheet refRBSheet={refRBSheet} classes={classes} subject={card}/>
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
    paddingBottom: 20,
  },
  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
    height: '100%',
  },

  // tabTextActive: {
  //   fontSize: 14.5,
  //   fontWeight: 'bold',
  //   color: Colors.secondaryText,
  //   borderBottemWidth: 2,

  // },
  // tab: {},
});

export default Home;
