import React, {useRef} from 'react';
import {View, Text} from 'react-native';
import Swiper from 'react-native-swiper';

const DottedSlider = ({slides}) => {
  return (
    <Swiper showsButtons={false} autoplay={true}>
      {slides.map((slide, index) => (
        <View
          key={index}
          style={{
            height: '50%',
            marginHorizontal: 20,
            marginVertical: 15
          }}>
          <Text style={{color: 'grey', fontSize: 13.5, textAlign: 'center'}}>
            {slide}
          </Text>
        </View>
      ))}
    </Swiper>
  );
};

export default DottedSlider;
