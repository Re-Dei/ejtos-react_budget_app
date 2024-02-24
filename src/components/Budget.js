import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
  const { budget } = useContext(AppContext);
  const { expenses } = useContext(AppContext);
  const { currency } = useContext(AppContext);

  const [newBudget, setNewBudget] = useState(budget);
  const handleBudgetChange = (event) => {
    if (event.target.value > 20000) {
      alert('Value cannot be greater than 20000');
      return;
    }

    const totalExpenses = expenses.reduce((total, item) => {
      return (total += item.cost);
    }, 0);
    console.log(totalExpenses)

    if (event.target.value < totalExpenses) {
      alert('Budget cannot be less than the total expenses');
      return;
    }

    setNewBudget(event.target.value);
  }

  return (
    <div className='alert alert-secondary'>
      <span>Budget: $</span>
      <input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
    </div>
  );
};
export default Budget;
