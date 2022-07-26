import './ExpenseForm.css'
import { useState } from 'react'



const ExpenseForm = ({ onSaveExpenseData, stopEditingHandler }) => {
    const [enteredTitle, setEnteredTitle] = useState('')
    const [enteredAmount, setEnteredAmount] = useState('')
    const [enteredDate, setEnteredDate] = useState('')

    const handleTitleChange = (event) => {
        setEnteredTitle(event.target.value);
    }
    const handleAmountChange = (event) => {
        setEnteredAmount(event.target.value)
    }
    const handleDateChange = (event) => {
        setEnteredDate(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const expenseData = {
            title: enteredTitle,
            amount: +enteredAmount,
            date: new Date(enteredDate),
        }
        onSaveExpenseData(expenseData);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');

    }


    return (
        <form onSubmit={handleSubmit}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>{enteredTitle}</label>
                    <input type="text" value={enteredTitle} onChange={handleTitleChange} />
                </div>
                <div className="new-expense__control">
                    <label>{enteredAmount}</label>
                    <input type="number" value={enteredAmount} min='0.01' step='0.01' onChange={handleAmountChange} />
                </div>
                <div className="new-expense__control">
                    <label>{enteredDate}</label>
                    <input type="date" value={enteredDate} min='2019-01-01' max='2022-21-31' onChange={handleDateChange} />
                </div>
                <div className="new-expense__actions">
                    <button type='button' onClick={stopEditingHandler}>Cancel</button>
                </div>
                <div className="new-expense__actions">
                    <button type='submit'>Add Expense</button>
                </div>
            </div>
        </form>
    );
}

export default ExpenseForm;