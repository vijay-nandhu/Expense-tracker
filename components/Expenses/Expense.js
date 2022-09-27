import { useState } from "react";
import ExpenseFilter from "./ExpenseFilter";
import Card from "../UI/Card";
import ExpenseList from "./ExpenseList";
import "./Expense.css";

const Expense = (props) => {
  const currentYear = new Date().getFullYear().toString();
  const currentMonth = new Date().toLocaleString("default", { month: "long" });
  const [filteredYear, setFilteredYear] = useState(currentYear);
  const [filteredMonth, setFilteredMonth] = useState(currentMonth);
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  const filterChangeHandler2 = (selectedMonth) => {
    setFilteredMonth(selectedMonth);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return (
      expense.date.getFullYear().toString() === filteredYear &&
      expense.date.toLocaleString("default", { month: "long" }) ===
        filteredMonth
    );
  });
  return (
    <Card className="expenses">
      <ExpenseFilter
        selected={filteredYear}
        selected2={filteredMonth}
        onChangeFilter={filterChangeHandler}
        onChangeFilter2={filterChangeHandler2}
        items={filteredExpenses}
      />
      {/* <ExpensesChart expenses={filteredExpenses} /> */}
      <ExpenseList items={filteredExpenses} />
    </Card>
  );
};
export default Expense;
