import React from 'react';
import {Balance} from './components/Balance';
import {NewTransaction} from './components/NewTransaction';
import {TransactionList} from './components/TransactionList';
import { Provider } from 'react-redux';
import { store } from './store/store';

export const XpnsApp = () => {
  return (
    <Provider store={ store }>
      <Balance/>
      <TransactionList/>
      <NewTransaction/>
    </Provider>
  )}
