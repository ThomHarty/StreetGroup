import React, {ReactElement} from 'react';

import {
  BankHolidaysTemplate,
  IBankHolidaysTemplateProps,
} from '../../ui/templates';
import {useBankHolidays} from './hooks';

export const BankHolidays = (): ReactElement => {
  const bankHolidays = useBankHolidays();

  const props: IBankHolidaysTemplateProps = {
    bankHolidays,
  };

  return <BankHolidaysTemplate {...props} />;
};
