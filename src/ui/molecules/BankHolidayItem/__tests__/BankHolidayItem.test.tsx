import React from 'react';
import {render} from '@testing-library/react-native';

import {BankHolidayItem} from '../BankHolidayItem';
import {IBankHolidayItemProps} from '../BankHolidayItem.types';

describe('BankHolidayItem Molecule', () => {
  const props: IBankHolidayItemProps = {
    title: {text: 'Title'},
    date: {text: 'Date'},
    notes: {text: 'Notes'},
    bunting: false,
  };

  it('renders the title', () => {
    const {getByText} = render(<BankHolidayItem {...props} />);
    expect(getByText(props.title.text)).toBeTruthy();
  });

  it('renders the date', () => {
    const {getByText} = render(<BankHolidayItem {...props} />);
    expect(getByText(props.date.text)).toBeTruthy();
  });

  it('renders the notes', () => {
    const {getByText} = render(<BankHolidayItem {...props} />);
    expect(getByText(props.notes.text)).toBeTruthy();
  });

  it("does not render 'Bunting required' when bunting=false", () => {
    const {queryByText} = render(<BankHolidayItem {...props} />);
    expect(queryByText('Bunting required')).toBeFalsy();
  });

  it("renders 'Bunting required' when bunting=true", () => {
    const {getByText} = render(<BankHolidayItem {...props} bunting />);
    expect(getByText('Bunting required')).toBeTruthy();
  });
});
