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
import {Header, BottomSheet, FloatingButton} from '../../components';
import {useNavigation} from '@react-navigation/native';
import CreateAILesson from '../CreateAILesson';
import FeaturedStore from '../../components/Cards/FeaturedStore';
import ProductCard from '../../components/Cards/ProductCard';

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
    {id: 4, classId: 1, Subject: 'Islamiat'},
  ];
  const stores = [
    {
      id: 1,
      name: 'Zinger',
      price: '$15.00',
      image: require('../../assets/Images/zinger2.png'),
    },
    {
      id: 2,
      name: 'Zinger',
      price: '$15.00',
      image: require('../../assets/Images/zinger2.png'),
    },
    {
      id: 3,
      name: 'Zinger',
      price: '$15.00',
      image: require('../../assets/Images/zinger2.png'),
    },
    {
      id: 4,
      name: 'Zinger',
      price: '$15.00',
      image: require('../../assets/Images/zinger2.png'),
    },
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
      <Header heading={'Products'} title={'Go back'} description={''} />
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

        <View style={styles.headingContainer}>
          <Text style={styles.heading2}>Featured Products</Text>
          <TouchableOpacity style={styles.textContainer}>
            <Text style={styles.text}>View All</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.cardContainerNew}>
          <ProductCard
            image={require('../../assets/Images/zinger2.png')}
            name={'Zinger'}
            price={'$15.00'}
          />
          <ProductCard
            image={require('../../assets/Images/zinger2.png')}
            name={'Zinger'}
            price={'$15.00'}
          />
          <ProductCard
            image={require('../../assets/Images/zinger2.png')}
            name={'Zinger'}
            price={'$15.00'}
          />
          <ProductCard
            image={require('../../assets/Images/zinger2.png')}
            name={'Zinger'}
            price={'$15.00'}
          />
          <ProductCard
            image={require('../../assets/Images/zinger2.png')}
            name={'Zinger'}
            price={'$15.00'}
          />
    </View> 

        {/* <View style={styles.cardContainer}>
          <FlatList
            data={stores}
            renderItem={storeItem => {
              return (
                <ProductCard
                  key={storeItem.item.id}
                  image={storeItem.item.image}
                  name={storeItem.item.name}
                  price={storeItem.item.price}
                  
                />
                
              );
            }}
          />
        </View> */}

       
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
    marginHorizontal:20,
    height: '100%',
    backgroundColor: 'black',
    flexDirection: 'row'
  },
  cardContainerNew: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
  }
});

export default Products;
