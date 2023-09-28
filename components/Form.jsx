import { AppContext } from "@/context/AppContext";
import ExpensesControllers from "@/controllers/ExpensesControllers";
import ExpensesModels from "@/models/ExpensesModels";
import { useContext, useRef } from "react";

export default function Form() {
  let titleRef = useRef();
  let dateRef = useRef();
  let valueRef = useRef();
  let descrptionRef = useRef();
  let expenseController = new ExpensesControllers();
  let appContext = useContext(AppContext);
  let onSubmitHandler = async (event) => {
    event.preventDefault();
    let result = await expenseController.save(expense());
    if (result) {
      appContext.addExpense(result);
    }
  };
  let expense = () => {
    return new ExpensesModels(
      titleRef.current.value,
      titleRef.current.value,
      dateRef.current.value,
      valueRef.current.value,
      descrptionRef.current.value
    );
  };
  return (
    <form className="row" onSubmit={onSubmitHandler}>
      <div className="mb-3 col-md-6">
        <label className="form-label">Title</label>
        <input
          type="text"
          className="form-control addTitle"
          aria-describedby=""
          ref={titleRef}
        />
      </div>
      <div className="mb-3 col-md-6">
        <label className="form-label">Date</label>
        <input
          type="date"
          className="form-control addDate"
          aria-describedby=""
          ref={dateRef}
        />
      </div>
      <div className="mb-3 col-md-6">
        <label className="form-label">Value</label>
        <input
          type="number"
          className="form-control addValue"
          aria-describedby=""
          ref={valueRef}
        />
      </div>
      <div className="mb-3 col-md-6">
        <label htmlFor="title" className="form-label">
          Description
        </label>
        <input
          type="text"
          className="form-control addDescrption"
          aria-describedby=""
          ref={descrptionRef}
        />
      </div>
      <div className="mb-3 col-md-12 text-right">
        <button type="submit" className="btn btn-primary addBtn">
          Add
        </button>
      </div>
    </form>
  );
}
