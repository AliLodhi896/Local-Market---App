import React, {useState, useRef} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, FlatList} from 'react-native';
import Colors from '../../constant/Colors';
import {Header, Card, BottomSheet, FloatingButton} from '../../components';
import {useNavigation} from '@react-navigation/native';
import Subject from '../Subject';
import CreateAILesson from '../CreateAILesson';

const Products = () => {
  const navigation = useNavigation();

  const [classId, setClassId] = useState(1);
  const refRBSheet = useRef(null);

  const saveClassIdHandler = id => {
    setClassId(id);
  };

  const classes = [
    {id: 1, name: 'Category 1'},
    {id: 2, name: 'Category 2'},
    {id: 3, name: 'Category 3'},
    {id: 4, name: 'Category 4'},
    {id: 5, name: 'Category 5'},
  ];
  const card = [
    {id: 1, classId: 1, Subject: 'Math'},
    {id: 2, classId: 1, Subject: 'Eng'},
    {id: 3, classId: 1, Subject: 'Islamiat'},
    {id: 3, classId: 1, Subject: 'Islamiat'},
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
        heading={'Products'}
        title={'Go back'}
        description={''}
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
                    navigation.navigate('ProductDetails');
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

export default Products;
