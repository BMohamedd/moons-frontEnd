import {
  Typography,
  Chip,
  Grid,
  Snackbar,
  Alert,
  Divider,
} from "@mui/material";
import React, { useState } from "react";
import CaseCollection from "./shopCollections/caseCollection";
import ClothesCollection from "./shopCollections/clothesCollection";
import MaskesCollection from "./shopCollections/MaskesCollection";
import Showcase from "./Showcase.js";
function Shop() {
  const [isSnackOpen, ChangeSnackState] = useState(false);
  const handleViewMore = () => {
    ChangeSnackState(true);
    setTimeout(() => ChangeSnackState(false), 5000);
  };
  const CloseSnack = () => {
    ChangeSnackState(false);
  };

  return (
    <div>
      <Showcase />
      <Typography
        variant="h5"
        align="center"
        sx={{
          mt: "20px",
          textDecoration: "underline",
          textUnderlineOffset: ".5em",
        }}
      >
        Case Collection (on sale!)
      </Typography>
      <CaseCollection />
      <Grid
        container
        justifyContent="center"
        sx={{
          marginTop: "2em",
        }}
      >
        <Grid item>
          <Chip label="View more" onClick={handleViewMore} align="center" />
        </Grid>
      </Grid>
      <Divider
        sx={{
          mt: "10px",
        }}
      />
      {/* clothes collection */}
      <Typography
        variant="h5"
        align="center"
        sx={{
          mt: "2em",
          textDecoration: "underline",
          textUnderlineOffset: ".5em",
        }}
      >
        Clothes Collection (on sale!)
      </Typography>
      <ClothesCollection />
      <Grid
        container
        justifyContent="center"
        sx={{
          marginTop: "2em",
        }}
      >
        <Grid item>
          <Chip label="View more" onClick={handleViewMore} align="center" />
        </Grid>
      </Grid>
      <Divider
        sx={{
          mt: "10px",
        }}
      />
      {/* maskes collection */}
      <Typography
        variant="h5"
        align="center"
        sx={{
          mt: "2em",
          textDecoration: "underline",
          textUnderlineOffset: ".5em",
        }}
      >
        Maskes Collection (on sale!)
      </Typography>
      <MaskesCollection />
      <Grid
        container
        justifyContent="center"
        sx={{
          marginTop: "2em",
          marginBottom: "3em",
        }}
      >
        <Grid item>
          <Chip label="View more" onClick={handleViewMore} align="center" />
        </Grid>
      </Grid>

      {/* snack bar */}
      <Snackbar open={isSnackOpen} autoHideDuration={6000}>
        <Alert onClose={CloseSnack} severity="error" sx={{ width: "100%" }}>
          we are currently out of stock
        </Alert>
      </Snackbar>
    </div>
  );
}

export default Shop;
