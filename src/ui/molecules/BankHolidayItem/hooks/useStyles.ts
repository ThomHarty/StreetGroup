import {StyleSheet} from 'react-native';
import {COLORS} from '../../../../theme/colors';

import {IBankHolidayItemStyles} from '../BankHolidayItem.types';

export const useStyles = (): IBankHolidayItemStyles => {
  return StyleSheet.create({
    container: {
      padding: 20,
      borderWidth: 1,
      borderRadius: 10,
      borderColor: COLORS.GREY,
      backgroundColor: COLORS.GREY,
      marginBottom: 20,
    },
    titleContainer: {
      marginBottom: 5,
    },
    textContainer: {
      marginTop: 5,
    },
  });
};
