import {StyleSheet} from 'react-native';

import {IBankHolidaysTemplateStyles} from './BankHolidaysTemplate.types';

export const useStyles = (): IBankHolidaysTemplateStyles => {
  return StyleSheet.create({
    container: {
      padding: 20,
    },
  });
};
