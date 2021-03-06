import { useState } from 'react';
import './ExpenseItem.scss';
import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate'

const ExpensiveItem = (props) => {

  const [title, setTitle] = useState(props.title);
  const clickHandler = () => {
    setTitle('Updated');
    setTitle(prompt("Please enter a new title"))
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}/>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">{props.amount}</div>
        <button onClick={clickHandler}>Change Title</button>
      </div>
    </Card>
  );
}

export default ExpensiveItem;
