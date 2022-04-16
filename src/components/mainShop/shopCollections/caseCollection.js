import React, { useContext } from "react";
import { shoppingContext } from "../../contexts/shoppingcart/ShoppingContext";
import {
  Grid,
  Typography,
  CardContent,
  Card,
  CardActions,
  CardMedia,
  Button,
  IconButton,
  Tooltip,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import AddShoppingCartRoundedIcon from "@mui/icons-material/AddShoppingCartRounded";
import { Box } from "@mui/system";

const moonstages = "https://i.imgur.com/ldBz4jY.jpg";
const water = "https://i.imgur.com/Z2gLKFc.jpg";
const space = "https://i.imgur.com/Wfah1Ix.jpg";

function CaseCollection() {
  const navigate = useNavigate();
  const { addToShoppingCart } = useContext(shoppingContext);
  const handleViewMore = (e) => {
    navigate(`/product/${e.target.id}/12-99/phone-Case`);
  };
  const addDawnlight = () => {
    addToShoppingCart([
      "case",
      "IPhone",
      "DawnLigh",
      "12.99",
      water,
      "1",
      "null",
    ]);
  };
  const addSpaceTurtules = () => {
    addToShoppingCart([
      "case",
      "IPhone",
      "SpaceTurtules",
      "12.99",
      space,
      "1",
      "null",
    ]);
  };
  const addMoonStages = () => {
    addToShoppingCart([
      "case",
      "IPhone",
      "MoonStages",
      "12.99",
      moonstages,
      "1",
      "null",
    ]);
  };

  return (
    <Grid
      sx={{
        marginTop: "2em",
      }}
      container
      justifyContent="space-evenly"
      spacing={5}
      alignItems="center"
    >
      <Grid item xs={10} sm={6} md={3}>
        <Card
          sx={{
            width: "100%",
          }}
        >
          <CardMedia
            component="img"
            sx={{
              width: "100%",
            }}
            image={space}
          />
          <CardContent>
            <Typography varint="h5">SpaceTurtules</Typography>
            <Box>
              <Typography
                varint="h6"
                sx={{
                  textDecoration: "line-through",
                  display: "inline",
                }}
              >
                15.99£
              </Typography>
              <Typography
                varint="h6"
                sx={{ display: "inline", marginLeft: ".8em" }}
              >
                12.99£
              </Typography>
            </Box>
          </CardContent>
          <CardActions>
            <Grid container justifyContent="space-between">
              <Grid item>
                <Button
                  size="small"
                  id="SpaceTurtules"
                  onClick={handleViewMore}
                >
                  view
                </Button>
              </Grid>
              <Grid item>
                <Tooltip title="add to cart">
                  <IconButton id="space" onClick={addSpaceTurtules}>
                    <AddShoppingCartRoundedIcon />
                  </IconButton>
                </Tooltip>
              </Grid>
            </Grid>
          </CardActions>
        </Card>
      </Grid>
      <Grid item xs={10} sm={6} md={3}>
        <Card
          sx={{
            width: "100%",
          }}
        >
          <CardMedia
            component="img"
            sx={{
              width: "100%",
            }}
            image={moonstages}
          />
          <CardContent>
            <Typography varint="h5">MoonStages</Typography>
            <Box>
              <Typography
                varint="h6"
                sx={{
                  textDecoration: "line-through",
                  display: "inline",
                }}
              >
                15.99£
              </Typography>
              <Typography
                varint="h6"
                sx={{ display: "inline", marginLeft: ".8em" }}
              >
                12.99£
              </Typography>
            </Box>
          </CardContent>
          <CardActions>
            <Grid container justifyContent="space-between">
              <Grid item>
                <Button size="small" id="MoonStages" onClick={handleViewMore}>
                  view
                </Button>
              </Grid>
              <Grid item>
                <Tooltip title="add to cart">
                  <IconButton id="moonstages" onClick={addMoonStages}>
                    <AddShoppingCartRoundedIcon />
                  </IconButton>
                </Tooltip>
              </Grid>
            </Grid>
          </CardActions>
        </Card>
      </Grid>
      <Grid item xs={10} sm={6} md={3}>
        <Card
          sx={{
            width: "100%",
          }}
        >
          <CardMedia
            component="img"
            sx={{
              width: "100%",
            }}
            image={water}
          />
          <CardContent>
            <Typography varint="h5">DawnLigh</Typography>
            <Box>
              <Typography
                varint="h6"
                sx={{
                  textDecoration: "line-through",
                  display: "inline",
                }}
              >
                15.99£
              </Typography>
              <Typography
                varint="h6"
                sx={{ display: "inline", marginLeft: ".8em" }}
              >
                12.99£
              </Typography>
            </Box>
          </CardContent>
          <CardActions>
            <Grid container justifyContent="space-between">
              <Grid item>
                <Button size="small" id="DawnLigh" onClick={handleViewMore}>
                  view
                </Button>
              </Grid>
              <Grid item>
                <Tooltip title="add to cart">
                  <IconButton id="water" onClick={addDawnlight}>
                    <AddShoppingCartRoundedIcon />
                  </IconButton>
                </Tooltip>
              </Grid>
            </Grid>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  );
}

export default CaseCollection;
