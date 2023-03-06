import {TextStyle, ViewStyle} from 'react-native';

export interface IInputProps {
  label?: string;
  placeholder?: string;
  value: string;
  onChangeText: (value: string) => void;
}

export interface InputStyles {
  label: TextStyle;
  outer: ViewStyle;
  container: ViewStyle;
  input: TextStyle;
}

export interface UseColorsProps {
  isFocused: boolean;
}
