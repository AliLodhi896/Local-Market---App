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

const ProductLists = () => {
  const navigation = useNavigation();
  const [industries, setIndustries] = useState([
    {key: 1, name: 'Men'},
    {key: 2, name: 'Garments'},
  ]);
  const [stores, setStores] = useState([
    {key: 1, name: 'Industry 1'},
    {key: 2, name: 'Industry 2'},
  ]);
  return (
    <ScrollView style={styles.mainContainer}>
      <Header
        title={'Go back'}
        industries={industries}
        heading={'Local Market'}
      />
      <SearchInput placeholder={'Filter Products'} />
      <View style={{marginHorizontal:20}}>
     <DropdownClass
          data={industries}
          defaultButtonText={'Select Industries'}
          lable={'Select Product'}
          style={{marginTop:10}}
        />
      <DropdownClass
          data={stores}
          defaultButtonText={'Select Stores'}
          lable={'Select Product'}
          style={{marginTop:10}}
        />
     </View>
      <View style={{marginHorizontal: 20}}>
        <View style={styles.headingContainer}>
          <Text style={styles.heading2}>All Products</Text>
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
    backgroundColor: Colors.backgroundColor,
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

export default ProductLists;
