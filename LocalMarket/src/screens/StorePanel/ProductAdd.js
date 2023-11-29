import React, {useState,useRef,useCallback} from 'react';
import {Image, StyleSheet, PermissionsAndroid, View, TouchableOpacity} from 'react-native';
import {Header, InputField} from '../../components';
import Colors from '../../constant/Colors';
import DropdownClass from '../../components/Dropdown/DropdownClass';
import Icons from '../../constant/Icons';
import {useNavigation, useFocusEffect} from '@react-navigation/native';
// import { accessGallery } from '../../utils/ImagePicker';

const ProductAdd = () => {
  const [selectedFileUri, setselectedFileUri] = useState(null);
  const [selectedFirstImage, setSelectedFirstImage] = useState('File');
  const [products, setproducts] = useState([
    {key: 1, name: 'Product 1'},
    {key: 2, name: 'Product 2'},
  ]);
  const [industries, setindustries] = useState([
    {key: 1, name: 'Industry 1'},
    {key: 2, name: 'Industry 2'},
  ]);

  const photo = useRef();

  // const openGallery = () => {
  //   accessGallery().then(response => {
  //     photo.current = response.assets ? response.assets[0] : undefined;
  //     setselectedFileUri(response?.assets);
      // setSelectedFirstImage(response.assets[0]?.fileName);
  //   });
  // };

  // const permission = async () => {
  //   try {
  //     const granted = await PermissionsAndroid.request(
  //       PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
  //     );
  //     if (granted === PermissionsAndroid.RESULTS.GRANTED) {
  //     }
  //   } catch (err) {
  //     console.warn(err);
  //   }
  // };

  // useFocusEffect(
  //   useCallback(() => {
  //     permission();
  //   }, []),
  // );

  return (
    <View style={styles.mainContainer}>
      <Header heading={'Add Product'} title={'Go back'} description={''} />
      <View style={styles.internalContainer}>
        <DropdownClass
          data={products}
          defaultButtonText={'Select Product'}
          lable={'Select Product'}
        />
        <DropdownClass
          data={industries}
          defaultButtonText={'Select Industry'}
          lable={'Select Industry'}
        />
        <InputField
          // control={control}
          lable={'Product Name'}
          placeholder={'Product Name'}
          placeholderTextColor={Colors.secondaryText}
          secureTextEntry={true}
        />

        <InputField
          // control={control}
          placeholderTextColor={Colors.secondaryText}
          placeholder={'Product Price'}
          lable={'Product Price'}
          secureTextEntry={true}
        />
        <InputField
          customStyle={styles.customStyle2}
          // control={control}
          lable={'Product Descriptions'}
          placeholder={'Product Descriptions'}
          placeholderTextColor={Colors.secondaryText}
          secureTextEntry={true}
          multiline={true}
        />
                      {selectedFileUri == null ? (
                <TouchableOpacity
                  onPress={() => openGallery()}
                  style={{
                    padding: 20,
                    backgroundColor: Colors.secondary,
                    marginVertical: 20,
                    marginHorizontal: 20,
                    borderRadius: 10,
                    height: 80,
                    width: 80,
                    alignContent: 'center',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Icons
                    icon_type={'MaterialIcons'}
                    size={40}
                    color={Colors.primary}
                    name={'attach-file'}
                  />
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  onPress={() => openGallery()}
                  style={{
                    padding: 10,
                    backgroundColor: Colors.secondary,
                    marginVertical: 20,
                    marginHorizontal: 20,
                    borderRadius: 10,
                    height: 80,
                    width: 80,
                    alignContent: 'center',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Image
                    source={{uri: selectedFileUri[0]?.uri}}
                    style={{width: '100%', height: '100%', borderRadius: 10}}
                  />
                </TouchableOpacity>
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
  customStyle2: {
    borderRadius: 8,
    padding: 8,
    fontSize: 16,
    fontWeight: '500',
    elevation: 4,
    height: 120,
  },
});

export default ProductAdd;
