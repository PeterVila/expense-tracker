import { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpenseList.scss";
import ExpenseFilter from "./ExpenseFilter"
import Card from '../UI/Card';

const ExpenseList = (props) => {
  const [filteredYear, setFilteredYear] = useState(2021);

  const filterChangeHandler = selectedYear => {
    console.log('ExpenseList.js');
    setFilteredYear(selectedYear);
  }
  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          filterChangeHandler={filterChangeHandler}
          selected={filteredYear}
        />
        {props.expenses.map((expense, index) => {
          return (
            <ExpenseItem
              key={index}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          );
        })}
      </Card>
    </div>
  );
}

export default ExpenseList;
