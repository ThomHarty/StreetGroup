import {ViewStyle} from 'react-native/types';
import {ITypographyProps} from '../../atoms';

export interface IBankHolidayItemProps {
  title: ITypographyProps;
  date: ITypographyProps;
}

export interface IBankHolidayItemStyles {
  container?: ViewStyle;
}
