import {ViewStyle} from 'react-native/types';
import {ITypographyProps} from '../../atoms';

export interface IBankHolidayItemProps {
  title: ITypographyProps;
  date: ITypographyProps;
  notes: ITypographyProps;
  bunting: boolean;
}

export interface IBankHolidayItemStyles {
  container?: ViewStyle;
  titleContainer?: ViewStyle;
  textContainer?: ViewStyle;
}
