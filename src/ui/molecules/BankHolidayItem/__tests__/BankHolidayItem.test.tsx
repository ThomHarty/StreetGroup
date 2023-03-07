import React from 'react';
import {render} from '@testing-library/react-native';

import {BankHolidayItem} from '../BankHolidayItem';
import {IBankHolidayItemProps} from '../BankHolidayItem.types';

describe('BankHolidayItem Molecule', () => {
  const props: IBankHolidayItemProps = {
    title: {text: 'Title'},
    date: {text: 'Date'},
  };

  it('renders the title', () => {
    const {getByText} = render(<BankHolidayItem {...props} />);
    expect(getByText('Title')).toBeTruthy();
  });

  it('renders the date', () => {
    const {getByText} = render(<BankHolidayItem {...props} />);
    expect(getByText('Date')).toBeTruthy();
  });
});
