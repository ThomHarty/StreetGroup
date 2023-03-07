import {StyleSheet} from 'react-native';

import {IBankHolidayItemStyles} from '../BankHolidayItem.types';

export const useStyles = (): IBankHolidayItemStyles => {
  return StyleSheet.create({
    container: {
      padding: 20,
    },
  });
};
