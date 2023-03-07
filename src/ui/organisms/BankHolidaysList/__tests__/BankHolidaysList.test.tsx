import React from 'react';
import {render} from '@testing-library/react-native';

import {BankHolidaysList} from '../BankHolidaysList';
import {IBankHolidaysListProps} from '../BankHolidaysList.types';

describe('BankHolidaysList Organism', () => {
  const props: IBankHolidaysListProps = {
    list: [
      {title: {text: 'One'}, date: {text: 'Today'}},
      {title: {text: 'Two'}, date: {text: 'Tomorrow'}},
    ],
  };

  it('renders the title', () => {
    const {getByText} = render(<BankHolidaysList {...props} />);
    expect(getByText('One')).toBeTruthy();
    expect(getByText('Two')).toBeTruthy();
  });

  it('renders the date', () => {
    const {getByText} = render(<BankHolidaysList {...props} />);
    expect(getByText('Today')).toBeTruthy();
    expect(getByText('Tomorrow')).toBeTruthy();
  });
});
