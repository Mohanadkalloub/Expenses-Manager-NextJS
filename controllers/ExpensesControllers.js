// import ExpensesModels from "@/models/ExpensesModels";
// class ExpensesControllers {
//   async read(): Promise<ExpensesModels[]> {
//     return await ExpensesModels.all();
//   }
//   async save(expense: ExpensesModels): Promise<ExpensesModels | null> {
//     if (
//       expense.title != "" &&
//       expense.date != "" &&
//       expense.value != "" &&
//       expense.description != ""
//     ) {
//       return await expense.save();
//     }
//     {
//       return null;
//     }
//   }
//   async delete(expense: ExpensesModels): Promise<boolean> {
//     return await expense.delete();
//   }
// }
// export default ExpensesControllers;

import ExpensesModels from "@/models/ExpensesModels";
class ExpensesControllers {
  async read() {
    return await ExpensesModels.all();
  }
  async save(expense) {
    if (
      expense.title != "" &&
      expense.date != "" &&
      expense.value != "" &&
      expense.description != ""
    ) {
      return await expense.save();
    }
    {
      return null;
    }
  }
  async delete(expense) {
    return await expense.delete();
  }
}
export default ExpensesControllers;
