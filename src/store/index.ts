import {configureStore} from '@reduxjs/toolkit';

import {bankHolidaysReducer} from './bankHolidays/bankHolidays.slice';

export const store = configureStore({
  reducer: {
    bankHolidays: bankHolidaysReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
