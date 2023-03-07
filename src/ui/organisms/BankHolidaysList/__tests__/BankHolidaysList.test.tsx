import React from 'react';
import {render} from '@testing-library/react-native';

import {BankHolidaysList} from '../BankHolidaysList';
import {IBankHolidaysListProps} from '../BankHolidaysList.types';

describe('BankHolidaysList Organism', () => {
  const props: IBankHolidaysListProps = {
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
  };

  it('renders the title', () => {
    const {getByText} = render(<BankHolidaysList {...props} />);
    expect(getByText(props.list[0].title.text)).toBeTruthy();
    expect(getByText(props.list[1].title.text)).toBeTruthy();
  });

  it('renders the date', () => {
    const {getByText} = render(<BankHolidaysList {...props} />);
    expect(getByText(props.list[0].date.text)).toBeTruthy();
    expect(getByText(props.list[1].date.text)).toBeTruthy();
  });

  it('renders the notes', () => {
    const {getByText} = render(<BankHolidaysList {...props} />);
    expect(getByText(props.list[0].notes.text)).toBeTruthy();
    expect(getByText(props.list[1].notes.text)).toBeTruthy();
  });

  it("renders 'Bunting required' when bunting=true", () => {
    const {getByText} = render(<BankHolidaysList {...props} />);
    expect(getByText('Bunting required')).toBeTruthy();
  });
});
