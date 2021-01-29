import React from 'react';
import {Balance} from './components/Balance';
import {Transaction} from './components/Transaction';
import {TransactionList} from './components/TransactionList';

export const XpnsApp = () => {
  return (
    <>
      <Balance/>
      <TransactionList/>
      <Transaction/>
    </>
  )}
