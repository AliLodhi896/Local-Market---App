import React, {useState} from 'react';
import {Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {Header} from '../../components';
import Colors from '../../constant/Colors';
import Order from '../../components/Cards/Order';

const MyOrders = () => {
  const [selectedTab, setselectedTab] = useState(true);
  return (
    <View style={styles.mainContainer}>
      <Header heading={'My Orders'} title={'Go back'} description={''} />
      <View style={styles.internalContainer}>
        <View style={styles.switchableBox}>
          <TouchableOpacity
            onPress={() => setselectedTab(true)}
            style={{
              backgroundColor: selectedTab == true ? Colors.primary : 'white',
              padding: 10,
              width: '50%',
              borderRadius: 30,
            }}>
            <Text
              style={{
                color:
                  selectedTab == false ? Colors.primary : Colors.secondaryColor,
                fontSize: 16,
                textAlign: 'center',
              }}>
              Upcoming
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setselectedTab(false)}
            style={{
              backgroundColor: selectedTab == false ? Colors.primary : 'white',
              padding: 10,
              width: '50%',
              borderRadius: 30,
            }}>
            <Text
              style={{
                color: selectedTab == true ? Colors.primary : Colors.secondary,
                fontSize: 16,
                textAlign: 'center',
              }}>
              History
            </Text>
          </TouchableOpacity>
        </View>
        {selectedTab == true ? (
          <>
            <Order image={require('../../assets/Images/Zinger.jpg')} />
            <Order image={require('../../assets/Images/Zinger.jpg')} />
          </>
        ) : (
          <Order image={require('../../assets/Images/KfcZinger.jpg')} />
        )}
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
    alignItems: 'center',
  },
  switchableBox: {
    width: '80%',
    flexDirection: 'row',
    marginVertical: '10%',
    borderWidth: 1,
    borderRadius: 30,
    borderColor: Colors.primary,
    padding: 2
  },
});

export default MyOrders;
