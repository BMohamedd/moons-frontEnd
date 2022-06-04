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
import AddShoppingCartRoundedIcon from "@mui/icons-material/AddShoppingCartRounded";
import { Box } from "@mui/system";
import { useNavigate } from "react-router-dom";

const mussymoon = "https://i.imgur.com/GfM15Y9.jpg";
const eightesmoon = "https://i.imgur.com/iTuHLCt.jpg";
const plainmoon = "https://i.imgur.com/5F8J1WE.jpg";

function ClothesCollection() {
  const { addToShoppingCart } = useContext(shoppingContext);
  const navigate = useNavigate();
  const handleViewMore = (e) => {
    navigate(`/product/${e.target.id}/30-99/clothes`);
  };

  const addMoosyMoon = () => {
    addToShoppingCart([
      "clothes",
      "null",
      "Mossy Moon Hoodie",
      "39.99",
      mussymoon,
      1,
      "medium",
    ]);
  };
  const add80s = () => {
    addToShoppingCart([
      "clothes",
      "null",
      "80's Moon Hoodie",
      "39.99",
      eightesmoon,
      1,
      "medium",
    ]);
  };
  const addPlainHoodie = () => {
    addToShoppingCart([
      "clothes",
      "null",
      "Plain Moon Hoodie",
      "39.99",
      plainmoon,
      1,
      "medium",
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
            image={mussymoon}
          />
          <CardContent>
            <Typography varint="h5" noWrap>
              Mossy Moon Hoodie
            </Typography>
            <Box>
              <Typography
                varint="h6"
                sx={{
                  textDecoration: "line-through",
                  display: "inline",
                }}
              >
                39.99£
              </Typography>
              <Typography
                varint="h6"
                sx={{ display: "inline", marginLeft: ".8em" }}
              >
                30.99£
              </Typography>
            </Box>
          </CardContent>
          <CardActions>
            <Grid container justifyContent="space-between">
              <Grid item>
                <Button
                  id="Mossy-Moon-Hoodie"
                  onClick={handleViewMore}
                  size="small"
                >
                  view
                </Button>
              </Grid>
              <Grid item>
                <Tooltip title="add to cart">
                  <IconButton onClick={addMoosyMoon}>
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
            image={eightesmoon}
          />
          <CardContent>
            <Typography varint="h5" noWrap>
              80's Moon Hoodie
            </Typography>
            <Box>
              <Typography
                varint="h6"
                sx={{
                  textDecoration: "line-through",
                  display: "inline",
                }}
              >
                39.99£
              </Typography>
              <Typography
                varint="h6"
                sx={{ display: "inline", marginLeft: ".8em" }}
              >
                30.99£
              </Typography>
            </Box>
          </CardContent>
          <CardActions>
            <Grid container justifyContent="space-between">
              <Grid item>
                <Button
                  id="80's-Moon-Hoodie"
                  onClick={handleViewMore}
                  size="small"
                >
                  view
                </Button>
              </Grid>
              <Grid item>
                <Tooltip title="add to cart">
                  <IconButton onClick={add80s}>
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
            image={plainmoon}
          />
          <CardContent>
            <Typography varint="h5">Plain Moon Hoodie</Typography>
            <Box>
              <Typography
                varint="h6"
                sx={{
                  textDecoration: "line-through",
                  display: "inline",
                }}
              >
                39.99£
              </Typography>
              <Typography
                varint="h6"
                sx={{ display: "inline", marginLeft: ".8em" }}
              >
                30.99£
              </Typography>
            </Box>
          </CardContent>
          <CardActions>
            <Grid container justifyContent="space-between">
              <Grid item>
                <Button
                  id="Plain-Moon-Hoodie"
                  onClick={handleViewMore}
                  size="small"
                >
                  view
                </Button>
              </Grid>
              <Grid item>
                <Tooltip title="add to cart">
                  <IconButton onClick={addPlainHoodie}>
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

export default ClothesCollection;
