import {TextStyle, ViewStyle} from 'react-native';

export interface IButtonProps {
  title: string;
  onPress: () => void;
  disabled?: boolean;
}

export interface ButtonStyles {
  outer: ViewStyle;
  container: ViewStyle;
  title: TextStyle;
}

export interface UseColorsProps {
  isPressing: boolean;
}
