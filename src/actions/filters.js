export const setTextFilter = (text='') =>({
    type:'SET_FILTER',
    text
});

export const sortByAmount = () =>({
    type:'SORT_AMOUNT',
    sort:'amount'
});

export const sortByDate = () =>({
    type:'SORT_DATE',
    sort:'date'
});

export const setStartDate = (startDate=undefined) =>({
    type:'SET_START_DATE',
    startDate
});

export const setEndDate = (endDate=undefined) =>({
    type:'SET_END_DATE',
    endDate
});