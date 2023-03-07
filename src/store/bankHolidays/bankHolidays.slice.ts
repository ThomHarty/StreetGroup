import {createSlice} from '@reduxjs/toolkit';

import {initialState} from './bankHolidays.state';

export const bankHolidaysSlice = createSlice({
  name: 'bankHolidays',
  initialState,
  reducers: {},
  extraReducers: builder => {
    console.log(builder);
  },
});

export const bankHolidaysReducer = bankHolidaysSlice.reducer;
