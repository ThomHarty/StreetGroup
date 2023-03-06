import React, {memo, ReactElement, useState} from 'react';
import {TextInput} from 'react-native';
import Animated from 'react-native-reanimated';

import {COLORS} from '../../../theme/colors';
import {IInputProps} from './Input.types';
import {useColors} from './useColors';
import {useStyles} from './useStyles';

export const Input = memo(
  ({label, placeholder, value, onChangeText}: IInputProps): ReactElement => {
    const [isFocused, setIsFocused] = useState(false);
    const styles = useStyles();
    const animations = useColors({isFocused});

    return (
      <>
        {label && (
          <Animated.Text style={[styles.label, animations.label]}>
            {label}
          </Animated.Text>
        )}
        <Animated.View style={[styles.outer, animations.outer]}>
          <Animated.View style={[styles.container, animations.container]}>
            <TextInput
              value={value}
              onChangeText={onChangeText}
              style={styles.input}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              placeholder={placeholder}
              placeholderTextColor={COLORS.GREY}
            />
          </Animated.View>
        </Animated.View>
      </>
    );
  },
);
