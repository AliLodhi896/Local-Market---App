import React, {useRef} from 'react';
import {View, Text, Image} from 'react-native';
import Swiper from 'react-native-swiper';

const DottedSlider = ({slides, image,style}) => {
  return (
    <Swiper showsButtons={false} style={{borderRadius:20}} autoplay={true}>
      {slides.map((slide, index) => (
        <View
          key={index}
          style={[{
            height: '50%',
            borderRadius:20
          },style]}>
          {image == true ? (
            <View style={{height: '100%', width: '100%',borderRadius:20}}>
              <Image
                style={{height: '100%', width: '100%', borderRadius: 20}}
                source={slide}
              />
            </View>
          ) : (
            <Text style={{color: 'grey', fontSize: 13.5, textAlign: 'center'}}>
              {slide}
            </Text>
          )}
        </View>
      ))}
    </Swiper>
  );
};

export default DottedSlider;
