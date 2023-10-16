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
import {Header, Card} from '../../components';
import {useNavigation} from '@react-navigation/native';


const Stores = () => {
  const navigation = useNavigation();

  const [classId, setClassId] = useState(1);
  const refRBSheet = useRef(null);

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
    {id: 2, classId: 2, Subject: 'Store 1'},
    {id: 3, classId: 1, Subject: 'Store 2'},
    {id: 4, classId: 1, Subject: 'Store 3'},
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
      <Header heading={'Stores'} title={'Go back'} description={''} />
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
                      itemData.item.id === classId ? Colors.btnPress : 'white',
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
        <ScrollView contentContainerStyle={styles.cardContainer}>
          {card.map(cardItem => {
            return (
              cardItem.classId == classId && (
                <Card
                  key={cardItem.id}
                  title={cardItem.Subject}
                  onPress={() => {
                    navigation.navigate('Cart');
                  }}></Card>
              )
            );
          })}
        </ScrollView>
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
    height: '85%',
    paddingBottom: 20,
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
    height: '100%',
  },
});

export default Stores;
