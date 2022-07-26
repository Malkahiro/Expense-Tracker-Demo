import ExpenseForm from './ExpenseForm';
import './NewExpense.css'
import { useState } from 'react';

const NewExpense = ({ onAddExpense }) => {
    const handleSaveExpenseData = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        onAddExpense(expenseData);
        setIsEditing(false);

    }

    const [isEditing, setIsEditing] = useState(false);

    const startEditingHandler = () => {
        setIsEditing(true);
    };

    const stopEditingHandler = () => {
        setIsEditing(false);
    }


    return (
        <div className='new-expense'>
            {!isEditing && <button onClick={startEditingHandler}>Add New Expense</button>}
            {isEditing && <ExpenseForm onSaveExpenseData={handleSaveExpenseData} stopEditingHandler={stopEditingHandler} />}
        </div>
    );
}

export default NewExpense;