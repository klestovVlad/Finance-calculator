import {CategoryType} from '../categories/types';

export enum FinanceEntryType {
  SPENDING = 'spending',
  INCOME = 'income',
}

export type EntryType = {
  amount: number;
  entryType: FinanceEntryType;
  category: CategoryType;
};

export type FinanceStateType = {
  entry: {
    [yearAndMonth: string]: {
      [yearAndMonthAndDay: string]: {
        [id: string]: EntryType;
      };
    };
  };
};

export type EntryPayload = {
  yearAndMonth: string;
  yearAndMonthAndDay: string;
  category: CategoryType;
  amount: number;
  entryType: FinanceEntryType;
};

export type IncomePayload = {
  yearAndMonth: string;
  amount: number;
};

export type DeleteEntryPayload = {
  yearAndMonth: string;
  yearAndMonthAndDay: string;
  transactionId: string;
};

export type EditEntryPayload = {
  newAmount: number;
  yearAndMonth: string;
  yearAndMonthAndDay: string;
  transactionId: string;
};
