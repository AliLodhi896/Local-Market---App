import React, {useState, useRef} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import Colors from '../../constant/Colors';
import {
  PrimaryHeader,
  SearchInput,
  DottedSlider,
  Header,
} from '../../components';
import {useNavigation} from '@react-navigation/native';
import ProductCard from '../../components/Cards/ProductCard';
import DropdownClass from '../../components/Dropdown/DropdownClass';

const Products = () => {
  const navigation = useNavigation();
  const [industries, setIndustries] = useState([
    {key: 1, name: 'Men'},
    {key: 2, name: 'Garments'},
  ]);

  const slides = [
    require('../../assets/Images/McDonalds.jpg'),
    require('../../assets/Images/McDonalds.jpg'),
    require('../../assets/Images/McDonalds.jpg'),
  ];
  return (
    <ScrollView style={styles.mainContainer}>
      <Header
        title={'Go back'}
        heading={'Local Market'}
      />
      <SearchInput placeholder={'Filter Products'} />

      <View style={{marginHorizontal: 20}}>
        <ScrollView
          showsHorizontalScrollIndicator={false}
          horizontal
          style={{marginTop: 20}}>
          <View style={{width: 80, height: 100}}>
           <View style={{padding:4,backgroundColor:Colors.primary,borderRadius:100,height: '60%', width: '80%',}}>
           <Image
              style={{height: '100%', width: '100%', borderRadius: 100}}
              source={require('../../assets/Images/food.png')}
            />
           </View>
            <Text
              style={{fontSize: 14, color: Colors.primaryText, marginTop: 10}}>
              Cateogry
            </Text>
          </View>
          <View style={{width: 80, height: 100}}>
           <View style={{padding:4,backgroundColor:Colors.primary,borderRadius:100,height: '60%', width: '80%',}}>
           <Image
              style={{height: '100%', width: '100%', borderRadius: 100}}
              source={require('../../assets/Images/food.png')}
            />
           </View>
            <Text
              style={{fontSize: 14, color: Colors.primaryText, marginTop: 10}}>
              Cateogry
            </Text>
          </View>
          <View style={{width: 80, height: 100}}>
           <View style={{padding:4,backgroundColor:Colors.primary,borderRadius:100,height: '60%', width: '80%',}}>
           <Image
              style={{height: '100%', width: '100%', borderRadius: 100}}
              source={require('../../assets/Images/food.png')}
            />
           </View>
            <Text
              style={{fontSize: 14, color: Colors.primaryText, marginTop: 10}}>
              Cateogry
            </Text>
          </View>
          <View style={{width: 80, height: 100}}>
           <View style={{padding:4,backgroundColor:Colors.primary,borderRadius:100,height: '60%', width: '80%',}}>
           <Image
              style={{height: '100%', width: '100%', borderRadius: 100}}
              source={require('../../assets/Images/food.png')}
            />
           </View>
            <Text
              style={{fontSize: 14, color: Colors.primaryText, marginTop: 10}}>
              Cateogry
            </Text>
          </View>
          <View style={{width: 80, height: 100}}>
           <View style={{padding:4,backgroundColor:Colors.primary,borderRadius:100,height: '60%', width: '80%',}}>
           <Image
              style={{height: '100%', width: '100%', borderRadius: 100}}
              source={require('../../assets/Images/food.png')}
            />
           </View>
            <Text
              style={{fontSize: 14, color: Colors.primaryText, marginTop: 10}}>
              Cateogry
            </Text>
          </View>
        </ScrollView>
        <View
          style={{width: '100%', height: 185, borderRadius: 20, marginTop: 20,padding:4,backgroundColor:Colors.primary}}>
          <DottedSlider slides={slides} image={true} style={{height: 180}} />
        </View>
        <View style={styles.headingContainer}>
          <Text style={styles.heading2}>Featured Products</Text>
          <TouchableOpacity   onPress={()=>navigation.navigate('ProductLists')}style={styles.textContainer}>
            <Text style={styles.text}>View All</Text>
          </TouchableOpacity>
        </View>

        <View style={{marginTop: 20, flexDirection: 'row', flexWrap: 'wrap',justifyContent:"space-between"}}>
          <ProductCard
          onPress={()=>navigation.navigate('ProductDetails')}
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
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: Colors.backgroundColor,
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
    marginHorizontal: 20,
    height: '100%',
    backgroundColor: 'black',
    flexDirection: 'row',
  },
  cardContainerNew: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
  },
});

export default Products;
