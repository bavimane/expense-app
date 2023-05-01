import axios from "axios";

export const registerAuthentication = (registerFormData, navigate) => {
  return axios
    .post("http://localhost:3066/api/user/register", registerFormData)

    .then(() => {
      alert("Successfully registerd");
      navigate("/login");
    })
    .catch((error) => {
      alert(error);
    });
};

export const loginAuthentication = (loginFormData, navigate) => {
  return axios
    .post("http://localhost:3066/api/user/login", loginFormData)

    .then((response) => {
      const user = {
        token: response.data.token,
        id: response.data.id,
      };
      localStorage.setItem("user", JSON.stringify(user));
      alert("Successfully Logged in");
      navigate("/home");
    })

    .catch((error) => {
      alert(error);
    });
};
