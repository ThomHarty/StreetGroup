import {StyleSheet} from 'react-native';

import {COLORS} from '../../../theme/colors';
import {InputStyles} from './Input.types';

export const useStyles = () => {
  const styles: InputStyles = StyleSheet.create({
    label: {
      marginLeft: 20,
      color: COLORS.BRAND,
      fontSize: 18,
    },
    outer: {
      padding: 10,
      borderRadius: 15,
      backgroundColor: COLORS.WHITE,
    },
    container: {
      borderWidth: 3,
      borderColor: COLORS.BRAND,
      borderRadius: 10,
    },
    input: {
      backgroundColor: COLORS.WHITE,
      paddingTop: 15,
      paddingBottom: 15,
      paddingRight: 18,
      paddingLeft: 18,
      borderRadius: 10,
      fontSize: 18,
      color: COLORS.BRAND_DARK,
    },
  });

  return styles;
};
