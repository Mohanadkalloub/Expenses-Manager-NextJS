import React from "react";
import { AppContext } from "@/context/AppContext";
import ExpensesControllers from "@/controllers/ExpensesControllers";
import { useContext } from "react";
import ExpensesModels from "@/models/ExpensesModels";
export default function FormRow(props) {
  const appContext = useContext(AppContext);
  const expensesController = new ExpensesControllers();
  const onDeleteHandler = async () => {
    let expense = new ExpensesModels();
    expense._id = props.expense._id;
    const deleted = await expensesController.delete(expense);
    if (deleted) {
      appContext.deleteExpenses(props.expense);
    }
  };
  return (
    <tr>
      <td>{props.expense.title}</td>
      <td>{props.expense.date}</td>
      <td>{props.expense.value} $</td>
      <td colSpan={2}>{props.expense.description}</td>
      <td className="text-right">
        <button onClick={onDeleteHandler} className="delete">
          <i className="fa fa-trash-o" aria-hidden="true" />
        </button>
      </td>
    </tr>
  );
}
