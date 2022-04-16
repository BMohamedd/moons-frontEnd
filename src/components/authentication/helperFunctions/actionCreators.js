import * as api from "./api";

export const makeLoginRequest = (userdata, changeUsernameErr) => {
  return new Promise((resolve, reject) => {
    api
      .authenticationRequest(userdata)
      .then(({ data }) => {
        localStorage.setItem("Moontoken", data.jwt);
        return resolve(data);
      })
      .catch(({ response }) => {
        changeUsernameErr(true);
        reject(response.data);
      });
  });
};

export const getLastUserLogged = (token) => {
  return new Promise((resolve, reject) => {
    const config = {
      headers: {
        "x-auth-token": localStorage.getItem("Moontoken"),
      },
    };
    api
      .requestCurrentUser(config)
      .then(({ data }) => {
        return resolve(data);
      })
      .catch(({ response }) => {
        localStorage.removeItem("Moontoken");
        reject();
      });
  });
};
