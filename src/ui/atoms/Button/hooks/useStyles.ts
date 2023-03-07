import {StyleSheet} from 'react-native';
import {COLORS} from '../../../../theme/colors';
import {ButtonStyles} from '../Button.types';

export const useStyles = () => {
  const styles: ButtonStyles = StyleSheet.create({
    outer: {
      padding: 10,
      borderRadius: 100,
      backgroundColor: COLORS.WHITE,
    },
    container: {
      backgroundColor: COLORS.BRAND,
      alignItems: 'center',
      justifyContent: 'center',
      padding: 20,
      borderRadius: 100,
    },
    title: {
      color: COLORS.WHITE,
      fontSize: 21,
    },
  });

  return styles;
};
