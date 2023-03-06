import {useAnimatedStyle, interpolateColor} from 'react-native-reanimated';

import {useColorInterpolation} from '../../../shared/useColorInterpolation';
import {COLORS} from '../../../theme/colors';
import {UseColorsProps} from './Button.types';

export const useColors = ({isPressing}: UseColorsProps) => {
  const shared = useColorInterpolation({check: isPressing});

  const outer = useAnimatedStyle(() => {
    return {
      backgroundColor: interpolateColor(
        shared.value,
        [0, 1],
        [COLORS.WHITE, COLORS.BRAND_FAINT],
      ),
    };
  });

  const container = useAnimatedStyle(() => {
    return {
      backgroundColor: interpolateColor(
        shared.value,
        [0, 1],
        [COLORS.BRAND, COLORS.BRAND_DARK],
      ),
    };
  });

  return {outer, container};
};
