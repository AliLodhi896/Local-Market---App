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
       <View style={{marginHorizontal:20,alignItems:'center',justifyContent:'center',marginTop:20}}>
        <View style={{height:100,width:100,alignItems:'center'}}>
            <Image
              source={require('../../assets/Logo/Starbucks.png')}
              style={{width: '100%', height: '100%'}}
            />
          </View>
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
    height: '100%',
    flexWrap: 'wrap',
    paddingHorizontal: 20,
  },
});

export default Dashboard;
