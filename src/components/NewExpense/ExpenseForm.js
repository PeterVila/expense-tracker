import { useState } from "react";
import "./ExpenseForm.scss";

const ExpenseForm = (props) => {
  const [userInput, setUserInput] = useState({
    enteredTitle: "",
    enteredAmount: "",
    enteredDate: "",
    add: false,
  });

  const titleChangeHandler = (event) => {
    setUserInput({
      ...userInput,
      enteredTitle: event.target.value,
    });
  };

  const amountChangeHandler = (event) => {
    setUserInput({
      ...userInput,
      enteredAmount: event.target.value,
    });
  };

  const dateChangeHandler = (event) => {
    setUserInput({
      ...userInput,
      enteredDate: event.target.value,
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: userInput.enteredTitle,
      amount: userInput.enteredAmount,
      date: new Date(
        userInput.enteredDate.replace(/-/g, "/").replace(/T.+/, "")
      ),
    };

    props.onSaveExpenseData(expenseData);
    setUserInput({
      enteredTitle: "",
      enteredAmount: "",
      enteredDate: "",
      add: false,
    });
  };

  const formHandler = (event) => {
    event.preventDefault();
    setUserInput({
      ...userInput,
      add: !userInput.add
    });
  };

  return (
    <form onSubmit={submitHandler}>
      {userInput.add === false ? (
        <button onClick={formHandler}>Add Expense</button>
      ) : (
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title</label>
            <input
              type="text"
              onChange={titleChangeHandler}
              value={userInput.enteredTitle}
            />
          </div>
          <div className="new-expense__control">
            <label>Amount</label>
            <input
              type="number"
              min="0.01"
              step="0.01"
              onChange={amountChangeHandler}
              value={userInput.enteredAmount}
            />
          </div>
          <div className="new-expense__control">
            <label>Date</label>
            <input
              type="date"
              min="2020-01-01"
              max="2023-12-31"
              onChange={dateChangeHandler}
              value={userInput.enteredDate}
            />
          </div>
        </div>
      )}
      {userInput.add === true && (
        <div className="new-expense__actions">
          <button onClick={formHandler}>Cancel</button>
          <button type="submit">Add Expense</button>
        </div>
      )}
    </form>
  );
};

export default ExpenseForm;
