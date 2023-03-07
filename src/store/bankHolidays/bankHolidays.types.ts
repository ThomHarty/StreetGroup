export interface IBankHoliday {
  title: string;
  date: string;
  notes: string;
  bunting: boolean;
}

export interface IBankHolidayState {
  loading: boolean;
  bankHolidays: IBankHoliday[];
  current: IBankHoliday | null;
}
