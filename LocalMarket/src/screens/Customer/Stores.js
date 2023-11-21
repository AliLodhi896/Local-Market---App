import React, {useState, useRef} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from 'react-native';
import Colors from '../../constant/Colors';
import {Header, Card, PrimaryHeader} from '../../components';
import {useNavigation} from '@react-navigation/native';
import { DrawerAnimationPage } from '../../components/animationconstant/DrawerAnimationPage';
import Animated from 'react-native-reanimated';


const Stores = () => {
  const navigation = useNavigation();
  const [classId, setClassId] = useState(1);

  const saveClassIdHandler = id => {
    setClassId(id);
  };

  const classes = [
    {id: 1, name: 'Industry 1'},
    {id: 2, name: 'Industry 2'},
    {id: 3, name: 'Industry 3'},
    {id: 4, name: 'Industry 4'},
    {id: 5, name: 'Industry 5'},
  ];
  const card = [
    {id: 1, classId: 1, Subject: 'Store 1'},
    {id: 1, classId: 1, Subject: 'Store 1'},
    {id: 1, classId: 1, Subject: 'Store 1'},
    {id: 2, classId: 2, Subject: 'Store 1'},
    {id: 3, classId: 1, Subject: 'Store 2'},
  ];

  const tabTextStyle = id => {
    return {
      fontSize: 14,
      fontWeight: id === classId ? 'bold' : '500',
      color: id === classId ? Colors.secondaryColor : Colors.primary,
    };
  };
  const animatedStyle = DrawerAnimationPage();

  return (
    <Animated.View  style={[styles.container(animatedStyle), styles.mainContainer]} >
      <PrimaryHeader title={'Go back'} heading={'Local Market'} />
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
            showsHorizontalScrollIndicator={false}
            renderItem={itemData => {
              return (
                <TouchableOpacity
                  key={itemData.item.id}
                  style={{
                    marginTop: '10%',
                    paddingHorizontal: 9,
                    paddingVertical: 6,
                    backgroundColor:
                      itemData.item.id === classId ? Colors.btnPress : Colors.backgroundColor,
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
        <ScrollView  contentContainerStyle={styles.cardContainer}>
          {card.map(cardItem => {
            return (
              cardItem.classId == classId && (
                <Card
                  dashboard={false}
                  key={cardItem.id}
                  title={cardItem.Subject}
                  onPress={() => {
                    navigation.navigate('Products');
                  }}></Card>
              )
            );
          })}
        </ScrollView>
      </View>
    </Animated.View>
  );
};
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: Colors.backgroundColor,
    elevation: 20,
    shadowColor: 'black',
    shadowOffset: {width: 2, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  container: animatedStyle => ({
    ...animatedStyle,
    flex: 1,
  }),
  internalContainer: {
    backgroundColor: Colors.backgroundColor,
    paddingBottom: 20,
    marginHorizontal:20,
    marginTop:20
  },
  headingContainer: {
    flexDirection: 'row',
    marginHorizontal: '6%',
    marginTop: 30,
  },
  heading2: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  textContainer: {
    flexDirection: 'row',
    marginLeft: '35%',
  },
  text: {
    color: Colors.primary,
    fontSize: 14,
    fontWeight: '500',
    marginTop: 5,
  },
  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
    marginBottom:30
  },
});

export default Stores;
