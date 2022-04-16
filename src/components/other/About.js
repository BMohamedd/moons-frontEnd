import { Box, Typography } from "@mui/material";
import React from "react";

function About() {
  document.title = "Moons - About";
  return (
    <Box
      sx={{
        marginY: "10em",
        marginLeft: "2em",
      }}
    >
      <Typography variant="h4">About this Website:</Typography>
      <Typography>
        This website was Created for fun and it isn't, nor it will be used for
        commercial purposes.
      </Typography>
      <Typography
        variant="h4"
        sx={{
          marginTop: "1em",
        }}
      >
        About me:
      </Typography>
      <Typography
        sx={{
          width: "50vw",
        }}
      >
        Hey 👋, My name is Mohamed, And I have Built this website using React,
        Express, MongoDB, photoShop and a lot more... If you like what you see
        here or would like to work together{" "}
        <a href="https://www.instagram.com/belhadjm__/" target="_blank">
          {" "}
          Click Here
        </a>
      </Typography>
      <Typography
        variant="h4"
        sx={{
          marginTop: "1em",
        }}
      >
        Credit:
      </Typography>
      <Typography
        sx={{
          marginTop: "1em",
        }}
      >
        Payment icons 👉 https://iconscout.com/icon-pack/payment-methods
      </Typography>
      <Typography
        sx={{
          marginTop: "1em",
        }}
      >
        Product Pictures 👉 https://www.redbubble.com/{" "}
      </Typography>
    </Box>
  );
}

export default About;
