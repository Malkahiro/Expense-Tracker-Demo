import Card from '../UI/Card';
import './Expenses.css'
import ExpensesFilter from './ExpensesFilter';
import { useState } from 'react'
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

const Expenses = ({ expenses }) => {
    const [selectedYear, setSelectedYear] = useState('2020');
    const changedYear = (year) => {
        setSelectedYear(year)
    }

    const filteredExpenses = expenses.filter(expense => {
        return expense.date.getFullYear().toString() === selectedYear;
    })



    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter selectedYear={selectedYear} onChangedYear={changedYear} />
                <ExpensesChart expenses={filteredExpenses} />
                <ExpensesList items={filteredExpenses} />
            </Card>
        </div>
    );
}

export default Expenses;