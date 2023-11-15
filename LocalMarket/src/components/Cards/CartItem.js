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
import Icons from '../../constant/Icons';

const CartItem = props => {
  return (
    <View style={styles.mainContainer}>
      <Pressable
        style={({pressed}) => pressed && styles.pressedItem}
        onPress={props.onPress}>
        <View style={styles.subContainer}>
          <View style={styles.imageContainer}>
            <Image
              source={require('../../assets/Images/Zinger.jpg')}
              style={{width: '100%', height: '100%'}}
            />
          </View>
          <View>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text style={styles.itemName}>{props.productName}</Text>
              <TouchableOpacity style={styles.cancelBtn}>
              <Icons
                    icon_type={'AntDesign'}
                    name={'close'}
                    size={20}
                    color={Colors.green}
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
                    borderWidth: 1,
                    borderColor: Colors.primary,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Icons
                    icon_type={'AntDesign'}
                    name={'minus'}
                    size={20}
                    color={Colors.green}
                  />
                </TouchableOpacity>
                <Text style={styles.qtyText}>02</Text>
                <TouchableOpacity
                  style={{
                    backgroundColor: Colors.secondaryColor,
                    borderRadius: 100,
                    height: 25,
                    width: 25,
                    borderWidth: 1,
                    borderColor: Colors.primary,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Icons
                    icon_type={'AntDesign'}
                    name={'plus'}
                    size={20}
                    color={Colors.green}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: Colors.secondaryColor,
    borderRadius: 10,
    marginHorizontal: '7%',
    justifyContent: 'flex-start',
    height: 100,
    flexDirection: 'row',
    marginTop: 10,
    padding: 10,
  },
  pressedItem: {
    borderRadius: 10,
  },
  subContainer: {
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
    width: 20,
    height: 20,
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
