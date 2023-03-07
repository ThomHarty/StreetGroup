import React, {ReactElement} from 'react';
import {Provider} from 'react-redux';

import {store} from './store';
import {BankHolidays} from './pages';

export const App = (): ReactElement => {
  return (
    <Provider store={store}>
      <BankHolidays />
    </Provider>
  );
};
