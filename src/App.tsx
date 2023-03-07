import React, {ReactElement} from 'react';
import {SafeAreaView} from 'react-native';
import {Provider} from 'react-redux';

import {store} from './store';
import {BankHolidaysTemplate} from './ui/templates';

export const App = (): ReactElement => {
  const list = [
    {title: {text: 'One'}, date: {text: 'Today'}},
    {title: {text: 'Two'}, date: {text: 'Tomorrow'}},
  ];
  return (
    <Provider store={store}>
      <SafeAreaView>
        <BankHolidaysTemplate bankHolidays={{list}} />
      </SafeAreaView>
    </Provider>
  );
};
