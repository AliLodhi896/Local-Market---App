import {StyleSheet, Share, Text, View, Image} from 'react-native';
import React, {useContext, useState} from 'react';
import {DrawerContentScrollView} from '@react-navigation/drawer';
import {verticalScale, scale} from 'react-native-size-matters';
import DrawerContentItem from '../components/drawerItems/DrawerContentItem';
import {useNavigation, useFocusEffect} from '@react-navigation/native';
import Colors from '../constant/Colors';
// import Toast from 'react-native-toast-message';

const CustomDrawer = () => {
//   const {
//     userDetails,
//     isSignin,
//     setAuth,
//     setuserDetails,
//     setuserToken,
//     setIsSignin,
//     userToken,
//     role,
//     setRole
//   } = useContext(AuthContext);
  const navigation = useNavigation();

  const onShare = async () => {
    try {
      const result = await Share.share({
        message:
          'Im inviting you to download ShifaNow app to find, book and consult Pakistan’s best doctors. Click here for download: ' +
          'https://testflight.apple.com/join/Glh3Igm0',
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      console.log(error.message);
    }
  };

//   const Logout = async () => {
//     const signOut = await user_signout(userToken);
//     if (signOut?.success == true) {
//       setModalVisible(false);
//       Toast.show({
//         type: 'success',
//         text1: 'Successfully Logout',
//       });
//       setuserDetails([]);
//       setuserToken(null);
//       setRole(null)
//       setIsSignin(false);
//     }
//   };

  return (
    <DrawerContentScrollView scrollEnabled={true} style={{flex: 1}}>
      <View style={{flex: 1, paddingLeft: scale(20)}}>
        <View style={styles.profileContainer}>
          <Image
            source={require('../assets/Images/user.png')}
            style={styles.profilepicture}
          />

          <Text
            style={{
              color: Colors.secondaryColor,
              marginBottom: 10,
              fontWeight: 'bold',
              fontSize: 16
            }}>
           Faraz Ali
         
          </Text>
          <Text style={{color: Colors.secondaryColor, fontWeight: 'bold'}}>
          lodhiali787@gmail.com
          </Text>
        </View>

        <View style={styles.drawerItemContainer}>
          
          
          <DrawerContentItem
            iconName={'text-document-inverted'}
            iconType={'Entypo'}
            label={'Terms & Conditions'}
            iconSize={18}
            onPress={() => navigation.navigate('TermsConditon')}
          />
          <DrawerContentItem
            iconName={'policy'}
            iconType={'MaterialIcons'}
            label={'Privacy Policy'}
            iconSize={18}
            onPress={() => navigation.navigate('PrivacyPolicy')}
          />
          <DrawerContentItem
            iconName={'sharealt'}
            iconType={'AntDesign'}
            label={'Tell a Friend'}
            iconSize={18}
            onPress={() => onShare()}
          />
          {/* {isSignin == true ? (
            <DrawerContentItem
              iconName={'logout'}
              iconType={'AntDesign'}
              label={'Logout'}
              iconSize={18}
              onPress={() => setModalVisible(true)}
            />
          ) : (
            <DrawerContentItem
              iconName={'login'}
              iconType={'AntDesign'}
              label={'Login'}
              iconSize={18}
              onPress={() => setAuth(true)}
            />
          )} */}
        </View>
      </View>
    </DrawerContentScrollView>
  );
};

export default CustomDrawer;

const styles = StyleSheet.create({
  profileContainer: {
    marginTop: verticalScale(20),
    alignItems: 'center',
  },

  profilepicture: {
    height: verticalScale(140),
    aspectRatio: 1 / 1,
    borderRadius: 100,
    marginTop: 40,
  },

  drawerItemContainer: {
    marginTop: verticalScale(20),
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: verticalScale(30),
    justifyContent: 'space-between',
    marginBottom: verticalScale(10),
  },
});
