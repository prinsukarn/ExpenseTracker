import axios from "axios";

export function storeExpense(expenseData) {
  axios.post(
    "https://expensetracker-531b4-default-rtdb.firebaseio.com/expenses.json",
    expenseData
  );
}
