import ExpenseList from "./components/Expenses/ExpenseList";
import NewExpense from "./components/NewExpense/NewExpense"
import "./App.scss";
import { useState } from 'react';

const expenses = [
  { title: "Car Insurance", amount: 300.5, date: new Date(2021, 12, 22) },
  { title: "Car 2", amount: 29, date: new Date(2021, 12, 22) },
  { title: "Car 3", amount: 30.5, date: new Date(2021, 12, 22) },
];

const App = () => {

  const [newExpenses, setNewExpenses] = useState(expenses);

  const addExpenseHandler = expense => {
    setNewExpenses(prevExpenses => {
      return [expense, ...prevExpenses];
    })
  }


  return (
    <div>
      <NewExpense addExpenseHandler={addExpenseHandler}/>
      <ExpenseList expenses={newExpenses}/>
    </div>
  );
}

export default App;
