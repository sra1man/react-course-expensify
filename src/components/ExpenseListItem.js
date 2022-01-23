import React from 'react';
import { Link } from 'react-router-dom';

const ExpenseListItem = ({dispatch, id, desc,amount}) => (
  <div>
    <Link to={`editExpense/${id}`}>
      <h3>{desc}</h3>
    </Link>
    <h3>{amount}</h3>
  </div>  
);


export default ExpenseListItem;
