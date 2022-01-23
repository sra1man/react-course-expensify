import { start } from "live-server";
import { createStore,combineReducers } from "redux";
import uuid from 'uuid';

const addExpense = ({desc='',note='',amount=0,createdAt=0}) =>({
    type:'ADD_EXPENSE',
    expense:{
        id:uuid(),
        desc,
        note,
        amount,
        createdAt
    }
});

const removeExpense = ({id}) =>({
    type:'REMOVE_EXPENSE',
    expense:{
        id
    }
});

const editExpense = (id,updates) =>({
    type:'EDIT_EXPENSE',
    id,
    updates
});

const setTextFilter = (text='') =>({
    type:'SET_FILTER',
    text
});

const sortByAmount = () =>({
    type:'SORT_AMOUNT',
    sort:'amount'
});

const sortByDate = () =>({
    type:'SORT_DATE',
    sort:'date'
});

const setStartDate = (startDate=undefined) =>({
    type:'SET_START_DATE',
    startDate
});

const setEndDate = (endDate=undefined) =>({
    type:'SET_END_DATE',
    endDate
});

const expenseReducerDefault =[]
const expenseReducer = (state=expenseReducerDefault,action) => {
    switch(action.type){
        case 'ADD_EXPENSE':
             return[...state,
             action.expense];
        case 'REMOVE_EXPENSE':
                return state.filter(({id}) => id !== action.expense.id);
        case 'EDIT_EXPENSE':
                return state.map((expense) => {
                    if(expense.id === action.id){
                        return{
                            ...expense,
                            ...action.updates
                        };
                    }else{
                        return expense;
                    };
                });
        default:
            return state;
    }
};

const filterReducerDefault =[{
    text:'Item',
    sortBy:'date',
    startDate:undefined,
    endDate:undefined
}]
const filterReducer = (state=filterReducerDefault,action) => {
    switch(action.type){
        case 'SET_FILTER':
            return{
                ...state,
                text:action.text
            };
        case 'SORT_AMOUNT':
            return{
                ...state,
                sort:action.sort
            };
        case 'SORT_DATE':
            return{
                ...state,
                sort:action.sort
            };

        case 'SET_END_DATE':
            return{
                ...state,
                endDate:action.endDate
            };

        case 'SET_START_DATE':
        return{
            ...state,
            startDate:action.startDate
        };
        default:
            return state;
    }
};

const visibleExpenses = (expenses,{text,sortBy,startDate,endDate}) => {
    return expenses.filter((expense) => {
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate
        const textMatch = expense.desc.toLowerCase().includes(text.toLowerCase());
        return startDateMatch && textMatch
    }).sort((a,b) => {
        if(sort='date'){
            return a.createdAt > b.createdAt ? 1:-1
        }
    });
}

const store = createStore(
    combineReducers({
        expenses:expenseReducer,
        filters:filterReducer
    })
);
store.subscribe( () => {
    console.log(store.getState());
});
const removeExpenseOne = store.dispatch(addExpense({desc:'rent',amount:100}));
const removeExpenseTwo = store.dispatch(addExpense({desc:'coffee',amount:2}));

store.dispatch(removeExpense({id:removeExpenseOne.expense.id}));
store.dispatch(editExpense(removeExpenseTwo.expense.id,{amount:5}));
store.dispatch(setTextFilter('rent'));
store.dispatch(sortByAmount());
store.dispatch(sortByDate());

store.dispatch(setStartDate(125));
store.dispatch(setStartDate());
store.dispatch(setEndDate(1250));

const demoState = {
    expenses:[{
        id:'newItem',
        desc:'Test Item to test',
        note:'This was the final test case',
        amount:54000,
        createdAt:0
    }],
    filters:{
        text:'rent',
        sortBy: 'amount',
        startDate:undefined,
        endDate:undefined
    }
}

