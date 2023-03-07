import React, {memo, ReactElement, useState} from 'react';
import {Pressable, Text} from 'react-native';
import Animated from 'react-native-reanimated';

import {IButtonProps} from './Button.types';
import {useColors, useStyles} from './hooks';

export const Button = memo(
  ({title, onPress, disabled}: IButtonProps): ReactElement => {
    const [isPressing, setIsPressing] = useState(false);

    const styles = useStyles();
    const colors = useColors({isPressing});

    return (
      <Animated.View style={[styles.outer, colors.outer]}>
        <Pressable
          disabled={disabled}
          onPress={onPress}
          onPressIn={() => setIsPressing(true)}
          onPressOut={() => setIsPressing(false)}>
          <Animated.View style={[styles.container, colors.container]}>
            <Text style={styles.title}>{title}</Text>
          </Animated.View>
        </Pressable>
      </Animated.View>
    );
  },
);
