import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';

import {Input} from '../Input';
import {IInputProps} from '../Input.types';

describe('Input Atom', () => {
  const props: IInputProps = {
    label: 'Label',
    value: 'Value',
    onChangeText: jest.fn(),
  };

  it('renders the label prop', () => {
    const {getByText} = render(<Input {...props} />);
    expect(getByText(props.label!)).toBeTruthy();
  });

  it('renders the value prop', () => {
    const {getByDisplayValue} = render(<Input {...props} />);
    expect(getByDisplayValue(props.value)).toBeTruthy();
  });

  it('handles the onChangeText callback', () => {
    const {getByDisplayValue} = render(<Input {...props} />);
    fireEvent.changeText(getByDisplayValue(props.value));
    expect(props.onChangeText).toHaveBeenCalledTimes(1);
  });
});
