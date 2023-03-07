import {IBankHolidayState} from './bankHolidays.types';

export const initialState: IBankHolidayState = {
  loading: false,
  bankHolidays: [],
  current: null,
};
