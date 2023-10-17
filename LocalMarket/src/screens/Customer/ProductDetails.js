import React, {useRef} from 'react';
import {StyleSheet, View, Image, Text, TouchableOpacity, ScrollView} from 'react-native';
import Colors from '../../constant/Colors';
import {Header, PrimaryButton} from '../../components';
import {useNavigation} from '@react-navigation/native';

const ProductDetails = () => {
  const navigation = useNavigation();
  const refRBSheet = useRef(null);

  return (
    <View style={styles.mainContainer}>
      <Header heading={''} title={'Go back'} description={''} />
      <ScrollView style={styles.internalContainer}>
        <View style={styles.cardContainer}>
          <View style={styles.imageContainer}>
            <Image
              source={require('../../assets/Images/food.png')}
              style={{width: '100%', height: '100%', borderRadius: 20}}
            />
          </View>
          <Text style={styles.headerTitle}>Ground Beef Taccos</Text>
          <Text style={styles.descriptionText}>Store Name (Industry Name)</Text>
          <View style={styles.priceContainer}>
            <Text style={styles.priceText}>$9.20</Text>
            <View style={styles.addsubContainer}>
              <TouchableOpacity
                style={{
                  backgroundColor: Colors.secondaryColor,
                  borderRadius: 100,
                  height: 30,
                  width: 30,
                  padding: 10,
                  borderWidth: 1,
                  borderColor: Colors.primary,
                }}></TouchableOpacity>
              <Text style={styles.qtyText}>02</Text>
              <TouchableOpacity
                style={{
                  backgroundColor: Colors.primary,
                  borderRadius: 100,
                  height: 30,
                  width: 30,
                  padding: 10,
                }}></TouchableOpacity>
            </View>
          </View>
          <Text style={styles.descriptionText}>
            Brown the beef better. Lean ground beef – I like to use 85% lean
            angus. Garlic – use fresh chopped. Spices – chili powder, cumin,
            onion powder.
            Brown the beef better. Lean ground beef – I like to use 85% lean
            angus. Garlic – use fresh chopped. Spices – chili powder, cumin,
            onion powder.
            Brown the beef better. Lean ground beef – I like to use 85% lean
            angus. Garlic – use fresh chopped. Spices – chili powder, cumin,
            onion powder.'
            Brown the beef better. Lean ground beef – I like to use 85% lean
            angus. Garlic – use fresh chopped. Spices – chili powder, cumin,
            onion powder.'
          </Text>
          <PrimaryButton
          title={'Add to Cart'}
          onPress={() => navigation.navigate('Cart')}
          containerStyle={styles.containerStyle}
          buttonPressed={styles.buttonPressed}
        />
        </View>
      </ScrollView>
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
    height: '100%',
    marginHorizontal: 10,
  },
  imageContainer: {
    height: 200,
    width: '100%',
    borderRadius: 20,
    marginTop: 10,
  },
  headerTitle: {
    fontSize: 32,
    color: Colors.primaryText,
    fontWeight: 'bold',
    marginTop: 20,
  },
  priceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  priceText: {
    fontSize: 26,
    fontWeight: 'bold',
    color: Colors.primary,
  },
  addsubContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  qtyText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.primaryText,
    marginHorizontal: 10,
  },
  descriptionText: {
    fontSize: 14,
    color: Colors.secondaryText,
    lineHeight: 30,
  },
  containerStyle: {
    backgroundColor: Colors.backgroundColor,
    width: '100%',
    marginTop: '15%',
    marginBottom: '2%',
  },
  buttonPressed: {
  },
});

export default ProductDetails;
