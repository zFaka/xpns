import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import {trDelete} from '../actions/tr';

export const TransactionCompleteList = () => {


  const dispatch = useDispatch();
  const {transactions:tr} = useSelector(state=>state.tr);

  const handleDelete = (e) => {
    dispatch(trDelete(e.target.value));
  };



  return (
    <ul>
      {
        tr.map((tr, index) => {
          const {amount, concept, date} = tr;
          return(
            <li key={`${tr}${index}`}>
              {tr.trType} 
                <input
                  type='text'
                  value={amount}
                />
                <input
                  type='text'
                  value={concept}
                />
                <input
                  type='date'
                  value={date}
                />

              <button
                value={tr.id}
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
