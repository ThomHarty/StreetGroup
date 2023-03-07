import {StyleSheet, TextStyle} from 'react-native';

import {COLORS} from '../../../../theme/colors';
import {TypographyStyles, TypographyStylesProps} from '../Typography.types';

export const useStyles = ({size}: TypographyStylesProps) => {
  let fontSize: TextStyle['fontSize'];
  let fontWeight: TextStyle['fontWeight'] = 'normal';
  let opacity: TextStyle['opacity'] = 1;

  switch (size) {
    case 'heading':
      fontSize = 24;
      break;
    case 'subHeading':
      fontSize = 21;
      fontWeight = 'bold';
      break;
    case 'paragraph':
      fontSize = 18;
      opacity = 0.7;
      break;
    case 'small':
      fontSize = 13;
      opacity = 0.7;
      break;
  }

  const styles: TypographyStyles = StyleSheet.create({
    text: {
      color: COLORS.BLACK,
      fontSize,
      fontWeight,
      opacity,
    },
  });

  return styles;
};
