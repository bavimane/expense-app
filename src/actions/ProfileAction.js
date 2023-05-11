import axios from "axios";

export const setUser = (profile) => {
  return {
    type: "SET_USER",
    payload: profile,
  };
};

export const asyncViewProfile = () => {
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
      .get("http://localhost:3066/api/user", headers)
      .then((response) => {
        dispatch(setUser(response.data));
      })
      .catch((error) => {
        alert(error);
      });
  };
};
