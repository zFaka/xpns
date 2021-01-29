import React from 'react';
import {useForm} from '../hooks/useForm';
import { useDispatch } from 'react-redux'
import {trAddNew, trUpdateBalance} from '../actions/tr';
import '../index.css' ;

export const NewTransaction = () => {

  const dispatch = useDispatch();
  const [formValues, handleInputChange] = useForm({
    trType:'', 
    amount:'', 
    concept:'', 
    date:''
  });
  const {amount, concept, date} = formValues;



  const handleAddTransaction = (e) => {
    e.preventDefault();


    if ((amount >= 0) && amount !== '' && concept !== '' && date !== '') {
      formValues.trType = 'income'
      dispatch(trAddNew(formValues))
      dispatch(trUpdateBalance(amount))
    } 
    else if ((amount < 0) && amount !== '' && concept !== '' && date !== '') {
      formValues.trType = 'expense' 
      dispatch(trAddNew(formValues))
      dispatch(trUpdateBalance(amount))
    }

    else {
      alert('Complete the form correctly')}
  };



  return (
    <form onSubmit={handleAddTransaction}>

      <p>
        Use 
        (<strong style={{fontSize:'20px'}}> - </strong>)
        for expense
      </p>

      <input 
        type="tel"
        placeholder="Amount"
        name="amount"
        value={ amount }
        onChange={ handleInputChange }
      />


      <input 
        type="text"
        placeholder="Concept"
        autoComplete="off"
        name="concept"
        value={concept}
        onChange={ handleInputChange }
      />


      <input 
        type="date"
        placeholder="Date"
        name="date"
        value={ date }
        onChange={ handleInputChange }
      />


      <input 
        type="submit"
        value="Add" 
      />
    </form>
  )}
