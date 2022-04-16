import React, { Fragment, useState } from "react";
import {
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  Divider,
  ListItem,
  Grid,
  Tooltip,
} from "@mui/material";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import MenuBookOutlinedIcon from "@mui/icons-material/MenuBookOutlined";
import SupportAgentOutlinedIcon from "@mui/icons-material/SupportAgentOutlined";
import AttachMoneyOutlinedIcon from "@mui/icons-material/AttachMoneyOutlined";
import BugReportOutlinedIcon from "@mui/icons-material/BugReportOutlined";
import CodeOutlinedIcon from "@mui/icons-material/CodeOutlined";
import { useNavigate } from "react-router-dom";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

function NavigationDrawer() {
  const [isDrawerOpen, changeDrawerstate] = useState(false);
  const navigate = useNavigate();

  return (
    <Fragment>
      <Drawer open={isDrawerOpen} onClose={() => changeDrawerstate(false)}>
        {/* drawer list */}
        <Grid container alignItems="space-between" justifyContent="center">
          {/* drawer icon */}
          <Grid item xs={12}>
            <Tooltip title="close">
              <IconButton
                sx={{
                  marginBottom: ".5em",
                }}
                onClick={() => changeDrawerstate(false)}
              >
                <CloseRoundedIcon />
              </IconButton>
            </Tooltip>
            <List>
              <ListItem
                onClick={() => {
                  navigate("/Home");
                  changeDrawerstate(false);
                }}
              >
                <ListItemButton>
                  <Grid
                    container
                    spacing={5}
                    alignItems="center"
                    justifyContent="space-between"
                  >
                    <Grid item>
                      <ListItemText primary="Shop" />
                    </Grid>
                    <Grid item>
                      <ListItemIcon>
                        <ShoppingBagOutlinedIcon />
                      </ListItemIcon>
                    </Grid>
                  </Grid>
                </ListItemButton>
              </ListItem>
              <ListItem
                onClick={() => {
                  navigate("/About");
                  changeDrawerstate(false);
                }}
              >
                <ListItemButton>
                  <Grid
                    container
                    spacing={5}
                    alignItems="center"
                    justifyContent="space-between"
                  >
                    <Grid item>
                      <ListItemText primary="About" />
                    </Grid>
                    <Grid item>
                      <ListItemIcon>
                        <MenuBookOutlinedIcon />
                      </ListItemIcon>
                    </Grid>
                  </Grid>
                </ListItemButton>
              </ListItem>
              <ListItem
                onClick={() => {
                  navigate("/contact");
                  changeDrawerstate(false);
                }}
              >
                <ListItemButton>
                  <Grid
                    container
                    spacing={5}
                    alignItems="center"
                    justifyContent="space-between"
                  >
                    <Grid item>
                      <ListItemText primary="Contact" />
                    </Grid>
                    <Grid item>
                      <ListItemIcon>
                        <SupportAgentOutlinedIcon />
                      </ListItemIcon>
                    </Grid>
                  </Grid>
                </ListItemButton>
              </ListItem>
              <ListItem
                onClick={() => {
                  navigate("/Refund-policy");
                  changeDrawerstate(false);
                }}
              >
                <ListItemButton>
                  <Grid
                    container
                    spacing={5}
                    alignItems="center"
                    justifyContent="space-between"
                  >
                    <Grid item>
                      <ListItemText primary="Refund Policy" />
                    </Grid>
                    <Grid item>
                      <ListItemIcon>
                        <AttachMoneyOutlinedIcon />
                      </ListItemIcon>
                    </Grid>
                  </Grid>
                </ListItemButton>
              </ListItem>
              <a
                style={{
                  textDecoration: "none",
                }}
                href="https://forms.gle/sGhPmMXUpzAnqymSA"
                target="_blank"
              >
                <ListItem
                  onClick={() => {
                    changeDrawerstate(false);
                  }}
                >
                  <ListItemButton>
                    <Grid
                      container
                      spacing={5}
                      alignItems="center"
                      justifyContent="space-between"
                    >
                      <Grid item>
                        <ListItemText primary="Report a bug" />
                      </Grid>
                      <Grid item>
                        <ListItemIcon>
                          <BugReportOutlinedIcon />
                        </ListItemIcon>
                      </Grid>
                    </Grid>
                  </ListItemButton>
                </ListItem>
              </a>
              <a
                style={{
                  textDecoration: "none",
                }}
                href="https://github.com/BMohamedd?tab=repositories"
                target="_blank"
              >
                <ListItem>
                  <ListItemButton>
                    <Grid
                      container
                      spacing={5}
                      alignItems="center"
                      justifyContent="space-between"
                    >
                      <Grid item>
                        <ListItemText primary="View source code" />
                      </Grid>
                      <Grid item>
                        <ListItemIcon>
                          <CodeOutlinedIcon />
                        </ListItemIcon>
                      </Grid>
                    </Grid>
                  </ListItemButton>
                </ListItem>
              </a>
            </List>
            <Divider />
          </Grid>
          {/* drawer text */}
          <Grid item>
            <Typography variant="caption" align="center">
              &copy; moons {new Date().getFullYear()}
            </Typography>
          </Grid>
        </Grid>
      </Drawer>

      <IconButton
        sx={{
          color: "#fff",
        }}
        onClick={() => changeDrawerstate(true)}
      >
        <MenuRoundedIcon />
      </IconButton>
    </Fragment>
  );
}

export default NavigationDrawer;
