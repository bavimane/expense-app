import axios from "axios";

export const addBudget = (budget) => {
  return {
    type: "ADD_BUDGET",
    payload: budget,
  };
};

export const asyncListBudget = () => {
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
      .get("http://localhost:3066/api/budget", headers)
      .then((response) => {
        dispatch(addBudget(response.data));
      })
      .catch((error) => {
        alert(error);
      });
  };
};

export const asyncUpdatedBudget = (budgetFormData) => {
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
      .put(
        `http://localhost:3066/api/budget/update/${parsedValue.id}`,
        budgetFormData,
        headers
      )
      .then((response) => {
        dispatch(addBudget(response.data));
      })
      .catch((error) => {
        alert(error);
      });
  };
};
