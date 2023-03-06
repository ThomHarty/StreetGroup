import {useAnimatedStyle, interpolateColor} from 'react-native-reanimated';

import {useColorInterpolation} from '../../../shared/useColorInterpolation';
import {COLORS} from '../../../theme/colors';
import {UseColorsProps} from './Input.types';

export const useColors = ({isFocused}: UseColorsProps) => {
  const shared = useColorInterpolation({check: isFocused});

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
      borderColor: interpolateColor(
        shared.value,
        [0, 1],
        [COLORS.BRAND, COLORS.BRAND_DARK],
      ),
    };
  });

  const label = useAnimatedStyle(() => {
    return {
      color: interpolateColor(
        shared.value,
        [0, 1],
        [COLORS.BRAND, COLORS.BRAND_DARK],
      ),
    };
  });

  return {outer, container, label};
};
