import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './Routers/AppRouter';
import configureStore from './stores/configureStore';
import {addExpense} from './actions/expenses';
import {setTextFilter} from './actions/filters';
import getVisibleExpenses  from './selectors/expenses';
import {Provider} from  'react-redux';
import 'normalize.css';
import './styles/styles.scss';

const store = configureStore();

store.dispatch(addExpense({desc:'Water Bill',amount:4000}));
store.dispatch(addExpense({desc:'Gas Bill',createdAt:100}));
store.dispatch(addExpense({desc:'Rent',amount:1095}));

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses,state.filters);
console.log(visibleExpenses);

const jsx = (
    <Provider store={store}>
        <AppRouter/>
    </Provider>
);


ReactDOM.render(jsx,document.getElementById("app"))