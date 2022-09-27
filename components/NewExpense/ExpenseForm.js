import { useState } from "react";
import ExpenseWarning from "./ExpenseWarning";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const [reenteredTitle, resetEnteredTitle] = useState("");
  const [reenteredAmount, resetEnteredAmount] = useState("");
  const [reenteredDate, resetEnteredDate] = useState("");

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
    if (event.target.value === "") {
      resetEnteredTitle("title");
    } else {
      resetEnteredTitle("");
    }
  };
  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
    if (event.target.value === 0) {
      resetEnteredAmount("amount");
    } else {
      resetEnteredAmount("");
    }
  };
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
    if (!isNaN(event.target.value)) {
      resetEnteredDate("date");
    } else {
      resetEnteredDate("");
    }
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };
    if (expenseData.title === "") {
      resetEnteredTitle("title");
    } else {
      resetEnteredTitle("");
    }
    if (expenseData.amount === 0) {
      resetEnteredAmount("amount");
    } else {
      resetEnteredAmount("");
    }
    if (isNaN(expenseData.date)) {
      resetEnteredDate("date");
    } else {
      resetEnteredDate("");
    }
    if (
      expenseData.title !== "" &&
      expenseData.amount !== 0 &&
      !isNaN(expenseData.date)
    ) {
      props.onSaveExpenseData(expenseData);
      setEnteredTitle("");
      setEnteredAmount("");
      setEnteredDate("");
    }
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
          <ExpenseWarning item1={reenteredTitle} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
          <ExpenseWarning item1={reenteredAmount} />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2023-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
          <ExpenseWarning item1={reenteredDate} />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
