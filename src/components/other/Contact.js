import { Box } from "@mui/system";
import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import { Grid, IconButton, Typography } from "@mui/material";

function Contact() {
  document.title = "Moons - Contact";

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
        Find me at:
      </Typography>
      <Grid container justifyContent="center" spacing={8}>
        <Grid item>
          <a
            href="https://www.facebook.com/profile.php?id=100020348866186"
            target="_blank"
          >
            <IconButton>
              <FacebookIcon />
            </IconButton>
          </a>
        </Grid>
        <Grid item>
          <a href="https://www.instagram.com/belhadjm__/" target="_blank">
            <IconButton>
              <InstagramIcon />
            </IconButton>
          </a>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Contact;
