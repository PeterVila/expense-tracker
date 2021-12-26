import ExpenseList from "./components/Expenses/ExpenseList";
import NewExpense from "./components/NewExpense/NewExpense"
import { useState } from 'react';

const expenses = [
  { title: "Car Insurance", amount: "289", date: new Date(2021, 12, 22) },
  { title: "Loan", amount: "450", date: new Date(2022, 5, 11) },
  { title: "Christmas Purchases", amount: "400", date: new Date(2021, 12, 20) },
  { title: "Black Friday", amount: "200", date: new Date(2021, 11, 25) },
  { title: "Shtuff", amount: "999", date: new Date(2021, 2, 11) },
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
