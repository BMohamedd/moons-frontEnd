import { LinearProgress, Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import React from "react";
import { shoppingContext } from "../contexts/shoppingcart/ShoppingContext";

function Success() {
  const { changeCartItems } = React.useContext(shoppingContext);
  const [progress, setProgress] = React.useState(0);
  const [message, setmessage] = React.useState("processing payment...");

  const navigate = useNavigate();

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          navigate("/home");
        }
        if (oldProgress > 90) {
          setmessage("Redirecting...");
        } else if (oldProgress > 75) {
          setmessage("emptying shopping cart...");
        } else if (oldProgress > 50) {
          setmessage("conneting to Moons Clothing...");
        } else if (oldProgress > 25) {
          setmessage("processing payment...");
        }
        return oldProgress + 5;
      });
    }, 300);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div
      style={{
        height: "100vh",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography variant="h4" align="center">
        Awsesome Your purches went through!
      </Typography>
      <Typography variant="h5" align="center">
        it will be at you door step in 1 - 2 weeks.
      </Typography>
      <Box sx={{ width: "50%", marginTop: "5em" }}>
        <LinearProgress variant="determinate" value={progress} />
        <Typography align="center">{message}</Typography>
      </Box>
    </div>
  );
}

export default Success;
