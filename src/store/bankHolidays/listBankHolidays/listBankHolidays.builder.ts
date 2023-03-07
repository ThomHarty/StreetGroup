import {ActionReducerMapBuilder, PayloadAction} from '@reduxjs/toolkit';

import {IBankHolidayState} from '../bankHolidays.types';
import {listBankHolidays} from './listBankHolidays.thunk';
import {IListBankHolidaysResponse} from './listBankHolidays.types';

export const listBankHolidaysBuilder = (
  builder: ActionReducerMapBuilder<IBankHolidayState>,
) => {
  builder.addCase(listBankHolidays.pending, state => {
    state.loading = true;
  });
  builder.addCase(listBankHolidays.rejected, state => {
    state.loading = false;
  });
  builder.addCase(
    listBankHolidays.fulfilled,
    (state, action: PayloadAction<IListBankHolidaysResponse>) => {
      state.loading = false;
      const bankHolidays = [
        ...action.payload['england-and-wales'].events,
        ...action.payload.scotland.events,
        ...action.payload['northern-ireland'].events,
      ];
      state.bankHolidays = bankHolidays;
    },
  );

  return builder;
};
