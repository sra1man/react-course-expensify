import moment from "moment";

const filterReducerDefault ={
    text:'',
    sortBy:'date',
    startDate:moment().startOf('month'),
    endDate:moment().endOf('month')
};
export default  (state=filterReducerDefault,action) => {
    switch(action.type){
        case 'SET_FILTER':
            return{
                ...state,
                text:action.text
            };
        case 'SORT_AMOUNT':
            return{
                ...state,
                sortBy:action.sort
            };
        case 'SORT_DATE':
            return{
                ...state,
                sortBy:action.sort
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