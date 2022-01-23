import React from 'react';
import { DateRangePicker } from 'react-dates';
import {connect} from 'react-redux';
import { setTextFilter,sortByDate,sortByAmount, setStartDate,setEndDate } from '../actions/filters';


class ExpenseListFilter extends React.Component{
    state ={
        calendarFocused : null
    };
    onDatesChange = ({startDate, endDate}) => {
        this.props.dispatch(setStartDate(startDate));
        this.props.dispatch(setEndDate(endDate));
    };
    onFocusChange = (calendarFocused) => {
        this.setState({calendarFocused});
    };
    render(){
        return (
            <div>
            <input type='text' 
                value={this.props.filters.text} onChange={(e) =>{
                this.props.dispatch(setTextFilter(e.target.value));
              }}></input>
              <select 
                value={this.props.filters.sort} 
                onChange={(e) =>{
                    console.log(e.target.value);
                    if('date' === e.target.value){
                        this.props.dispatch(sortByDate());
                    }else if('amount' === e.target.value){
                        this.props.dispatch(sortByAmount());
                    }
              }}>
                <option value='date'>Date</option>
                <option value='amount'>Amount</option>
              </select>
              <DateRangePicker
                startDate={this.props.filters.startDate}
                endDate={this.props.filters.endDate}
                onDatesChange={this.onDatesChange}
                showClearDates={true}
                focusedInput={this.state.calendarFocused}
                onFocusChange={this.onFocusChange}
                numberOfMonths={1}
                isOutsideRange={()=>false}
              />
        </div>
        );
    };
};

const mapStateToProps = (state) => {
    return {
        filters: state.filters
    };
};
 
export default connect(mapStateToProps)(ExpenseListFilter);