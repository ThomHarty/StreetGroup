import React from 'react';
import {render} from '@testing-library/react-native';

import {BankHolidaysTemplate} from '../BankHolidaysTemplate';
import {IBankHolidaysTemplateProps} from '../BankHolidaysTemplate.types';

describe('BankHolidays Template', () => {
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

  it('renders the title', () => {
    const {getByText} = render(<BankHolidaysTemplate {...props} />);
    expect(getByText(props.bankHolidays.list[0].title.text)).toBeTruthy();
    expect(getByText(props.bankHolidays.list[1].title.text)).toBeTruthy();
  });

  it('renders the date', () => {
    const {getByText} = render(<BankHolidaysTemplate {...props} />);
    expect(getByText(props.bankHolidays.list[0].title.text)).toBeTruthy();
    expect(getByText(props.bankHolidays.list[1].title.text)).toBeTruthy();
  });

  it('renders the notes', () => {
    const {getByText} = render(<BankHolidaysTemplate {...props} />);
    expect(getByText(props.bankHolidays.list[0].notes.text)).toBeTruthy();
    expect(getByText(props.bankHolidays.list[1].notes.text)).toBeTruthy();
  });

  it("renders 'Bunting required' when bunting=true", () => {
    const {getByText} = render(<BankHolidaysTemplate {...props} />);
    expect(getByText('Bunting required')).toBeTruthy();
  });
});
