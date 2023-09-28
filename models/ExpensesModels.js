import axios from "axios";

class ExpensesModels {
  constructor(title, date, value, description, _id) {
    this.title = title;
    this.date = date;
    this.value = value;
    this.description = description;
    this._id = _id;
  }
  static async all() {
    try {
      let response = await axios.get("/api/expenses");
      return response.data.data;
    } catch (error) {
      return [];
    }
  }
  async save() {
    try {
      let response = await axios.post("/api/expenses", {
        title: this.title,
        date: this.date,
        value: this.value,
        description: this.description,
      });
      return response.data.data;
    } catch (error) {
      return null;
    }
  }
  async delete() {
    try {
      let response = await axios.delete(`/api/expenses/${this._id}`);
      return response.data.status;
    } catch (error) {
      return false;
    }
  }
}
export default ExpensesModels;
