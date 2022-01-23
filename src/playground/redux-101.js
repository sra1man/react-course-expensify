import { createStore } from "redux";

const increamentCount = ({increamentBy = 1} = {}) => ({
    type:'INCREMENT',
    increamentBy
});

const decreamentCount = ({decrementBy = 1} = {}) => ({
    type:'DECREMENT',
    decrementBy
});

const resetCount = () => ({
    type:'RESET'
});

const countReducer = (state = {count:0}, action) =>{
    switch(action.type){
        case 'INCREMENT':
            return {
                count:state.count+action.increamentBy
            };
        case 'DECREMENT':
            return {
                count:state.count-action.decrementBy
            };
        case 'RESET':
                return {
                    count:0
                };    
        default :{
            return state;
        }
    }
};

const store = createStore(countReducer);

store.subscribe( () => {
    console.log(store.getState());
});

store.dispatch(increamentCount({increamentBy:5}));

store.dispatch(increamentCount());

store.dispatch(resetCount());

store.dispatch(decreamentCount({decreamentBy:5}));

store.dispatch(decreamentCount());
