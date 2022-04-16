import React, { useState, useContext } from "react";
import { shoppingContext } from "../contexts/shoppingcart/ShoppingContext";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import {
  Stack,
  Typography,
  Divider,
  Button,
  TextField,
  Snackbar,
  Alert,
} from "@mui/material";
import SizeType from "./SizeType";

function BuyOptions({ productName, productPrice, productType, img }) {
  const { addToShoppingCart } = useContext(shoppingContext);
  const [amount, Changeamount] = useState(1);
  const [isSnackOpen, ChangeSnackState] = useState(false);
  const [amountError, ChangeAmountError] = useState(false);
  const [size, changeSize] = useState(1);
  const sizeArray = ["small", "medium", "large"];
  const [type, changeType] = useState("IPhone");
  const handleChangeAmount = () => {
    if (amount < 1 || amount > 100) {
      return ChangeAmountError(true);
    }
    ChangeAmountError(false);
    if (productType === "phone-Case") {
      addToShoppingCart([
        "case",
        type,
        productName.join(" "),
        Number(productPrice.join(".")),
        img,
        Number(amount),
        "null",
      ]);
    } else if (productType === "clothes") {
      addToShoppingCart([
        "clothes",
        "null",
        productName.join(" "),
        Number(productPrice.join(".")),
        img,
        Number(amount),
        sizeArray[size],
      ]);
    } else {
      addToShoppingCart([
        "masks",
        "null",
        productName.join(" "),
        Number(productPrice.join(".")),
        img,
        Number(amount),
        sizeArray[size],
      ]);
    }

    Changeamount(1);
    changeSize(1);
    changeType("IPhone");
    ChangeSnackState(true);
    setTimeout(() => ChangeSnackState(false), 1000);
  };

  return (
    <div>
      <Stack spacing={1} justifyContent="center" alignItems="center">
        <Typography variant="h4" sx={{ maxWidth: "100%" }} noWrap>
          {productName.join(" ")}
        </Typography>
        <Typography
          variant="h6"
          sx={{ maxWidth: "100%" }}
          noWrap
        >{`${productPrice.join(".")}£`}</Typography>
        <Typography>Shipping: 1-2 weeks</Typography>
      </Stack>
      <Divider />
      <SizeType
        productType={productType}
        changeType={changeType}
        changeSize={changeSize}
        size={size}
        type={type}
      />
      <Stack
        spacing={4}
        justifyContent="center"
        alignItems="center"
        sx={{
          marginTop: "2em",
        }}
      >
        <TextField
          error={amountError ? true : false}
          sx={{
            width: "100%",
          }}
          label="Amount"
          size="small"
          type="number"
          value={amount}
          onChange={(e) => Changeamount(e.target.value)}
          helperText="must be more then 1 and less then 100 "
        />
        <Button
          endIcon={<AddShoppingCartIcon />}
          variant="contained"
          onClick={handleChangeAmount}
          disableElevation
        >
          ADD TO CART
        </Button>
      </Stack>
      <Stack
        justifyContent="center"
        alignItems="center"
        sx={{ marginTop: "5em" }}
      >
        <Typography variant="caption">
          Made mostly by environmentally friendly factories
        </Typography>
        <Typography variant="caption">
          the model is 5'9" and wearing a size Medium.
        </Typography>
        <Typography variant="caption">
          Stay comfy cozy and fashionable.
        </Typography>
        <p style={{ fontSize: "7px", marginBottom: "0" }}>
          All international customers are responsible for any custom/VAT
        </p>
        <p style={{ fontSize: "7px", marginTop: "0" }}>
          fees that occur when the product arrives to your country.
        </p>
      </Stack>
      <Snackbar open={isSnackOpen}>
        <Alert
          onClose={() => ChangeSnackState(false)}
          severity="success"
          sx={{ width: "100%" }}
        >
          Product Added To Shopping Cart
        </Alert>
      </Snackbar>
    </div>
  );
}

export default BuyOptions;
