import {createAsyncThunk} from '@reduxjs/toolkit';

import {fetchListBankHolidays} from './listBankHolidays.api';
import {IListBankHolidaysResponse} from './listBankHolidays.types';

export const listBankHolidays = createAsyncThunk(
  'bankHolidays/listBankHolidays',
  async (): Promise<IListBankHolidaysResponse> => {
    return await fetchListBankHolidays();
  },
);
