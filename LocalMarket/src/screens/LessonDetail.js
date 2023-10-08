import React from 'react';
import {View, StyleSheet, Text, ScrollView} from 'react-native';
import {Header} from '../components';
import Colors from '../constant/Colors';

const LessonDetail = () => {
  return (
    <View style={styles.mainContainer}>
      <Header
        heading={'Ready to learn'}
        title={'Lesson Details'}
        description={'Check lesson details'}
      />
      <View style={styles.internalContainer}>
        <View style={styles.internalHeading}>
          <Text style={styles.text}>Lesson No:</Text>
          <Text style={styles.text}>Lesson Name:</Text>
        </View>
        <View style={styles.lessonDetailContainer}>
            <ScrollView>
                
            </ScrollView>
        </View>
        </View>
        
        </View>
  )
}
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
      height: '80%',
    },
    internalHeading: {
      marginTop: '4%',
      marginBottom: '5%',
      flexDirection: 'row',
    //   marginHorizontal: '7%',
      justifyContent: 'space-around',
    },
    text: {
      color: Colors.primary,
      fontWeight: '800',
      fontSize: 15,
    },
    lessonDetailContainer:{
      backgroundColor: Colors.secondaryColor,
    //   marginVertical: '3%',
      marginHorizontal: '5.5%',
      borderRadius: 15,
      height: '87%',
      elevation: 8,
      shadowColor: Colors.primaryText,
      shadowOffset: {width: 0, height: 4},
      shadowOpacity: 0.4,
    
    }
  });

export default LessonDetail