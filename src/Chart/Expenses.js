import React, { useState } from 'react';

import Card from '../UI/Card';
// import ExpensesFilter from './ExpensesFilter';
// import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className='expenses'>
      <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <div><label>Overview</label><br/>
        <label className="profit-details">Monthly Earning</label></div>       

        <select  className="profit-details" style={{border:'none'}}>
          <option  value='2022'>Quarterly</option>
          
        </select>
      </div>
    </div>


        {/* <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        /> */}
        <ExpensesChart expenses={filteredExpenses} />
        {/* <ExpensesList items={filteredExpenses} /> */}
      </Card>
    </div>
  );
};

export default Expenses;
