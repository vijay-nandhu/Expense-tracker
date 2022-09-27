const ExpenseWarning = (props) => {
  if (props.item1 === "title") {
    return <span className="error">* Title is required</span>;
  }
  if (props.item1 === "amount") {
    return <span className="error">* Amount is required</span>;
  }
  if (props.item1 === "date") {
    return <span className="error">* Date is required</span>;
  }
};
export default ExpenseWarning;
