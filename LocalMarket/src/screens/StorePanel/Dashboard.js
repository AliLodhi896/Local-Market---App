import React, {useState, useRef} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
} from 'react-native';
import Colors from '../../constant/Colors';
import {Header, Card, DashboardCard, PrimaryHeader, SecondaryHeader} from '../../components';
import {useNavigation} from '@react-navigation/native';
import {DrawerAnimationPage} from '../../components/animationconstant/DrawerAnimationPage';
import Animated from 'react-native-reanimated';

const Dashboard = () => {
  const navigation = useNavigation();

  const card = [
    {id: 1, classId: 1, Subject: '20 Products', total: 100,image:require('../../assets/icons/products.png')},
    {id: 1, classId: 1, Subject: '10 Active Orders', total: 20,image:require('../../assets/icons/completed-task.png')},
    {id: 1, classId: 1, Subject: '5 Completed Orders', total: 20,image:require('../../assets/icons/document.png')},
    {id: 1, classId: 1, Subject: '1 Cancelled Orders', total: 20,image:require('../../assets/icons/delivery-cancelled.png')},
  ];

  const animatedStyle = DrawerAnimationPage();

  return (
    <Animated.View
      style={[styles.container(animatedStyle), styles.mainContainer]}>
      <SecondaryHeader title={'Go back'} heading={'Local Market'} />
      <View style={styles.internalContainer}>
       <View style={{marginHorizontal:20}}>
       <Text style={styles.sectionHeading}>Welcome</Text>
        <Text style={styles.sectionHeading}>To Store Name</Text>
        {/* <View style={{height:100,width:100,alignItems:'center',borderRadius:100}}>
            <Image
              source={require('../../assets/Logo/Starbucks.png')}
              style={{width: '100%', height: '100%',borderRadius:100}}
            />
          </View> */}
       </View>
        <ScrollView contentContainerStyle={styles.cardContainer}>
          {card.map(cardItem => {
            return (
              <DashboardCard
                key={cardItem.id}
                dashboard={true}
                title={cardItem.Subject}
                total={cardItem.total}
                image={cardItem?.image}
                onPress={() => {
                  // navigation.navigate('Products');/
                }}
                style={{
                  width: '45%',
                }}
              />
            );
          })}
          
        </ScrollView>
        <Text
          style={{
            fontSize: 12,
            color: Colors.primaryText,
            textAlign: 'center',
            marginTop: 10,
          }}>
          2023 @ Local Market. All rights reserved
        </Text>
        <Text
          style={{
            fontSize: 12,
            color: Colors.primaryText,
            textAlign: 'center',
            fontWeight: 'bold',
            marginTop: 10,
          }}>
          Terms & Condtions
        </Text>
      </View>
      
    </Animated.View>
  );
};
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: Colors.backgroundColor,
  },
  container: animatedStyle => ({
    ...animatedStyle,
    flex: 1,
  }),
  internalContainer: {
    backgroundColor: Colors.backgroundColor,
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
    paddingHorizontal: 20,
    paddingBottom:40
  },
  sectionHeading: {
    fontSize: 34,
    color: Colors.primaryText,
    fontWeight: '500',
  },
  sectionDescription: {
    fontSize: 18,
    color: Colors.primaryText,
    fontWeight: '500',
  },
});

export default Dashboard;
