import {ViewStyle} from 'react-native/types';
import {IBankHolidayItemProps} from '../../molecules';

export interface IBankHolidaysListProps {
  list: IBankHolidayItemProps[];
}

export interface IBankHolidaysListStyles {
  container?: ViewStyle;
}
