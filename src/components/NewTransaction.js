import React from 'react';
import {useForm} from '../hooks/useForm';
import { useDispatch} from 'react-redux'
import {trAddNew, trUpdateBalance} from '../actions/tr';
import '../index.css' ;

export const NewTransaction = () => {

  const dispatch = useDispatch();
  const [formValues, handleInputChange, reset] = useForm({
    trType:'', 
    amount:'', 
    concept:'', 
    date:'', 
    id:''
  });
  const {amount, concept, date} = formValues;



  const handleAddTransaction = (e) => {
    e.preventDefault();
    if ((amount >= 0) && amount !== '' && concept !== '' && date !== '') {
      formValues.trType = 'income'
      formValues.id = `income${amount}${concept}${date}`
      dispatch(trAddNew(formValues))
      dispatch(trUpdateBalance(amount))
    } 
    else if ((amount < 0) && amount !== '' && concept !== '' && date !== '') {
      formValues.trType = 'expense' 
      formValues.id = `expense${amount}${concept}${date}`
      dispatch(trAddNew(formValues))
      dispatch(trUpdateBalance(amount))
    }
    else {
      alert('Complete the form correctly')}
    reset()
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
        autoComplete="off"
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
