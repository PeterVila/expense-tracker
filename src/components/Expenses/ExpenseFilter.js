import "./ExpenseFilter.scss";

const ExpensesFilter = (props) => {

  const filterChangeHandler = (event) => {
    console.log(event.target.value);
    props.filterChangeHandler(event.target.value);
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select value={props.selected} onChange={filterChangeHandler}>
          <option value="2021">2021</option>
          <option value="2022">2022</option>
          <option value="2022">2023</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;