import React, {memo, ReactElement} from 'react';
import {View} from 'react-native';

import {BankHolidayItem} from '../../molecules';
import {useStyles} from './hooks';
import {IBankHolidaysListProps} from './BankHolidaysList.types';

export const BankHolidaysList = memo(
  ({list}: IBankHolidaysListProps): ReactElement => {
    const styles = useStyles();
    return (
      <View style={styles.container}>
        {list.map((item, i) => {
          return (
            <View key={i}>
              <BankHolidayItem {...item} />
            </View>
          );
        })}
      </View>
    );
  },
);
