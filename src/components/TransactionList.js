import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import {trDelete} from '../actions/tr';

export const TransactionList = () => {


  const dispatch = useDispatch();
  const {transactions} = useSelector(state=>state.tr);
  const tr = transactions.slice(Math.max(transactions.length - 10, 0))

  const handleDelete = (e) => {
    e.preventDefault();
    dispatch(trDelete());
  };


  return (
    <ul>
      {
        tr.map((tr, index) => {
          return(
            <li key={`${tr}${index}`}>
              {tr.trType} 

              <input
                type='text'
                value={tr.amount}
              />
              <input
                type='text'
                value={tr.concept}
              />
              <input
                type='date'
                value={tr.date}
              />

              <button
                onClick={handleDelete}
              >
                x
              </button>
            </li>
          )
        })
      }
    </ul>
  )
}
