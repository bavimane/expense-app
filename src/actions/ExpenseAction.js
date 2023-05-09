import axios from "axios";

export const addExpense = (expense) => {
  return {
    type: "ADD_EXPENSE",
    payload: expense,
  };
};

export const listExpense = (expense) => {
  return {
    type: "LIST_EXPENSE",
    payload: expense,
  };
};

export const deleteExpense = (expense) => {
  return {
    type: "DELETE_EXPENSE",
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
        dispatch(addExpense(response.data));
      })

      .catch((error) => {
        alert(error);
      });
  };
};

export const asyncExpenseList = () => {
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
      .get("http://localhost:3066/api/expense", headers)
      .then((response) => {
        dispatch(listExpense(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const asyncDeleteExpense = (id) => {
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
      .delete(`http://localhost:3066/api/expense/delete/${id}`, headers)
      .then(() => {
        dispatch(asyncExpenseList());
      })
      .catch((error) => {
        alert(error);
      });
  };
};
