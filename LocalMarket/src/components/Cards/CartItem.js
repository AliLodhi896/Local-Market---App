import React from 'react';
import {
  Text,
  StyleSheet,
  Pressable,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import Colors from '../../constant/Colors';

const CartItem = props => {
  return (
    <View style={styles.items}>
      <Pressable
        style={({pressed}) => pressed && styles.pressedItem}
        onPress={props.onPress}>
        <View style={styles.name}>
          <View style={styles.imageContainer}>
            <Image
              source={require('../../assets/Images/McDonalds.jpg')}
              style={{width: '100%', height: '100%'}}
            />
          </View>
          <View>
            <View style={{flexDirection: 'row',justifyContent: 'space-between'}}>
              <Text style={styles.itemName}>{props.productName}</Text>
              <TouchableOpacity style={styles.cancelBtn}>
                <Image
                  source={require('../../assets/icons/close.png')}
                  style={{width: '100%', height: '100%'}}
                />
              </TouchableOpacity>
            </View>
            <Text style={styles.txt2}>{props.additional}</Text>

            <View style={styles.priceContainer}>
              <Text style={styles.price}>{props.price}</Text>
              <View style={styles.addsubContainer}>
                <TouchableOpacity
                  style={{
                    backgroundColor: Colors.secondaryColor,
                    borderRadius: 100,
                    height: 25,
                    width: 25,
                    padding: 10,
                    borderWidth: 1,
                    borderColor: Colors.primary,
                  }}></TouchableOpacity>
                <Text style={styles.qtyText}>02</Text>
                <TouchableOpacity
                  style={{
                    backgroundColor: Colors.primary,
                    borderRadius: 100,
                    height: 25,
                    width: 25,
                    padding: 10,
                    elevation: 8,
                    shadowColor: Colors.primary,
                    shadowOffset: {width: 0, height: 2},
                    shadowOpacity: 0.2,
                    shadowRadius: 2,
                  }}></TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  items: {
    backgroundColor: Colors.secondaryColor,
    // marginVertical: '5%',
    borderRadius: 10,
    marginHorizontal: '7%',
    justifyContent: 'flex-start',
    height: '15%',
    flexDirection: 'row',
    marginTop: '10%'
  },
  pressedItem: {
    borderRadius: 10,
  },
  name: {
    flexDirection: 'row',
  },
  imageContainer: {
    width: '30%',
    height: '100%',
    backgroundColor: 'black',
    borderRadius: 10,
    overflow: 'hidden',
    elevation: 8,
    shadowColor: Colors.primaryText,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  itemName: {
    fontSize: 16,
    color: Colors.primaryText,
    fontWeight: 'bold',
    marginLeft: 12,
  },
  cancelBtn: {
    width: '5%',
    height: '34%',
    right: 34,
    marginTop: 4,
  },
  txt2: {
    color: Colors.secondaryText,
    marginLeft: 12,
    // marginTop: 4,
    bottom: 10,
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 12,
    marginTop: 14,
    color: Colors.primary,
  },
  priceContainer: {
    flexDirection: 'row',
  },
  addsubContainer: {
    flexDirection: 'row',
    marginLeft: '32%',
    marginTop: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  qtyText: {
    fontSize: 14,
    color: Colors.primaryText,
    fontWeight: 'bold',
    marginHorizontal: 5,
  },
});

export default CartItem;
