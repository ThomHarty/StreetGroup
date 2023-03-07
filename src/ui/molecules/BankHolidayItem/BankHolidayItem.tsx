import React, {memo, ReactElement} from 'react';
import {View} from 'react-native';

import {Typography} from '../../atoms';
import {useStyles} from './useStyles';
import {IBankHolidayItemProps} from './BankHolidayItem.types';

export const BankHolidayItem = memo(
  ({title, date}: IBankHolidayItemProps): ReactElement => {
    const styles = useStyles();
    return (
      <View style={styles.container}>
        <Typography {...title} />
        <Typography {...date} />
      </View>
    );
  },
);
