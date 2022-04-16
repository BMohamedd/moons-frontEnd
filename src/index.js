import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { AuthContextProvider } from "./components/contexts/authenticationContext/authenticationContext";
import { ShoppingContextProvider } from "./components/contexts/shoppingcart/ShoppingContext";
import App from "./App";
ReactDOM.render(
  <AuthContextProvider>
    <ShoppingContextProvider>
      <App />
    </ShoppingContextProvider>
  </AuthContextProvider>,
  document.getElementById("root")
);
