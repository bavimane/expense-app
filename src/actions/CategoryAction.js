import axios from "axios";

export const setCategory = (category) => {
  return {
    type: "ADD_CATEGORY",
    payload: category,
  };
};

export const asyncAddCategories = (categoryFormData) => {
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
      .post("http://localhost:3066/api/categories", categoryFormData, headers)
      .then((response) => {
        dispatch(setCategory(response.data));
      })
      .catch((error) => {
        alert(error);
      });
  };
};

export const asyncCategoryList = () => {
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
      .get("http://localhost:3066/api/categories", headers)
      .then((response) => {
        dispatch(setCategory(response.data));
      })
      .catch((error) => {
        alert(error);
      });
  };
};

export const asyncCategoryUpdate = (categoryFormData) => {
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
        `http://localhost:3066/api/categories/update/${parsedValue.id}`,
        categoryFormData,
        headers
      )
      .then((response) => {
        dispatch(setCategory(response.data));
      })
      .catch((error) => {
        alert(error);
      });
  };
};
