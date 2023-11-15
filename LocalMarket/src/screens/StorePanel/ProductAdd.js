import React, {useState, useRef, useCallback} from 'react';
import {
  Image,
  StyleSheet,
  PermissionsAndroid,
  View,
  TouchableOpacity,
} from 'react-native';
import {Header, InputField, PrimaryHeader} from '../../components';
import Colors from '../../constant/Colors';
import DropdownClass from '../../components/Dropdown/DropdownClass';
import Icons from '../../constant/Icons';
import {useNavigation, useFocusEffect} from '@react-navigation/native';
import {useForm} from 'react-hook-form';
import { accessGallery } from '../../utils/ImagePicker';

const ProductAdd = () => {
  const {
    control,
    handleSubmit,
    formState: {errors, isValid},
  } = useForm({mode: 'all'});
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

  const openGallery = () => {
    accessGallery().then(response => {
      photo.current = response.assets ? response.assets[0] : undefined;
      setselectedFileUri(response?.assets);
      setSelectedFirstImage(response.assets[0]?.fileName);
    });
  };

  const permission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      }
    } catch (err) {
      console.warn(err);
    }
  };

  useFocusEffect(
    useCallback(() => {
      permission();
    }, []),
  );

  return (
    <View style={styles.mainContainer}>
      {/* <Header heading={'Add Product'} title={'Go back'} description={''} /> */}
      <Header title={'Go back'} heading={'Local Market'} />
      <View style={styles.internalContainer}>

        <DropdownClass
        lableVisible={true}
          data={industries}
          defaultButtonText={'Select Industry'}
          lable={'Select industry'}
          style={{marginVertical: 10}}
        />
                <DropdownClass
          data={products}
          lableVisible={true}
          defaultButtonText={'Select Product Category'}
          lable={'Select product'}
        />
        <InputField
          name="Product name"
          control={control}
          lable={'Product name'}
          rules={{
            required: 'Product name is required',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'Invalid Product name address',
            },
          }}
          placeholder="Enter your product name..."
        />
 <InputField
          name="Product price"
          control={control}
          lable={'Product price'}
          rules={{
            required: 'Product price is required',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'Invalid Product price address',
            },
          }}
          placeholder="Enter your product price..."
        />
         <InputField
          name="Product description"
          control={control}
          lable={'Product description'}
          rules={{
            required: 'Product description is required',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'Invalid Product description address',
            },
          }}
          placeholder="Enter your product description..."
        />
        {selectedFileUri == null ? (
          <TouchableOpacity
            onPress={() => openGallery()}
            style={{
              padding: 20,
              backgroundColor: Colors.secondaryColor,
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
  },
  internalContainer: {
    backgroundColor: Colors.backgroundColor,
    paddingBottom: 20,
    alignItems: 'center',
    marginTop:20,
    marginHorizontal:20,
    flex:1
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
