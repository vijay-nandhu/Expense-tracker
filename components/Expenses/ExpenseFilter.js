import "./ExpenseFilter.css";

const ExpenseFilter = (props) => {
  const dropdownChangeHandler = (event) => {
    props.onChangeFilter(event.target.value);
  };
  const dropdownChangeHandler2 = (event) => {
    props.onChangeFilter2(event.target.value);
  };
  let sum = props.items
    .map((element) => element.amount)
    .reduce((a, b) => a + b, 0);

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <select value={props.selected2} onChange={dropdownChangeHandler2}>
          <option value="January">January</option>
          <option value="February">February</option>
          <option value="March">March</option>
          <option value="April">April</option>
          <option value="May">May</option>
          <option value="June">June</option>
          <option value="July">July</option>
          <option value="August">August</option>
          <option value="September">September</option>
          <option value="October">October</option>
          <option value="November">November</option>
          <option value="December">December</option>
        </select>
        <label>Filter total :{sum} </label>
        <select value={props.selected} onChange={dropdownChangeHandler}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};
export default ExpenseFilter;
