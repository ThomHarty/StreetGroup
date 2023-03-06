import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';

import {Button} from '../Button';
import {IButtonProps} from '../Button.types';

describe('Button Atom', () => {
  const props: IButtonProps = {
    title: 'Submit',
    onPress: jest.fn(),
  };

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders the title prop', () => {
    const {getByText} = render(<Button {...props} />);
    expect(getByText(props.title)).toBeTruthy();
  });

  it('handles the onPress callback', () => {
    const {getByText} = render(<Button {...props} />);
    fireEvent.press(getByText(props.title));
    expect(props.onPress).toHaveBeenCalledTimes(1);
  });

  it('does not handle the onPress callback when disabled=true', () => {
    const {getByText} = render(<Button {...props} disabled />);
    fireEvent.press(getByText(props.title));
    expect(props.onPress).toHaveBeenCalledTimes(0);
  });
});
