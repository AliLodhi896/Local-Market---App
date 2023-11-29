import React, {useContext} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const Background = ({children,style}) => {
  return (
    <LinearGradient
  start={{x: 0.0, y: 0.25}} end={{x: 0.5, y: 1.0}}
  locations={[0,0.5,0.6]}
  useAngle={true} angle={45} angleCenter={{x:0.5,y:0.5}}
  colors={['#00d4ff', '#23e5dc']}
    //   colors={['#00d4ff', '#23e5dc']}
      style={style}
      >
      {children}
    </LinearGradient>
  );
};

export default Background;
