import "@stripe/stripe-js";
import HomeComponent from "./components/mainShop/HomeComponent.js";
import Login from "./components/authentication/Login.js";
import Product from "./components/productView/Product";
import ScrollToTop from "./components/other/Scroll";
import About from "./components/other/About";
import Contact from "./components/other/Contact";
import { getLastUserLogged } from "./components/authentication/helperFunctions/actionCreators";
import Refund from "./components/other/Refund";
import Shop from "./components/mainShop/Shop";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useEffect, useContext } from "react";
import "./App.css";
import Success from "./components/other/success.js";
import { authContext } from "./components/contexts/authenticationContext/authenticationContext";
import { shoppingContext } from "./components/contexts/shoppingcart/ShoppingContext.js";

const ThemeOptions = {
  typography: {
    fontFamily: `"Josefin Sans", "Roboto", "Helvetica", "Arial", sans-serif`,
  },
  type: "dark",
  primary: {
    main: "#3f51b5",
  },
  secondary: {
    main: "#f50057",
  },
};
const theme = createTheme(ThemeOptions);

function App() {
  const { changeCurrentUserInfo, CurrentUserInfo } = useContext(authContext);
  const { changeCartItems } = useContext(shoppingContext);

  useEffect(() => {
    if (CurrentUserInfo.username === "") {
      getLastUserLogged()
        .then((data) => {
          changeCurrentUserInfo({
            ...CurrentUserInfo,
            username: data.username,
            id: data.id,
          });
          changeCartItems(data.cart);
        })
        .catch(() => {
          changeCurrentUserInfo({ jwt: "", username: "", id: "" });
        });
    }
  });

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route
            index
            element={
              <HomeComponent>
                <Shop />
              </HomeComponent>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/success" element={<Success />} />
          <Route path="*" element={<HomeComponent />}>
            <Route path="product/:id/:price/:type" element={<Product />} />
            <Route path="about" element={<About />} />
            <Route path="Contact" element={<Contact />} />
            <Route path="Refund-policy" element={<Refund />} />
            <Route path="*" element={<Shop />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
