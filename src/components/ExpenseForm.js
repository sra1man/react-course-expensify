import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css'

const now = moment();
console.log(now.format('MMM Do, YYYY'));
export default class ExpenseForm extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
                description:props.expense ? props.expense.desc:'',
                note: props.exepense ? props.expense.note:'',
                amount:props.expense ? (props.expense.amount /100).toString():'',
                createdAt:props.expense? moment(props.expense.createdAt):moment(),
                calendarFocused:false,
                error:''
        }
    }
    onChangeDescription = (e) =>{
        const description = e.target.value;
        this.setState(() => ({description}));
    };
    onChangeTextArea = (e) =>{
        const note = e.target.value;
        this.setState(() => ({note}));
    };
    onChangeAmount = (e) =>{
        const amount = e.target.value;
        if(!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)){
            this.setState(() => ({amount}));
        }
    };
    onDateChange = (createdAt) => {
        if(createdAt){
            this.setState(() => ({createdAt}))
        }
        
    };
    onFocusChanged = ({focused}) => {
        this.setState(() => ({calendarFocused:focused}))
    };
    onSubmit = (e) => {
        e.preventDefault();
        if(!this.state.description || !this.state.amount){
             this.setState(() => ({error:'Please provide the Amount and Description'}))
        }else{
            this.setState(() => ({error:''}));
            this.props.onSubmit({
                desc:this.state.description,
                amount:parseFloat(this.state.amount,10)*100,
                createdAt:this.state.createdAt.valueOf(),
                note:this.state.note
            });
        }
    };
    render(){
        return(
            <div>
            {this.state.error  && <p>{this.state.error}</p>}
                <form onSubmit={this.onSubmit} >
                    <input type='text'
                        placeholder='Description'
                        autoFocus
                        value={this.state.description}
                        onChange={this.onChangeDescription}
                    />
                    <input type='text'
                        placeholder='Amount'
                        value={this.state.amount}
                        onChange={this.onChangeAmount}
                    />
                    <SingleDatePicker
                        date={this.state.createdAt}
                        onDateChange={this.onDateChange}
                        focused={this.state.calendarFocused}
                        onFocusChange={this.onFocusChanged}
                        numberOfMonths={1}
                        isOutsideRange={()=>false}
                    />
                    <textarea placeholder='Add note for this expense'
                        value={this.state.note}
                        onChange={this.onChangeTextArea}
                    />
                    <button>Add Expense</button>
                    
                </form>
            </div>

        );
    }
}