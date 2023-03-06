import React from 'react';
import {render} from '@testing-library/react-native';

import {Typography} from '../Typography';
import {ITypographyProps} from '../Typography.types';

describe('Typography Atom', () => {
  const props: ITypographyProps = {
    text: 'Lorem',
  };

  it('renders the text prop', () => {
    const {getByText} = render(<Typography {...props} />);
    expect(getByText(props.text)).toBeTruthy();
  });
});
