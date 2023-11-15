import React, {useState} from 'react';
import {Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {Header, PrimaryHeader} from '../../components';
import Colors from '../../constant/Colors';
import Order from '../../components/Cards/Order';

const MyOrders = () => {
  const [selectedTab, setselectedTab] = useState(true);
  return (
    <View style={styles.mainContainer}>
           <Header
        title={'Go back'}
        heading={'Local Market'}
      />
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
            <Order
              image={require('../../assets/Images/Zinger.jpg')}
              name={'Order 1'}
              price={'10'}
              stock={'Completed'}
              date={'20 JUNE 2023'}
            />
            <Order
              image={require('../../assets/Images/Zinger.jpg')}
              name={'Order 1'}
              price={'10'}
              stock={'Completed'}
              date={'20 JUNE 2023'}
            />
          </>
        ) : (
          <Order
            image={require('../../assets/Images/Zinger.jpg')}
            name={'Order 1'}
            price={'10'}
            stock={'Completed'}
            date={'20 JUNE 2023'}
          />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: Colors.backgroundColor,
  },
  internalContainer: {
    alignItems: 'center',
  },
  switchableBox: {
    width: '80%',
    flexDirection: 'row',
    marginTop: '2%',
    borderWidth: 1,
    borderRadius: 30,
    borderColor: Colors.primary,
    padding: 2,
    marginBottom: '4%',
  },
});

export default MyOrders;
