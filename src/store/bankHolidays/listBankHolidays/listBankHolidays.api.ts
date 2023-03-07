import {IListBankHolidaysResponse} from './listBankHolidays.types';

export const fetchListBankHolidays =
  async (): Promise<IListBankHolidaysResponse> => {
    try {
      const response = await fetch('https://www.gov.uk/bank-holidays.json');
      return await response.json();
    } catch (error) {
      const message = `An error has occured: ${error}`;
      throw new Error(message);
    }
  };
