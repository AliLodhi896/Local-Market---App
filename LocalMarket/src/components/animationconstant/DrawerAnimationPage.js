import { useDrawerStatus, useDrawerProgress } from '@react-navigation/drawer';
import Animated,{Extrapolation, interpolate,useSharedValue,useAnimatedStyle} from 'react-native-reanimated';
export const DrawerAnimationPage = () => {
  
  const isDrawerOpen = useDrawerStatus() === 'open';
  const progress = useDrawerProgress(0);
  const scrollY = useSharedValue(0);

  const animatedStyles = useAnimatedStyle(() => {
    const scale = interpolate(progress.value,[0, 1],[1, 0.8]);
      const borderRadius = interpolate(progress.value, 
     [0, 1],
     [0, 26],
  );
 

    return {
      borderRadius,
      transform: [{ scale: scale }],
    };
  });


  return animatedStyles;
};
