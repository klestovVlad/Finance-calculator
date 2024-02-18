import React, {useState} from 'react';
import {DefaultLayout} from 'src/shared/layouts/default-layout/default-layout';
import {View} from 'react-native';
import {EmptyIncome} from '../components/empty-income/empty-income';
import {AddExpenseModal} from '../components/add-expense-modal/add-expense-modal';
import {useSelector} from 'react-redux';
import {selectors} from 'src/store';
import {getCurrentDate} from 'src/shared/utils/getCurrentDate';
import {MonthTransactions} from '../components/month-transactions/month-transactions';
import {HeaderBlock} from '../components/header-block/header-block';

export const MainScreen = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const openModal = () => {
    setIsModalVisible(true);
  };

  const closeModal = () => {
    setIsModalVisible(false);
  };

  const {yearAndMonth} = getCurrentDate();

  const amountsByCurrentMonth = useSelector(
    selectors.finance.selectSpendingByMonth(yearAndMonth),
  );

  const isSpendingEmpty = Object.keys(amountsByCurrentMonth || {}).length === 0;

  return (
    <DefaultLayout>
      <View>
        {isSpendingEmpty ? (
          <>
            <HeaderBlock />
            <EmptyIncome addExpenseModal={openModal} />
          </>
        ) : (
          <MonthTransactions addExpenseModal={openModal} />
        )}
        <AddExpenseModal isVisible={isModalVisible} onClose={closeModal} />
      </View>
    </DefaultLayout>
  );
};
