import React, { Fragment, useState, useContext } from "react";
import { loadStripe } from "@stripe/stripe-js";
import {
  Drawer,
  IconButton,
  List,
  ListItemText,
  Typography,
  Divider,
  Tooltip,
  Badge,
  Grid,
  Stack,
  Button,
  Snackbar,
  Box,
  Alert,
} from "@mui/material";
import { shoppingContext } from "../contexts/shoppingcart/ShoppingContext";
import { makeStyles } from "@mui/styles";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { useNavigate } from "react-router-dom";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

let stripeObj = "";

const getStripe = async () => {
  if (!stripeObj) {
    stripeObj = await loadStripe(
      "pk_test_51Kp8iZELyyisdhK5Ybt1b9xmwxpoinvN8fk02SZ0PkRjERhX6bcQVsGEgW5miKIQk7VOTFi16WS7wDvn4ly9tlyn00ZdNebyqS"
    );
  }
  return stripeObj;
};

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "1em",
    [theme.breakpoints.up("lg")]: {
      maxWidth: "500px",
    },
    [theme.breakpoints.down("lg")]: {
      maxWidth: "40vw",
    },
    [theme.breakpoints.down("md")]: {
      maxWidth: "75vw",
    },
    [theme.breakpoints.down("sm")]: {
      maxWidth: "100vw",
    },
  },
}));

function ShoppingCartDrawer() {
  const classes = useStyles();
  const url = window.location.origin;
  const [isSnackOpen, ChangeSnackState] = useState(false);
  const [isCartDrawerOpen, ChangeCartDrawer] = useState(false);
  const { cartItems, removeFromShoppingCart } = useContext(shoppingContext);
  const isCartEmpty = cartItems.length >= 1 ? false : true;
  const [isCheckoutActive, changeCheckoutState] = useState(false);

  const EditDrawerState = () => {
    if (isCartEmpty === false) {
      return ChangeCartDrawer(true);
    } else {
      ChangeSnackState(true);
      setTimeout(() => ChangeSnackState(false), 2000);
    }
  };
  const getItemPaymentId = (itemName) => {
    const itemAndId = {
      "Mossy Moon Hoodie": "price_1Kp8uiELyyisdhK5tWnE7N44",
      "Classic Mask with Awsesome drawing": "price_1Kp8vnELyyisdhK5xfKQW6jY",
      SpaceTurtules: "price_1Kp8sfELyyisdhK5r3SC6g3B",
      MoonStages: "price_1KpALLELyyisdhK58beFFtTl",
      DawnLigh: "price_1KpAMEELyyisdhK5lItUUvDc",
      "80's Moon Hoodie": "price_1KpAMwELyyisdhK5OWCD5wcE",
      "Plain Moon Hoodie": "price_1KpANkELyyisdhK5IPfuokq1",
      "Classic Aqua Mask": "price_1KpAONELyyisdhK5OskOPxX9",
      "Awsesome Moon Mask": "price_1KpAP1ELyyisdhK5dAJ0XJYO",
    };
    return itemAndId[itemName];
  };
  const createLineItems = (cartItems) => {
    let array = [];
    cartItems = cartItems.map((val, index) => {
      return { ...val, index };
    });
    cartItems.map((CartValue, index) => {
      if (
        array.filter((value) => {
          return getItemPaymentId(CartValue.name) === value.price
            ? true
            : false;
        }).length > 0
      ) {
        array.filter((innerValue, index) => {
          if (innerValue.price === getItemPaymentId(CartValue.name)) {
            let item = array.splice(index, 1)[0];
            item.quantity = Number(item.quantity) + Number(CartValue.amount);
            array = [...array, item];
          }
        });
      } else {
        return array.push({
          price: getItemPaymentId(CartValue.name),
          quantity: CartValue.amount,
        });
      }
    });
    return array;
  };

  const checkoutOptions = {
    lineItems: createLineItems(cartItems),
    mode: "payment",
    successUrl: `${url}/success`,
    cancelUrl: `${url}`,
  };

  const redirectToCheckout = async () => {
    changeCheckoutState(true);
    await getStripe();
    console.log(checkoutOptions.lineItems);
    const { error } = await stripeObj.redirectToCheckout(checkoutOptions);
    console.log({ error });
  };

  return (
    <Fragment>
      <Drawer
        open={isCartDrawerOpen}
        anchor="right"
        onClose={() => ChangeCartDrawer(false)}
      >
        <List className={classes.root}>
          <Tooltip title="close">
            <IconButton
              sx={{
                marginBottom: ".5em",
              }}
              onClick={() => ChangeCartDrawer(false)}
            >
              <CloseRoundedIcon />
            </IconButton>
          </Tooltip>
          <Stack
            alignContent="space-between"
            justifyContent="center"
            spacing={5}
          >
            <Box>
              {!isCartEmpty ? (
                cartItems.map((val) => {
                  return (
                    <div key={val.uuid}>
                      <Grid
                        container
                        direction="row"
                        spacing={3}
                        justifyContent="space-evenly"
                        alignItems="center"
                      >
                        <Grid item xs={4} md={4}>
                          <img src={val.picture} style={{ width: "100%" }} />
                        </Grid>
                        <Grid item xs={5} md={5}>
                          <Stack>
                            <ListItemText primary={val.name} color="primary" />
                            <Typography>Amount: {val.amount}</Typography>
                            <Typography>
                              TotalPrice: {Math.round(val.amount * val.price)}£
                            </Typography>
                            <Typography>
                              {val.type === "null"
                                ? `size: ${val.size}`
                                : `For: ${val.type}`}
                            </Typography>
                          </Stack>
                        </Grid>
                        <Grid item xs={3} md={3}>
                          <Stack>
                            <Button
                              endIcon={<DeleteRoundedIcon />}
                              id={val.uuid}
                              color="error"
                              onClick={(e) =>
                                removeFromShoppingCart(e.target.id)
                              }
                            >
                              Delete
                            </Button>
                          </Stack>
                        </Grid>
                      </Grid>
                      <Divider />
                    </div>
                  );
                })
              ) : (
                <Typography
                  sx={{
                    width: "100%",
                  }}
                >
                  your cart is Empty
                </Typography>
              )}
            </Box>
            <Button
              onClick={redirectToCheckout}
              variant="contained"
              disableElevation
              disabled={isCartEmpty ? true : isCheckoutActive}
            >
              CHECKOUT |{" "}
              {Math.floor(
                cartItems.reduce(
                  (prev, current) =>
                    prev + Number(current["price"]) * current["amount"],
                  0
                )
              )}
              £
            </Button>
          </Stack>
        </List>
      </Drawer>

      {/* icon */}
      <Tooltip title="view shopping cart">
        <IconButton
          sx={{
            color: "#fff",
          }}
          onClick={EditDrawerState}
        >
          <Badge badgeContent={cartItems.length} color="error">
            <ShoppingCartOutlinedIcon />
          </Badge>
        </IconButton>
      </Tooltip>
      {/* snack */}
      <Snackbar open={isSnackOpen}>
        <Alert
          onClose={() => ChangeSnackState(false)}
          severity="error"
          sx={{ width: "100%" }}
        >
          Your Shopping Cart Is Empty
        </Alert>
      </Snackbar>
    </Fragment>
  );
}

export default ShoppingCartDrawer;
