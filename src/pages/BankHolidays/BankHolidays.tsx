import React, {ReactElement} from 'react';

import {
  BankHolidaysTemplate,
  IBankHolidaysTemplateProps,
} from '../../ui/templates';

export const BankHolidays = (): ReactElement => {
  const props: IBankHolidaysTemplateProps = {
    bankHolidays: {
      list: [
        {title: {text: 'One'}, date: {text: 'Today'}},
        {title: {text: 'Two'}, date: {text: 'Tomorrow'}},
      ],
    },
  };

  return <BankHolidaysTemplate {...props} />;
};
