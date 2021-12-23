import ExpenseList from "./components/Expenses/ExpenseList";
import NewExpense from "./components/NewExpense/NewExpense"
import "./App.scss";

const App = () => {
  const expenses = [
    { title: "Car Insurance", amount: 300.5, date: new Date(2021, 12, 22) },
    { title: "Car 2", amount: 29, date: new Date(2021, 12, 22) },
    { title: "Car 3", amount: 30.5, date: new Date(2021, 12, 22) },
  ];

  const addExpenseHandler = expense => {
    console.log('In App.js');
    console.log(expense)
  }
  return (
    <div>
      <NewExpense addExpenseHandler={addExpenseHandler}/>
      <ExpenseList expenses={expenses}/>
    </div>
  );
}

export default App;
