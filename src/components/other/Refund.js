import { Box } from "@mui/system";
import React from "react";
import { Typography } from "@mui/material";

function Refund() {
  document.title = "Moons - Refund";

  return (
    <Box
      sx={{
        color: "black",
        paddingY: "10em",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Typography
        variant="h5"
        align="center"
        sx={{
          marginBottom: "20px",
        }}
      >
        All sales are final. Moons Clothing does not accept any refunds at this
        time as we have limited inventory.
      </Typography>
    </Box>
  );
}

export default Refund;
