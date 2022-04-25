import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import AppBar from "@mui/material/AppBar";
import IconButton from "@mui/material/IconButton";
import { Link } from "react-router-dom";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import DeleteIcon from "@mui/icons-material/Delete";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Clothes() {
  const [shows, setShows] = useState(true);
  const handleShows = () => {
    setShows(true);
  };

  const [tops, setTops] = useState(null);
  useEffect(() => {
    axios
      .get("https://api.dressense.me/shirts/")
      .then((response) => {
        setTops(response.data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);

  const [bottoms, setBottoms] = useState(null);
  useEffect(() => {
    axios
      .get("https://api.dressense.me/trousers/")
      .then((response) => {
        setBottoms(response.data);
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
        setShoes(response.data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);

  return (
    <Grid
      container
      direction="column"
      justifyContent="space-evenly"
      alignItems="center"
      spacing={5}
    >
      <Grid item>
        <Paper sx={{ maxWidth: 3000, margin: "auto", overflow: "hidden" }}>
          <AppBar
            position="static"
            color="default"
            elevation={0}
            sx={{ borderBottom: "1px solid rgba(0, 0, 0, 0.12)" }}
          >
            <Toolbar>
              <Grid container spacing={2} alignItems="center" justify="center">
                <Grid item>
                  <Typography variant="h5" color="initial">
                    Tops
                  </Typography>
                </Grid>
              </Grid>
            </Toolbar>
          </AppBar>

          <ImageList cols={6} sx={{ width: "auto", height: "auto" }}>
            {!tops ? (
              <p>Loading</p>
            ) : (
              tops.map((item) => (
                <>
                  <ImageListItem key={item.id}>
                    <img
                      src={`${item.image}?w=248&fit=crop&auto=format`}
                      alt={item.title}
                      loading="lazy"
                    />
                    <ImageListItemBar
                      title={
                        <Typography variant="body1" color="initial">
                          <ul>
                            <li>{item.brand}</li>
                            <li>{item.colour}</li>
                            <li>{item.fit}</li>
                            <li>{item.occasion}</li>
                          </ul>
                        </Typography>
                      }
                      //   subtitle={
                      //     <ul>
                      //       <li>Formal</li>
                      //       <li>Tight</li>
                      //     </ul>
                      //   }
                      position="below"
                    />
                    <IconButton aria-label="delete" size="large">
                      <DeleteIcon />
                    </IconButton>{" "}
                  </ImageListItem>
                </>
              ))
            )}
          </ImageList>
        </Paper>
        {!shows ? (
          <p></p>
        ) : (
          <ImageListItem>
            <img
              src={`https://www.google.com/url?sa=i&url=https%3A%2F%2Fcreativemarket.com%2FDikarte%2F4124390-T-Shirt-Mock-Up-on-Hanger&psig=AOvVaw0ONcu51tmXsCo_jPKUKaYp&ust=1648335926175000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCNDy6_yv4vYCFQAAAAAdAAAAABAF`}
              alt={"ss"}
              loading="lazy"
            />
            <ImageListItemBar
              title={<Typography variant="body1" color="initial"></Typography>}
              //   subtitle={
              //     <ul>
              //       <li>Formal</li>
              //       <li>Tight</li>
              //     </ul>
              //   }
              position="below"
            />
            <IconButton aria-label="delete" size="large">
              <DeleteIcon />
            </IconButton>{" "}
          </ImageListItem>
        )}
      </Grid>
      <Grid item>
        <Paper sx={{ maxWidth: 3000, margin: "auto", overflow: "hidden" }}>
          <AppBar
            position="static"
            color="default"
            elevation={0}
            sx={{ borderBottom: "1px solid rgba(0, 0, 0, 0.12)" }}
          >
            <Toolbar>
              <Grid container spacing={2} alignItems="center" justify="center">
                <Grid item>
                  <Typography variant="h5" color="initial">
                    Bottoms
                  </Typography>
                </Grid>
              </Grid>
            </Toolbar>
          </AppBar>

          <ImageList cols={6} sx={{ width: "auto", height: "auto" }}>
            {!bottoms ? (
              <p>Loading</p>
            ) : (
              bottoms.map((item) => (
                <ImageListItem key={item.id}>
                  <img
                    src={`${item.image}?w=248&fit=crop&auto=format`}
                    alt={item.title}
                    loading="lazy"
                  />
                  <ImageListItemBar
                    title={
                      <Typography variant="body1" color="initial">
                        <ul>
                          <li>{item.brand}</li>
                          <li>{item.colour}</li>
                          <li>{item.fit}</li>
                          <li>{item.occasion}</li>
                        </ul>
                      </Typography>
                    }
                    //   subtitle={
                    //     <ul>
                    //       <li>Formal</li>
                    //       <li>Tight</li>
                    //     </ul>
                    //   }
                    position="below"
                  />
                  <IconButton aria-label="delete" size="large">
                    <DeleteIcon />
                  </IconButton>{" "}
                </ImageListItem>
              ))
            )}
          </ImageList>
        </Paper>
      </Grid>
      <Grid item>
        <Paper sx={{ maxWidth: 3000, margin: "auto", overflow: "hidden" }}>
          <AppBar
            position="static"
            color="default"
            elevation={0}
            sx={{ borderBottom: "1px solid rgba(0, 0, 0, 0.12)" }}
          >
            <Toolbar>
              <Grid container spacing={2} alignItems="center" justify="center">
                <Grid item>
                  <Typography variant="h5" color="initial">
                    Jackets
                  </Typography>
                </Grid>
              </Grid>
            </Toolbar>
          </AppBar>

          <ImageList cols={6} sx={{ width: "auto", height: "auto" }}>
            {!jackets ? (
              <p>Loading</p>
            ) : (
              jackets.map((item) => (
                <ImageListItem key={item.id}>
                  <img
                    src={`${item.image}?w=248&fit=crop&auto=format`}
                    alt={item.title}
                    loading="lazy"
                  />
                  <ImageListItemBar
                    title={
                      <Typography variant="body1" color="initial">
                        <ul>
                          <li>{item.brand}</li>
                          <li>{item.colour}</li>
                          <li>{item.fit}</li>
                          <li>{item.occasion}</li>
                        </ul>
                      </Typography>
                    }
                    //   subtitle={
                    //     <ul>
                    //       <li>Formal</li>
                    //       <li>Tight</li>
                    //     </ul>
                    //   }
                    position="below"
                  />
                  <IconButton aria-label="delete" size="large">
                    <DeleteIcon />
                  </IconButton>{" "}
                </ImageListItem>
              ))
            )}
          </ImageList>
        </Paper>
      </Grid>
      <Grid item>
        <Paper sx={{ maxWidth: 3000, margin: "auto", overflow: "hidden" }}>
          <AppBar
            position="static"
            color="default"
            elevation={0}
            sx={{ borderBottom: "1px solid rgba(0, 0, 0, 0.12)" }}
          >
            <Toolbar>
              <Grid container spacing={2} alignItems="center" justify="center">
                <Grid item>
                  <Typography variant="h5" color="initial">
                    Shoes
                  </Typography>
                </Grid>
              </Grid>
            </Toolbar>
          </AppBar>

          <ImageList cols={6} sx={{ width: "auto", height: "auto" }}>
            {!shoes ? (
              <p>Loading</p>
            ) : (
              shoes.map((item) => (
                <ImageListItem key={item.id}>
                  <img
                    src={`${item.image}?w=248&fit=crop&auto=format`}
                    alt={item.title}
                    loading="lazy"
                  />
                  <ImageListItemBar
                    title={
                      <Typography variant="body1" color="initial">
                        <ul>
                          <li>{item.brand}</li>
                          <li>{item.colour}</li>
                          <li>{item.fit}</li>
                          <li>{item.occasion}</li>
                        </ul>
                      </Typography>
                    }
                    //   subtitle={
                    //     <ul>
                    //       <li>Formal</li>
                    //       <li>Tight</li>
                    //     </ul>
                    //   }
                    position="below"
                  />
                  <IconButton aria-label="delete" size="large">
                    <DeleteIcon />
                  </IconButton>{" "}
                </ImageListItem>
              ))
            )}
          </ImageList>
        </Paper>
      </Grid>
    </Grid>
  );
}
