import {IBankHoliday} from '../bankHolidays.types';

export interface IListBankHolidaysResponse {
  'england-and-wales': {
    division: 'england-and-wales';
    events: IBankHoliday[];
  };
  scotland: {
    division: 'scotland';
    events: IBankHoliday[];
  };
  'northern-ireland': {
    division: 'northern-ireland';
    events: IBankHoliday[];
  };
}
