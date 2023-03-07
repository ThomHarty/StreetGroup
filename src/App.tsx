import React, {ReactElement} from 'react';
import {SafeAreaView} from 'react-native';
import {Provider} from 'react-redux';

import {store} from './store';
import {BankHolidaysList} from './ui/organisms';

export const App = (): ReactElement => {
  const list = [
    {title: {text: 'One'}, date: {text: 'Today'}},
    {title: {text: 'Two'}, date: {text: 'Tomorrow'}},
  ];
  return (
    <Provider store={store}>
      <SafeAreaView>
        <BankHolidaysList list={list} />
      </SafeAreaView>
    </Provider>
  );
};
