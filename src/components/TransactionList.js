import React, {useState} from 'react';

export const TransactionList = () => {
  const [transactions, ] = useState([0]);
  return (
    <ul className="list">
      {transactions.map(transaction => (
        <h1>kdjwan</h1>
      ))}
    </ul>
  )
}
