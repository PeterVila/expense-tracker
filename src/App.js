import ExpenseList from "./components/Expenses/ExpenseList";
import "./App.scss";

const App = () => {
  const expenses = [
    { title: "Car Insurance", amount: 300.5, date: new Date(2021, 12, 22) },
    { title: "Car 2", amount: 29, date: new Date(2021, 12, 22) },
    { title: "Car 3", amount: 30.5, date: new Date(2021, 12, 22) },
  ];
  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseList expenses={expenses}/>
    </div>
  );
}

export default App;
