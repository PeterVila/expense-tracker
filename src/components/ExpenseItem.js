import './ExpenseItem.scss';

export default function ExpensiveItem() {
  return (
    <div className="expense-item">
      <div>December 22nd 2021</div>
      <div className="expense-item__description">
        <h2>Car Insurance</h2>
        <div className="expense-item__price">$325.50</div>
      </div>
    </div>
  );
}
