import { addProductRequest, RemoveProductRequest } from "../contextsApi";

export const addProductsToDataBase = (cartItems) => {
  return new Promise((resolve, reject) => {
    const config = {
      headers: {
        "x-auth-token": localStorage.getItem("Moontoken"),
      },
    };

    addProductRequest(cartItems, config)
      .then(({ data }) => {
        return resolve(data);
      })
      .catch(({ response }) => {
        console.log(response);
        reject();
      });
  });
};
export const removeProductsfromDataBase = (productId) => {
  return new Promise((resolve, reject) => {
    const config = {
      headers: {
        "x-auth-token": localStorage.getItem("Moontoken"),
      },
    };

    RemoveProductRequest(productId, config)
      .then(({ data }) => {
        return resolve(data);
      })
      .catch(({ response }) => {
        console.log(response);
        reject();
      });
  });
};
