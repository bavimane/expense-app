import axios from "axios";

export const addBudget = (budget) => {
  return {
    type: "ADD_BUDGET",
    payload: budget,
  };
};

export const asyncAddBudget = (budgetFormData) => {
  const user = localStorage.getItem("user");
  const parsedValue = user ? JSON.parse(user) : {};
  const token = parsedValue.token;

  const headers = {
    headers: {
      Authorization: token,
    },
  };

  return (dispatch) => {
    axios
      .post("http://localhost:3066/api/budget", budgetFormData, headers)
      .then((response) => {
        dispatch(addBudget(response.data));
      })
      .catch((error) => {
        alert(error);
      });
  };
};
