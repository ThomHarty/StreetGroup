import React, {ReactElement} from 'react';
import {View} from 'react-native';
import {BankHolidaysList} from '../../organisms';

import {useStyles} from './hooks';
import {IBankHolidaysTemplateProps} from './BankHolidaysTemplate.types';

export const BankHolidaysTemplate = ({
  bankHolidays,
}: IBankHolidaysTemplateProps): ReactElement => {
  const styles = useStyles();
  return (
    <View style={styles.container}>
      <BankHolidaysList {...bankHolidays} />
    </View>
  );
};
