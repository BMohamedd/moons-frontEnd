import { Grid } from "@mui/material";
import React from "react";
import SizeTable from "./SizeTable";

function TabContent({ img, value }) {
  if (value === "0" || value === 0) {
    return (
      <Grid container justifyContent="center">
        <Grid item>
          <img
            src={img}
            style={{
              maxWidth: "100%",
            }}
            alt="a model wearing the product"
          />
        </Grid>
      </Grid>
    );
  }
  return <SizeTable />;
}

export default TabContent;
