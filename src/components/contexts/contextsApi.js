import axios from "axios";

const url = "https://moons-clothing-backend.herokuapp.com";

export const addProductRequest = (data, config) =>
  axios.post(`${url}/add-item`, data, config);
export const RemoveProductRequest = (id, config) =>
  axios.get(`${url}/remove-item/${id}`, config);
