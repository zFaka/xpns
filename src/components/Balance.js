import React from 'react';
import { useSelector } from 'react-redux'
import {Link} from 'react-router-dom';

export const Balance = () => {

  const { balance } = useSelector( state => state.tr );

  return (
    <>
      <Link to='/login'>Exit</Link>

      <h1>$ {balance} </h1>
    </>
  )}
