import {StyleSheet} from 'react-native';

import {IBankHolidaysListStyles} from './BankHolidaysList.types';

export const useStyles = (): IBankHolidaysListStyles => {
  return StyleSheet.create({
    container: {
      padding: 20,
    },
  });
};
