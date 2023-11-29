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
import {Header, Card} from '../../components';
import {useNavigation} from '@react-navigation/native';
import {DrawerAnimationPage} from '../../components/animationconstant/DrawerAnimationPage';
import Animated from 'react-native-reanimated';

const Dashboard = () => {
  const navigation = useNavigation();

  const card = [
    {id: 1, classId: 1, Subject: 'Total Products', total: 100},
    {id: 1, classId: 1, Subject: 'Total Orders', total: 20},
  ];

  const animatedStyle = DrawerAnimationPage();

  return (
    <Animated.View
      style={[styles.container(animatedStyle), styles.mainContainer]}>
      <Header
        secondary={false}
        heading={'Store dashboard'}
        title={'Go back'}
        description={''}
      />
      <View style={styles.internalContainer}>
        <ScrollView contentContainerStyle={styles.cardContainer}>
          {card.map(cardItem => {
            return (
              <Card
                key={cardItem.id}
                dashboard={true}
                title={cardItem.Subject}
                total={cardItem.total}
                onPress={() => {
                  // navigation.navigate('Products');/
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
    justifyContent: 'space-between',
    elevation: 20,
    shadowColor: 'black',
    shadowOffset: {width: 2, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  container: animatedStyle => ({
    ...animatedStyle,
    flex: 1,
  }),
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
    flexDirection: 'row',
    justifyContent: 'center',
    height: '100%',
    flexWrap: 'wrap',
    paddingHorizontal: 20,
  },
});

export default Dashboard;
