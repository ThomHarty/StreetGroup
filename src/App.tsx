import React, {ReactElement, useState} from 'react';
import {Keyboard, Pressable, SafeAreaView} from 'react-native';
import {Button, Input, Typography} from './ui/atoms';

export const App = (): ReactElement => {
  const [value, setValue] = useState('');
  return (
    <SafeAreaView>
      <Pressable onPress={() => Keyboard.dismiss()}>
        <Typography text="title" />
        <Input value={value} onChangeText={val => setValue(val)} />
        <Button title="button" onPress={() => {}} />
      </Pressable>
    </SafeAreaView>
  );
};
