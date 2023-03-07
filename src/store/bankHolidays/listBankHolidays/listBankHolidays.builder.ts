import {ActionReducerMapBuilder, PayloadAction} from '@reduxjs/toolkit';
import moment from 'moment';
import _ from 'lodash';

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

      const bankHolidays = _.chain(action.payload)
        .flatMap('events')
        .filter(event => moment(event.date).isBetween(now, sixMonths))
        .uniqBy(event => event.title + event.date)
        .sortBy(event => event.date)
        .take(5)
        .value();

      state.bankHolidays = bankHolidays;
    },
  );

  return builder;
};
