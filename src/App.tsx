import React, {ReactElement} from 'react';
import {SafeAreaView} from 'react-native';
import {Provider} from 'react-redux';

import {store} from './store';
import {BankHolidays} from './pages';

export const App = (): ReactElement => {
  return (
    <Provider store={store}>
      <SafeAreaView>
        <BankHolidays />
      </SafeAreaView>
    </Provider>
  );
};
