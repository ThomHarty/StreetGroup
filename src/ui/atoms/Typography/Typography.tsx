import React, {memo, ReactElement} from 'react';
import {Text} from 'react-native';

import {ITypographyProps} from './Typography.types';
import {useStyles} from './useStyles';

export const Typography = memo(
  ({text, size = 'paragraph'}: ITypographyProps): ReactElement => {
    const styles = useStyles({size});
    return <Text style={styles.text}>{text}</Text>;
  },
);
