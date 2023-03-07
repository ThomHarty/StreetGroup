import {useEffect} from 'react';
import {IBankHolidaysTemplateProps} from '../../../ui/templates';

import {listBankHolidays} from '../../../store/bankHolidays';
import {useAppDispatch, useAppSelector} from '../../../store/hooks';

export const useBankHolidays =
  (): IBankHolidaysTemplateProps['bankHolidays'] => {
    const dispatch = useAppDispatch();
    const {bankHolidays: holidays} = useAppSelector(
      state => state.bankHolidays,
    );

    useEffect(() => {
      dispatch(listBankHolidays());
    }, [dispatch]);

    const list = holidays.map(holiday => {
      return {
        title: {text: holiday.title},
        date: {text: holiday.date},
        notes: {text: holiday.notes},
        bunting: holiday.bunting,
      };
    });

    const bankHolidays: IBankHolidaysTemplateProps['bankHolidays'] = {
      list,
    };

    return bankHolidays;
  };
