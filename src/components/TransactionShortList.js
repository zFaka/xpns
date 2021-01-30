import React from 'react';
import { useSelector } from 'react-redux'
import {Link} from 'react-router-dom';

export const TransactionShortList = () => {

  const {transactions} = useSelector(state=>state.tr);
  //const tr = transactions.slice(Math.max(transactions.length - 10, 0))
  const tr = transactions.slice(Math.max(transactions.length - 3, 0))

  return (
    <Link to="/tr">
      <ul style={{listStyleType:'none'}}>
        {
          tr.map((tr, index) => {
            const {amount, concept, date, trType} = tr;
            return(
              <li key={`${tr}${index}`}>
                {trType} {amount} {concept} {date} 
              </li>
            )
          })
        }
      </ul>
    </Link>
  )
}
