import React, {memo, ReactElement} from 'react';
import {View} from 'react-native';

import {Typography} from '../../atoms';
import {useStyles} from './hooks';
import {IBankHolidayItemProps} from './BankHolidayItem.types';

export const BankHolidayItem = memo(
  ({title, date, notes, bunting}: IBankHolidayItemProps): ReactElement => {
    const styles = useStyles();
    return (
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Typography {...title} size="subHeading" />
        </View>
        <View style={styles.textContainer}>
          <Typography {...date} />
        </View>
        {notes.text && (
          <View style={styles.textContainer}>
            <Typography {...notes} />
          </View>
        )}
        {bunting && (
          <View style={styles.textContainer}>
            <Typography text="Bunting required" size="small" />
          </View>
        )}
      </View>
    );
  },
);
