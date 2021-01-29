import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { startLogout } from '../actions/auth';

export const Balance = () => {


  const dispatch = useDispatch();
  const { balance } = useSelector( state => state.tr );

  const handleLogout = () => {
    dispatch(startLogout());
  }


  return (
    <>
      <button onClick={ handleLogout }>
        <span>Exit</span>
      </button>

      <h1>$ {balance} </h1>
    </>
  )}
