import axios from "axios";

export const addExpense = (expense) => {
  return {
    type: "ADD_EXPENSE",
    payload: expense,
  };
};

export const asyncAddExpense = (expenseFormData) => {
  const user = localStorage.getItem("user");
  const parsedValue = JSON.parse(user);
  const token = parsedValue.token;

  const headers = {
    headers: {
      Authorization: token,
    },
  };

  return (dispatch) => {
    axios
      .post("http://localhost:3066/api/expense", expenseFormData, headers)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        alert(error);
      });
  };
};
