import React, {ReactElement} from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import {BankHolidaysList} from '../../organisms';

import {useStyles} from './hooks';
import {IBankHolidaysTemplateProps} from './BankHolidaysTemplate.types';

export const BankHolidaysTemplate = ({
  bankHolidays,
}: IBankHolidaysTemplateProps): ReactElement => {
  const styles = useStyles();
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <BankHolidaysList {...bankHolidays} />
      </ScrollView>
    </SafeAreaView>
  );
};
