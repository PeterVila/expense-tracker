import { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpenseList.scss";
import ExpenseFilter from "./ExpenseFilter"
import Card from '../UI/Card';
import ExpensesChart from "./ExpensesChart";


const ExpenseList = (props) => {
  const [filteredYear, setFilteredYear] = useState("2022");

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  }

  const filteredExpenses = props.expenses.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  })

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          filterChangeHandler={filterChangeHandler}
          selected={filteredYear}
        />
        <ExpensesChart expenses={filteredExpenses} />
        {filteredExpenses.length === 0 ? (
          <p>No expenses found.</p>
        ) : (
          filteredExpenses.map((expense, index) => {
            return (
              <ExpenseItem
                key={index}
                title={expense.title}
                amount={expense.amount}
                date={expense.date}
              />
            );
          })
        )}
      </Card>
    </div>
  );
}

export default ExpenseList;
