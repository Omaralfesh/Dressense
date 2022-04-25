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
import Generated from "./Generated";

const WeeklyPlan = (props) => {
  let day1 = new Date();
  let day2 = new Date(day1.getTime() + 1 * 24 * 60 * 60 * 1000);
  let day3 = new Date(day1.getTime() + 2 * 24 * 60 * 60 * 1000);
  let day4 = new Date(day1.getTime() + 3 * 24 * 60 * 60 * 1000);
  let day5 = new Date(day1.getTime() + 4 * 24 * 60 * 60 * 1000);
  let day6 = new Date(day1.getTime() + 5 * 24 * 60 * 60 * 1000);
  let day7 = new Date(day1.getTime() + 6 * 24 * 60 * 60 * 1000);

  const outFits = [
    {
      id: 1,
      date: `Day1: ${day1.toDateString()}`,
      topImg:
        "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
      bottomImg:
        "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=794&q=80",
      shoesImg:
        "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=930&q=80",
      jacketImg:
        "https://images.unsplash.com/photo-1543076447-215ad9ba6923?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80",
    },
    {
      id: 2,
      date: `Day2: ${day2.toDateString()}`,
      topImg:
        "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1544&q=80",
      bottomImg:
        "https://images.unsplash.com/photo-1510734790177-c931e3956547?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1746&q=80",
      shoesImg:
        "https://images.unsplash.com/photo-1494496195158-c3becb4f2475?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
      jacketImg:
        "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80",
    },
    {
      id: 3,
      date: `Day3: ${day3.toDateString()}`,
      topImg:
        "https://images.unsplash.com/photo-1520591799316-6b30425429aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
      bottomImg:
        "https://images.unsplash.com/photo-1510734790177-c931e3956547?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1746&q=80",
      shoesImg:
        "https://images.unsplash.com/photo-1620114884229-65d21f8c9423?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      jacketImg:
        "https://images.unsplash.com/photo-1561047825-2b267fb14d58?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    },
  ];

  const handleShuffleBtn = (id) => {
    outFits[id] = "the new shuffled outfit";
  };
  return (
    <>
      {/* <Generated /> */}
      <Grid
        container
        direction="column"
        justifyContent="space-evenly"
        alignItems="center"
        spacing={5}
      >
        {" "}
        {outFits.map((outfit) => (
          <Grid item>
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
                        {outfit.date}
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Button
                        // onClick={handleShuffleBtn(outfit.id)}
                        variant="contained"
                        sx={{ mr: 1 }}
                      >
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
                  <img src={outfit.topImg} alt="top" loading="lazy" />
                </ImageListItem>
                <ImageListItem>
                  <img src={outfit.jacketImg} alt="jacket" loading="lazy" />
                </ImageListItem>
                <ImageListItem>
                  <img src={outfit.bottomImg} alt="bottom" loading="lazy" />
                </ImageListItem>
                <ImageListItem>
                  <img src={outfit.shoesImg} alt="shoes" loading="lazy" />
                </ImageListItem>
              </ImageList>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default WeeklyPlan;
