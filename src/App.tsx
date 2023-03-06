import React, {ReactElement} from 'react';
import {SafeAreaView} from 'react-native';
import {Button, Typography} from './ui/atoms';

export const App = (): ReactElement => {
  return (
    <SafeAreaView>
      <Typography text="title" />
      <Button title="button" onPress={() => {}} />
    </SafeAreaView>
  );
};
