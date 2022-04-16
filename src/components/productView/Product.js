import { Grid, Box, Tabs, Tab } from "@mui/material";
import TabContent from "./TabContent";
import BuyOptions from "./BuyOptions";
import { useParams } from "react-router-dom";
import React, { useState } from "react";

function Product() {
  const [tabsValue, setTabsValue] = useState(0);
  const params = useParams();
  const handleChange = (e, value) => {
    setTabsValue(value);
  };
  const products = {
    "Mossy-Moon-Hoodie": "https://i.imgur.com/GfM15Y9.jpg",
    "80's-Moon-Hoodie": "https://i.imgur.com/iTuHLCt.jpg",
    "Plain-Moon-Hoodie": "https://i.imgur.com/5F8J1WE.jpg",
    SpaceTurtules: "https://i.imgur.com/Wfah1Ix.jpg",
    MoonStages: "https://i.imgur.com/ldBz4jY.jpg",
    DawnLigh: "https://i.imgur.com/Z2gLKFc.jpg",
    "Classic-Mask-with-Awsesome-drawing": "https://i.imgur.com/7LS2di0.jpg",
    "Classic-Aqua-Mask": "https://i.imgur.com/d5Wd4T9.jpg",
    "Awsesome-Moon-Mask": "https://i.imgur.com/B6EnUfg.jpg",
  };

  const imgLink = products[params.id];

  const displayOBJ =
    params.type === "phone-Case" || params.type === "face-mask"
      ? { display: "none" }
      : null;

  return (
    <Box
      sx={{
        marginBottom: "5em",
        marginTop: "7em",
      }}
    >
      <Grid container justifyContent="center" spacing={5}>
        <Grid item xs={11} md={4.9}>
          <Box
            sx={{
              borderBottom: 1,
              borderColor: "divider",
              marginBottom: "1em",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Tabs
              value={tabsValue || 0}
              onChange={handleChange}
              sx={displayOBJ}
            >
              <Tab label="Preview" />
              <Tab label="Size Chart" />
            </Tabs>
          </Box>
          <TabContent img={imgLink} value={tabsValue} />
        </Grid>
        <Grid item xs={11} md={3.5}>
          <BuyOptions
            productName={params.id.split("-")}
            img={imgLink}
            productPrice={params.price.split("-")}
            productType={params.type}
          />
        </Grid>
      </Grid>
    </Box>
  );
}

export default Product;
