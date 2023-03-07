import {TextStyle} from 'react-native';

type Size = 'heading' | 'subHeading' | 'paragraph' | 'small';

export interface ITypographyProps {
  text: string;
  size?: Size;
}

export interface TypographyStyles {
  text: TextStyle;
}

export interface TypographyStylesProps {
  size: Size;
}
