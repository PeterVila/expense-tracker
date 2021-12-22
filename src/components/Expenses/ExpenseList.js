import ExpenseItem from "./ExpenseItem";
import "./ExpenseList.scss";
import Card from '../UI/Card';

const ExpenseList = (props) => {
  return (
    <Card className="expenses">
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
  )
}

export default ExpenseList;
