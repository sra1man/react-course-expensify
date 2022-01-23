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


const jsx = (
    <Provider store={store}>
        <AppRouter/>
    </Provider>
);


ReactDOM.render(jsx,document.getElementById("app"))