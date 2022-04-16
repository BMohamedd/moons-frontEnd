import React, { useState, useContext, useEffect } from "react";
import {
  Container,
  Button,
  Grid,
  Typography,
  TextField,
  IconButton,
  Stack,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { wakeUpServer } from "./helperFunctions/api";
import { makeLoginRequest } from "./helperFunctions/actionCreators";
import { authContext } from "../contexts/authenticationContext/authenticationContext";
import CircularProgress from "@mui/material/CircularProgress";

function Login() {
  document.title = "Moons - Login";
  const navigate = useNavigate();
  const [userdata, Changeuserdata] = useState({
    username: "",
    password: "",
  });
  const { changeCurrentUserInfo, CurrentUserInfo } = useContext(authContext);
  const [sleep, changeSleep] = useState({});
  const [usernameErr, changeUsernameErr] = useState(false);
  const [errorMSG, changeErrorMSG] = useState("");
  const usernameFormat = /^[a-zA-Z0-9_]{5,}[a-zA-Z]+[0-9]*$/;

  useEffect(() => {
    wakeUpServer().then(() => {
      changeSleep({ display: "none" });
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    changeErrorMSG("");
    changeUsernameErr(false);
    if (userdata.username.match(usernameFormat)) {
      const CurrentUser = makeLoginRequest(userdata, changeErrorMSG)
        .then((data) => {
          changeCurrentUserInfo(data);
          navigate("/home");
        })
        .catch((err) => changeErrorMSG(err));
    } else {
      changeErrorMSG(
        "Username must be longer then 5 characters with no spaces"
      );
      changeUsernameErr(true);
    }
  };

  return (
    <Container>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        direction="column"
        sx={{
          height: "100vh",
        }}
      >
        <Grid item>
          <form noValidate autoComplete="off" onSubmit={handleSubmit}>
            <IconButton
              sx={{
                display: "flex",
                width: "100%",
                color: "black",
                justifyContent: "center",
              }}
              onClick={() => navigate("/Home")}
            >
              <Typography variant="h3" align="center">
                Moons
              </Typography>
            </IconButton>
            <Typography color="error" align="center">
              {errorMSG}
            </Typography>
            <TextField
              onChange={(e) =>
                Changeuserdata({ ...userdata, username: e.target.value })
              }
              type="text"
              label="Enter Username"
              variant="outlined"
              error={usernameErr}
              fullWidth
              required
              sx={{
                marginTop: "40px",
              }}
            />
            <TextField
              onChange={(e) =>
                Changeuserdata({ ...userdata, password: e.target.value })
              }
              type="password"
              label="Enter password"
              variant="outlined"
              fullWidth
              required
              sx={{
                marginTop: "20px",
              }}
            />
            <Typography variant="subtitle1" color="primary">
              Forgot password?
            </Typography>
            <Grid
              container
              alignItems="center"
              justifyContent="space-between"
              sx={{
                marginTop: "40px",
                width: "100%",
              }}
            >
              <Grid item>
                <Button variant="contained" type="submit">
                  Next
                </Button>
              </Grid>
              <Grid item>
                <Stack direction="row" alignItems="center" spacing={5}>
                  <Typography>
                    {sleep === ""
                      ? "waking up server"
                      : "server up and running!"}
                  </Typography>
                  <CircularProgress sx={sleep} />
                </Stack>
              </Grid>
            </Grid>
          </form>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Login;
