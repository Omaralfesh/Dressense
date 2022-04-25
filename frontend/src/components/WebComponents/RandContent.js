import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import RefreshIcon from "@mui/icons-material/Refresh";
import Box from "@mui/material/Box";
import { styled } from '@mui/material/styles';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Stack from '@mui/material/Stack';
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import InfoIcon from '@mui/icons-material/Info';

const RandContent = (props) => {
    return (
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
                    {props.date} Press the button to generate a random outfit for the day!
                  </Typography>
                </Grid>
                <Grid item>
                  <Button variant="contained" sx={{ mr: 1 }}>
                    Random Outfit
                  </Button>
                </Grid>
              </Grid>
            </Toolbar>
          </AppBar>
    
          <ImageList sx={{ width: 1000, height: "auto" }} cols={4} rowHeight={"auto"}>
            <ImageListItem>
              <img src={props.topImg} alt="top" loading="lazy" />
            </ImageListItem>
            <ImageListItem>
              <img src={props.jacketImg} alt="jacket" loading="lazy" />
            </ImageListItem>
            <ImageListItem>
              <img src={props.bottomImg} alt="bottom" loading="lazy" />
            </ImageListItem>
            <ImageListItem>
              <img src={props.shoesImg} alt="shoes" loading="lazy" />
            </ImageListItem>
          </ImageList>
        </Paper>
      );
  };
  
  export default RandContent;