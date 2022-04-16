import axios from "axios";

const url = "https://moons-clothing-backend.herokuapp.com/";

export const authenticationRequest = (data) => axios.post(`${url}/login`, data);
export const wakeUpServer = () => axios.get(url);
export const requestCurrentUser = (config) =>
  axios.get(`${url}/get-user`, config);
