import React from 'react';
import ExpenseList from './Expense-list';
import ExpenseListFilter from './ExpenseListFilter';

const ExpensifyDashboardPage = () => (
    <div>
        <ExpenseListFilter/>
        <ExpenseList/>
    </div>
);

export default ExpensifyDashboardPage;