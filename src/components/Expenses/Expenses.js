import React, { useState, Fragment } from "react";

import classes from "./Expenses.module.css";

import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChar";

const Expenses = (props) => {
  const [year, setYear] = useState("2020");

  const selectDataHandler = (filteredYear) => {
    setYear(filteredYear);
  };

  const filteredExpenses = props.expenses.filter(
    (expense) => expense.date.getFullYear().toString() === year
  );

  return (
    <Fragment>
      <Card className={classes.expenses}>
        <ExpensesFilter
          selectedDefault={year}
          onSelectData={selectDataHandler}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList expenses={filteredExpenses} />
      </Card>
    </Fragment>
  );
};

export default Expenses;
