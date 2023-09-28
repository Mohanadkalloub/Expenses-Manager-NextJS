import React from "react";

import { useContext, useEffect } from "react";
import FormRow from "./FormRow";
import { AppContext } from "@/context/AppContext";
import ExpensesControllers from "@/controllers/ExpensesControllers";
export default function Table() {
  const appContext = useContext(AppContext);
  const expensesController = new ExpensesControllers();
  const fetchData = async () => {
    const expenses = await expensesController.read();
    appContext.addExpenses(expenses);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <table className="table ">
      <thead>
        <tr>
          <th> Title</th>
          <th> Date</th>
          <th>value</th>
          <th>Description</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {appContext.expenses.map((element) => (
          <FormRow key={element.id} expense={element} />
        ))}
      </tbody>
    </table>
  );
}
