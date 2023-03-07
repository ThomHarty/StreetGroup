import React, {ReactElement} from 'react';

import {
  BankHolidaysTemplate,
  IBankHolidaysTemplateProps,
} from '../../ui/templates';

export const BankHolidays = (): ReactElement => {
  const props: IBankHolidaysTemplateProps = {
    bankHolidays: {
      list: [
        {
          title: {text: 'One'},
          date: {text: 'Today'},
          notes: {text: 'First'},
          bunting: false,
        },
        {
          title: {text: 'Two'},
          date: {text: 'Tomorrow'},
          notes: {text: 'Second'},
          bunting: true,
        },
      ],
    },
  };

  return <BankHolidaysTemplate {...props} />;
};
