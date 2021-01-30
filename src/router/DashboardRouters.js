import React from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import {TransactionCompleteList} from '../components/TransactionCompleteList';

const DashboardRouters = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/tr" component={TransactionCompleteList}/>
        <Redirect to='/'/>
      </Switch>
    </div>
  )}

export default DashboardRouters;
