import {StyleSheet} from 'react-native';

import {COLORS} from '../../../theme/colors';
import {TypographyStyles, TypographyStylesProps} from './Typography.types';

export const useStyles = ({size}: TypographyStylesProps) => {
  let fontSize;

  switch (size) {
    case 'heading':
      fontSize = 30;
      break;
    case 'subHeading':
      fontSize = 24;
      break;
    case 'paragraph':
      fontSize = 18;
      break;
    case 'small':
      fontSize = 13;
      break;
  }

  const styles: TypographyStyles = StyleSheet.create({
    text: {
      color: COLORS.BLACK,
      fontSize,
    },
  });

  return styles;
};
