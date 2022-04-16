import React, { createContext, useState, useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import { authContext } from "../authenticationContext/authenticationContext";
import {
  addProductsToDataBase,
  removeProductsfromDataBase,
} from "./ShoppingContextHelper";
export const shoppingContext = createContext();

export function ShoppingContextProvider({ children }) {
  const { CurrentUserInfo } = useContext(authContext);
  const [cartItems, changeCartItems] = useState([]);
  const addToShoppingCart = (array) => {
    //   array       ["prod", "type (phone only)", "name", "price", "pic", "amount", size (other then phone)];
    const newItem = [
      {
        uuid: uuidv4(),
        product: array[0],
        type: array[1],
        name: array[2],
        price: array[3],
        picture: array[4],
        amount: array[5],
        size: array[6],
      },
    ];
    changeCartItems([...newItem, ...cartItems]);
    if (CurrentUserInfo.jwt && CurrentUserInfo.username) {
      addProductsToDataBase(newItem).then((data) => {
        // console.log(data);
      });
    }
  };
  const removeFromShoppingCart = (uuid) => {
    changeCartItems(
      cartItems.filter((val) => (val.uuid === uuid ? false : true))
    );
    if (CurrentUserInfo.jwt && CurrentUserInfo.username) {
      removeProductsfromDataBase(uuid).then((data) => {
        // data => return a message
      });
    }
  };

  // console.log(cartItems);
  return (
    <shoppingContext.Provider
      value={{
        cartItems,
        addToShoppingCart,
        removeFromShoppingCart,
        changeCartItems,
      }}
    >
      {children}
    </shoppingContext.Provider>
  );
}
