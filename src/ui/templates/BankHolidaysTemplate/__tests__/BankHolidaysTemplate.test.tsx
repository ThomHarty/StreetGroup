import React from 'react';
import {render} from '@testing-library/react-native';

import {BankHolidaysTemplate} from '../BankHolidaysTemplate';
import {IBankHolidaysTemplateProps} from '../BankHolidaysTemplate.types';

describe('BankHolidays Template', () => {
  const props: IBankHolidaysTemplateProps = {
    bankHolidays: {
      list: [
        {title: {text: 'One'}, date: {text: 'Today'}},
        {title: {text: 'Two'}, date: {text: 'Tomorrow'}},
      ],
    },
  };

  it('renders the title', () => {
    const {getByText} = render(<BankHolidaysTemplate {...props} />);
    expect(getByText('One')).toBeTruthy();
    expect(getByText('Two')).toBeTruthy();
  });

  it('renders the date', () => {
    const {getByText} = render(<BankHolidaysTemplate {...props} />);
    expect(getByText('Today')).toBeTruthy();
    expect(getByText('Tomorrow')).toBeTruthy();
  });
});
