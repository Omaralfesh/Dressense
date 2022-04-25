import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";

import IconButton from "@mui/material/IconButton";
import { Link } from "react-router-dom";

import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";

import InfoIcon from "@mui/icons-material/Info";

const allClothes = [
  {
    img: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
    title: "Tops",
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    title: "Bottoms",
  },
  {
    img: "https://images.unsplash.com/photo-1588099768531-a72d4a198538?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    title: "Shoes",
  },
  {
    img: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1036&q=80",
    title: "Jackets",
  },
];

const WardrobeContent = (props) => {
  return (
    <Paper sx={{ maxWidth: 1000, margin: "auto", overflow: "hidden" }}>
      {/* <AppBar
        position="static"
        color="default"
        elevation={0}
        sx={{ borderBottom: "1px solid rgba(0, 0, 0, 0.12)" }}
      >
        <Toolbar>
          <Grid container spacing={2} alignItems="center" justify="center">
            <Grid item>
              <Link style={{ textDecoration: "none" }} to={"/"}>
                <Button variant="contained" component="span" sx={{ mr: 2 }}>
                  Add a New Item
                </Button>
              </Link>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar> */}

      <ImageList
        sx={{ width: 1000, height: "auto" }}
        cols={4}
        rowHeight={"auto"}
      >
        {allClothes.map((item) => (
          <ImageListItem key={item.img}>
            <img
              src={`${item.img}?w=248&fit=crop&auto=format`}
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            />
            <ImageListItemBar
              title={item.title}
              subtitle={item.author}
              actionIcon={
                <IconButton
                  sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                  aria-label={`info about ${item.title}`}
                >
                  <InfoIcon />
                </IconButton>
              }
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Paper>
  );
};

export default WardrobeContent;
