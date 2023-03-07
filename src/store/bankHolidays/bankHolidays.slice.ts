import {createSlice} from '@reduxjs/toolkit';

import {initialState} from './bankHolidays.state';
import {listBankHolidaysBuilder} from './listBankHolidays/listBankHolidays.builder';

export const bankHolidaysSlice = createSlice({
  name: 'bankHolidays',
  initialState,
  reducers: {},
  extraReducers: builder => {
    listBankHolidaysBuilder(builder);
  },
});

export const bankHolidaysReducer = bankHolidaysSlice.reducer;
