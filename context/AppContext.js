import { createContext, useState } from "react";

export const AppContext = createContext({
  expenses: [],
  addExpenses: (expenses) => {},
  addExpense: (expense) => {},
  deleteExpenses: (expenses) => {},
});
export const AppContextProvider = (props) => {
  const [expenses, setExpenses] = useState([]);
  const addExpense = (expense) => {
    setExpenses((prevState) => {
      return [expense, ...prevState];
    });
  };
  const addExpenses = (expenses) => {
    setExpenses(expenses);
  };
  const deleteExpenses = (expense) => {
    let data = expenses.filter((element) => element._id != expense._id);
    setExpenses(data);
  };
  return (
    <AppContext.Provider
      value={{
        expenses: expenses,
        addExpense: addExpense,
        addExpenses: addExpenses,
        deleteExpenses: deleteExpenses,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
