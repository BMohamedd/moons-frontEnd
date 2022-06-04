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
import { useNavigate } from "react-router-dom";

import { Box } from "@mui/system";

const classicMask = "https://i.imgur.com/7LS2di0.jpg";
const classicAquaMask = "https://i.imgur.com/d5Wd4T9.jpg";
const moonMask = "https://i.imgur.com/B6EnUfg.jpg";

function ClothesCollection() {
  const { addToShoppingCart } = useContext(shoppingContext);

  const navigate = useNavigate();
  const handleViewMore = (e) => {
    navigate(`/product/${e.target.id}/5-99/face-mask`);
  };

  const addclassicMask = () => {
    addToShoppingCart([
      "masks",
      "null",
      "Classic Mask with Awsesome drawing",
      "10.99",
      classicMask,
      "1",
      "medium",
    ]);
  };
  const addAquaMask = () => {
    addToShoppingCart([
      "masks",
      "null",
      "Classic Aqua Mask",
      "10.99",
      classicAquaMask,
      "1",
      "medium",
    ]);
  };
  const addMoonMask = () => {
    addToShoppingCart([
      "masks",
      "null",
      "Awsesome Moon Mask",
      "10.99",
      moonMask,
      "1",
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
            image={classicMask}
          />
          <CardContent>
            <Typography varint="h5" noWrap>
              Classic Mask with Awsesome drawing
            </Typography>
            <Box>
              <Typography
                varint="h6"
                sx={{
                  textDecoration: "line-through",
                  display: "inline",
                }}
              >
                10.99£
              </Typography>
              <Typography
                varint="h6"
                sx={{ display: "inline", marginLeft: ".8em" }}
              >
                5.99£
              </Typography>
            </Box>
          </CardContent>
          <CardActions>
            <Grid container justifyContent="space-between">
              <Grid item>
                <Button
                  id="Classic-Mask-with-Awsesome-drawing"
                  onClick={handleViewMore}
                  size="small"
                >
                  view
                </Button>
              </Grid>
              <Grid item>
//                 <Tooltip title="add to cart">
//                   <IconButton onClick={addclassicMask}>
//                     <AddShoppingCartRoundedIcon />
//                   </IconButton>
//                 </Tooltip>
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
            image={classicAquaMask}
          />
          <CardContent>
            <Typography varint="h5" noWrap>
              Classic Aqua Mask
            </Typography>
            <Box>
              <Typography
                varint="h6"
                sx={{
                  textDecoration: "line-through",
                  display: "inline",
                }}
              >
                10.99£
              </Typography>
              <Typography
                varint="h6"
                sx={{ display: "inline", marginLeft: ".8em" }}
              >
                5.99£
              </Typography>
            </Box>
          </CardContent>
          <CardActions>
            <Grid container justifyContent="space-between">
              <Grid item>
                <Button
                  id="Classic-Aqua-Mask"
                  onClick={handleViewMore}
                  size="small"
                >
                  view
                </Button>
              </Grid>
              <Grid item>
//                 <Tooltip title="add to cart">
//                   <IconButton onClick={addAquaMask}>
//                     <AddShoppingCartRoundedIcon />
//                   </IconButton>
//                 </Tooltip>
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
            image={moonMask}
          />
          <CardContent>
            <Typography varint="h5">Awsesome Moon Mask</Typography>
            <Box>
              <Typography
                varint="h6"
                sx={{
                  textDecoration: "line-through",
                  display: "inline",
                }}
              >
                10.99£
              </Typography>
              <Typography
                varint="h6"
                sx={{ display: "inline", marginLeft: ".8em" }}
              >
                5.99£
              </Typography>
            </Box>
          </CardContent>
          <CardActions>
            <Grid container justifyContent="space-between">
              <Grid item>
                <Button
                  id="Awsesome-Moon-Mask"
                  onClick={handleViewMore}
                  size="small"
                >
                  view
                </Button>
              </Grid>
              <Grid item>
//                 <Tooltip title="add to cart">
//                   <IconButton onClick={addMoonMask}>
//                     <AddShoppingCartRoundedIcon />
//                   </IconButton>
//                 </Tooltip>
              </Grid>
            </Grid>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  );
}

export default ClothesCollection;
