import React from 'react';
import ExpenseForm from './ExpenseForm';
import { connect } from 'react-redux';
import {addExpense} from '../actions/expenses';


const createExpensePage = (props) => (
    <div>
        <h1>Add Expense</h1>
        <ExpenseForm 
            onSubmit = {(expense) => {
                props.dispatch(addExpense(expense));
                props.history.push('/');
            }}/>
    </div>
);

export default connect()(createExpensePage);