import React from 'react';
import {Balance} from './Balance';
import {NewTransaction} from './NewTransaction';
import {TransactionShortList} from './TransactionShortList';

export const HomeScreen = () => {
  return (
    <>
      <Balance/>
      <TransactionShortList/>
      <NewTransaction/>
    </>
  )
}
