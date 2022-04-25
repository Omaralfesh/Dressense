import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { useState, useEffect } from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

import axios from "axios";

const Generated = () => {
  const [shirt, setShirt] = useState(null);
  useEffect(() => {
    axios
      .get("https://api.dressense.me/shirts/")
      .then((response) => {
        console.log(response.data[0].image);
        setShirt(response.data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);

  const [bottom, setBottom] = useState(null);
  useEffect(() => {
    axios
      .get("https://api.dressense.me/trousers/")
      .then((response) => {
        console.log(response.data);
        setBottom(response.data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);

  const [jackets, setJackets] = useState(null);
  useEffect(() => {
    axios
      .get("https://api.dressense.me/jumpers/")
      .then((response) => {
        console.log(response.data);
        setJackets(response.data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);

  const [shoes, setShoes] = useState(null);
  useEffect(() => {
    axios
      .get("https://api.dressense.me/shoes/")
      .then((response) => {
        console.log(response.data);
        setShoes(response.data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);

  return (
    <>
      {!(shirt && jackets && bottom && shoes) ? (
        <h1>Loading</h1>
      ) : (
        <>
          <Paper sx={{ maxWidth: 1100, margin: "auto", overflow: "hidden" }}>
            <AppBar
              position="static"
              color="default"
              elevation={0}
              sx={{ borderBottom: "1px solid rgba(0, 0, 0, 0.12)" }}
            >
              <Toolbar>
                <Grid container spacing={2} alignItems="center">
                  <Grid item xs>
                    <Typography variant="body1" color="initial">
                      Day 1
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Button variant="contained" sx={{ mr: 1 }}>
                      Shuffle Outfit
                    </Button>
                  </Grid>
                </Grid>
              </Toolbar>
            </AppBar>

            <ImageList
              sx={{ width: 1000, height: "auto" }}
              cols={4}
              rowHeight={"auto"}
            >
              <ImageListItem>
                <img src={shirt[0].image} alt="top" loading="lazy" />
              </ImageListItem>
              <ImageListItem>
                <img src={bottom[0].image} alt="jacket" loading="lazy" />
              </ImageListItem>
              <ImageListItem>
                <img src={jackets[0].image} alt="bottom" loading="lazy" />
              </ImageListItem>
              <ImageListItem>
                <img src={shoes[0].image} alt="shoes" loading="lazy" />
              </ImageListItem>
            </ImageList>
          </Paper>
          <Paper sx={{ maxWidth: 1100, margin: "auto", overflow: "hidden" }}>
            <AppBar
              position="static"
              color="default"
              elevation={0}
              sx={{ borderBottom: "1px solid rgba(0, 0, 0, 0.12)" }}
            >
              <Toolbar>
                <Grid container spacing={2} alignItems="center">
                  <Grid item xs>
                    <Typography variant="body1" color="initial">
                      Day 2
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Button variant="contained" sx={{ mr: 1 }}>
                      Shuffle Outfit
                    </Button>
                  </Grid>
                </Grid>
              </Toolbar>
            </AppBar>

            <ImageList
              sx={{ width: 1000, height: "auto" }}
              cols={4}
              rowHeight={"auto"}
            >
              <ImageListItem>
                <img src={shirt[1].image} alt="top" loading="lazy" />
              </ImageListItem>
              <ImageListItem>
                <img src={bottom[1].image} alt="jacket" loading="lazy" />
              </ImageListItem>
              <ImageListItem>
                <img src={jackets[1].image} alt="bottom" loading="lazy" />
              </ImageListItem>
              <ImageListItem>
                <img src={shoes[1].image} alt="shoes" loading="lazy" />
              </ImageListItem>
            </ImageList>
          </Paper>
          <Paper sx={{ maxWidth: 1100, margin: "auto", overflow: "hidden" }}>
            <AppBar
              position="static"
              color="default"
              elevation={0}
              sx={{ borderBottom: "1px solid rgba(0, 0, 0, 0.12)" }}
            >
              <Toolbar>
                <Grid container spacing={2} alignItems="center">
                  <Grid item xs>
                    <Typography variant="body1" color="initial">
                      Day 3
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Button variant="contained" sx={{ mr: 1 }}>
                      Shuffle Outfit
                    </Button>
                  </Grid>
                </Grid>
              </Toolbar>
            </AppBar>

            <ImageList
              sx={{ width: 1000, height: "auto" }}
              cols={4}
              rowHeight={"auto"}
            >
              <ImageListItem>
                <img src={shirt[2].image} alt="top" loading="lazy" />
              </ImageListItem>
              <ImageListItem>
                <img src={bottom[2].image} alt="jacket" loading="lazy" />
              </ImageListItem>
              <ImageListItem>
                <img src={jackets[2].image} alt="bottom" loading="lazy" />
              </ImageListItem>
              <ImageListItem>
                <img src={shoes[2].image} alt="shoes" loading="lazy" />
              </ImageListItem>
            </ImageList>
          </Paper>
          <Paper sx={{ maxWidth: 1100, margin: "auto", overflow: "hidden" }}>
            <AppBar
              position="static"
              color="default"
              elevation={0}
              sx={{ borderBottom: "1px solid rgba(0, 0, 0, 0.12)" }}
            >
              <Toolbar>
                <Grid container spacing={2} alignItems="center">
                  <Grid item xs>
                    <Typography variant="body1" color="initial">
                      Day 4
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Button variant="contained" sx={{ mr: 1 }}>
                      Shuffle Outfit
                    </Button>
                  </Grid>
                </Grid>
              </Toolbar>
            </AppBar>

            <ImageList
              sx={{ width: 1000, height: "auto" }}
              cols={4}
              rowHeight={"auto"}
            >
              <ImageListItem>
                <img src={shirt[3].image} alt="top" loading="lazy" />
              </ImageListItem>
              <ImageListItem>
                <img src={bottom[3].image} alt="jacket" loading="lazy" />
              </ImageListItem>
              <ImageListItem>
                <img src={jackets[3].image} alt="bottom" loading="lazy" />
              </ImageListItem>
              <ImageListItem>
                <img src={shoes[3].image} alt="shoes" loading="lazy" />
              </ImageListItem>
            </ImageList>
          </Paper>
          <Paper sx={{ maxWidth: 1100, margin: "auto", overflow: "hidden" }}>
            <AppBar
              position="static"
              color="default"
              elevation={0}
              sx={{ borderBottom: "1px solid rgba(0, 0, 0, 0.12)" }}
            >
              <Toolbar>
                <Grid container spacing={2} alignItems="center">
                  <Grid item xs>
                    <Typography variant="body1" color="initial">
                      Day 5
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Button variant="contained" sx={{ mr: 1 }}>
                      Shuffle Outfit
                    </Button>
                  </Grid>
                </Grid>
              </Toolbar>
            </AppBar>

            <ImageList
              sx={{ width: 1000, height: "auto" }}
              cols={4}
              rowHeight={"auto"}
            >
              <ImageListItem>
                <img src={shirt[4].image} alt="top" loading="lazy" />
              </ImageListItem>
              <ImageListItem>
                <img src={bottom[4].image} alt="jacket" loading="lazy" />
              </ImageListItem>
              <ImageListItem>
                <img src={jackets[4].image} alt="bottom" loading="lazy" />
              </ImageListItem>
              <ImageListItem>
                <img src={shoes[4].image} alt="shoes" loading="lazy" />
              </ImageListItem>
            </ImageList>
          </Paper>
        </>
      )}
    </>
  );
};

export default Generated;
