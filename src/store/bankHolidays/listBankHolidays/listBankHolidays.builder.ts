import {ActionReducerMapBuilder, PayloadAction} from '@reduxjs/toolkit';
import moment from 'moment';

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

      const now = moment();
      const sixMonths = moment().add(6, 'months');

      const bankHolidays = [
        ...new Set([
          ...action.payload['england-and-wales'].events,
          ...action.payload.scotland.events,
          ...action.payload['northern-ireland'].events,
        ]),
      ]
        .filter(({date}) => {
          return moment(date).isBetween(now, sixMonths);
        })
        .slice(0, 5);

      state.bankHolidays = bankHolidays;
    },
  );

  return builder;
};
