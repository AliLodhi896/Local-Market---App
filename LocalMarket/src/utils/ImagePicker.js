// import {launchImageLibrary, launchCamera} from 'react-native-image-picker';
// import {PermissionsAndroid} from 'react-native';

// export const accessGallery = async () => {
//   const options = {
//     path: 'images',
//     mediaType: 'photo',
//     selectionLimit: 1,
//   };

//   const cameraResponse = await launchImageLibrary(options, response => {
//     return response;
//   });
//   return cameraResponse;
// };
// const requestCameraPermission = async () => {
//   try {
//     const granted = await PermissionsAndroid.request(
//       PermissionsAndroid.PERMISSIONS.CAMERA,
//       {
//         title: 'Shifa Now Camera Permission',
//         message:
//           'Shifa Now needs access to your camera ' +
//           'so you can take awesome pictures.',
//         buttonNeutral: 'Ask Me Later',
//         buttonNegative: 'Cancel',
//         buttonPositive: 'OK',
//       },
//     );
//     if (granted === PermissionsAndroid.RESULTS.GRANTED) {
//       console.log('You can use the camera');
//     } else {
//       console.log('nhi chala bhai nahi chala');
//     }
//   } catch (err) {
//     console.warn(err);
//   }
// };

// export const accessCamera = async () => {
//   await requestCameraPermission();
//   const options = {
//     path: 'images',
//     mediaType: 'photo',
//   };

//   const cameraResponse = await launchCamera(options, response => {
//     return response;
//   });
//   return cameraResponse;
// };
