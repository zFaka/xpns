import React from 'react';

export const Transaction = () => {
  return (
    <form>


      <div style={{display:'flex', flexDirection:'column'}}>

        <div style={{display:'inline-flex'}}>

          <button>
            Income 
          </button>

          <button>
            Expense 
          </button>

        </div>


        <div style={{display:'inline-flex'}}>

          <input 
            style={{width:'90px'}}
            type="tel"
            placeholder="Amount"
          />


          <input 
            style={{width:'100px'}}
            type="text"
            placeholder="Concept"
            autoComplete="off"
          />


          <input 
            style={{width:'100px'}}
            url="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='22' viewBox='0 0 20 22'%3E%3Cg fill='none' fill-rule='evenodd' stroke='%23688EBB' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' transform='translate(1 1)'%3E%3Crect width='18' height='18' y='2' rx='2'/%3E%3Cpath d='M13 0L13 4M5 0L5 4M0 8L18 8'/%3E%3C/g%3E%3C/svg%3E"
            type="date"
            placeholder="Date"
          />

        </div>
      </div>
    </form>
  )}
