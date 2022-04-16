import React, { useState } from "react";
import CheckRoundedIcon from "@mui/icons-material/CheckRounded";
import {
  Grid,
  Stack,
  Typography,
  Button,
  FormControl,
  Select,
  MenuItem,
  InputLabel,
} from "@mui/material";

function SizeType({ productType, changeType, changeSize, type, size }) {
  if (productType !== "phone-Case") {
    return (
      <Stack
        spacing={0.3}
        sx={{
          marginTop: "1em",
        }}
      >
        <Typography variant="body2" align="center">
          Size
        </Typography>
        <Grid container spacing={0.5} justifyContent="space-around">
          <Grid item>
            <Button
              sx={{ color: "gray" }}
              variant="outlined"
              size="small"
              endIcon={size === 0 ? <CheckRoundedIcon /> : null}
              onClick={() => changeSize(0)}
            >
              Small
            </Button>
          </Grid>
          <Grid item>
            <Button
              sx={{ color: "gray" }}
              variant="outlined"
              size="small"
              endIcon={size === 1 ? <CheckRoundedIcon /> : null}
              onClick={() => changeSize(1)}
            >
              Medium
            </Button>
          </Grid>
          <Grid item>
            <Button
              sx={{ color: "gray" }}
              variant="outlined"
              size="small"
              endIcon={size === 2 ? <CheckRoundedIcon /> : null}
              onClick={() => changeSize(2)}
            >
              Large
            </Button>
          </Grid>
        </Grid>
      </Stack>
    );
  }
  return (
    <Grid
      container
      justifyContent="center"
      sx={{
        marginTop: "1em",
      }}
    >
      <Grid item xs={12}>
        <FormControl fullWidth>
          <InputLabel>Phone</InputLabel>
          <Select
            value={type}
            label="phone"
            onChange={(e) => changeType(e.target.value)}
            size="small"
          >
            <MenuItem value={"IPhone"}>IPhone</MenuItem>
            <MenuItem value={"Samsung"}>Samsung</MenuItem>
            <MenuItem value={"other"}>other</MenuItem>
          </Select>
        </FormControl>
      </Grid>
    </Grid>
  );
}

export default SizeType;
