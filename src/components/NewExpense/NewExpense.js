import React, { useState } from "react";

import classes from "./NewExpense.module.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [isFormShown, setIsFormShown] = useState(false);
  
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    
    props.onAddExpense(expenseData);

    setIsFormShown(false);
  };

  const showFormButtonHandler = () => {
    setIsFormShown(true);
  };

  const stopEditingHandler = () => {
    setIsFormShown(false);
  };

  return (
    <div className={classes['new-expense']}>
      {!isFormShown && (
        <button onClick={showFormButtonHandler}>Add New Expense</button>
      )}
      {isFormShown && (
        <ExpenseForm
          onCancelButton={stopEditingHandler}
          onSaveExpenseData={saveExpenseDataHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
