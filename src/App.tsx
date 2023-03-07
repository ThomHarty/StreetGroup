import React, {ReactElement} from 'react';
import {SafeAreaView} from 'react-native';
import {Provider} from 'react-redux';

import {store} from './store';
import {BankHolidayItem} from './ui/molecules';

export const App = (): ReactElement => {
  return (
    <Provider store={store}>
      <SafeAreaView>
        <BankHolidayItem title={{text: 'Title'}} date={{text: 'Date'}} />
      </SafeAreaView>
    </Provider>
  );
};
