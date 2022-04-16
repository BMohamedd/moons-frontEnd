import { AppBar, Grid, Toolbar, Box, Tooltip, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import IconButton from "@mui/material/IconButton";
import React, { useState, useContext } from "react";
import NavigationDrawer from "./NavigationDrawer";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import { authContext } from "../contexts/authenticationContext/authenticationContext";
import { shoppingContext } from "../contexts/shoppingcart/ShoppingContext";
import ShoppingCartDrawer from "./ShoppingCartDrawer";

function Navbar() {
  const { CurrentUserInfo, changeCurrentUserInfo } = useContext(authContext);
  const { cartItems, changeCartItems } = useContext(shoppingContext);
  const [tab, changeTab] = useState(0);
  const navigate = useNavigate();
  const handleMoonClick = () => {
    navigate("/Home");
  };

  const handleLoginLogout = () => {
    if (CurrentUserInfo.username === "") {
      return navigate("/login");
    }
    changeCurrentUserInfo({ jwt: "", username: "", id: "" });
    changeCartItems([]);
    localStorage.removeItem("Moontoken");

    return navigate("/login");
  };

  return (
    <AppBar
      sx={{
        backgroundColor: "#303030",
        borderBottom: "2px solid white",
      }}
    >
      <Toolbar>
        <Grid
          sx={{
            width: "100%",
          }}
          container
          alignItems="center"
          justifyContent="space-between"
        >
          <Grid item>
            <Grid item>
              <NavigationDrawer />
            </Grid>
          </Grid>
          <Grid item>
            <IconButton onClick={handleMoonClick}>
              <Typography
                varient="h1"
                sx={{
                  color: "white",
                }}
              >
                MOONS
              </Typography>
            </IconButton>
          </Grid>
          <Grid item>
            <ShoppingCartDrawer />

            <Tooltip
              title={
                CurrentUserInfo.username === "" ? "login / register" : "logout"
              }
            >
              <IconButton
                sx={{
                  color: "#fff",
                }}
                onClick={handleLoginLogout}
              >
                {CurrentUserInfo.username === "" ? (
                  <PersonOutlineIcon />
                ) : (
                  <LogoutRoundedIcon />
                )}
              </IconButton>
            </Tooltip>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
