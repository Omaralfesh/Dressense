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
import { useState, useContext } from "react";
import { Route, Switch } from "react-router-dom";
import WeeklyPlan from "./WeeklyPlan";
import WardrobeContent from "./WardrobeContent";
import RandContent from "./RandContent";
import Dashboard from "./Dashboard";
import CookieConsent from "react-cookie-consent";
import SettingsP from "./SettingsP";
import PrivPol from "./PrivPol";
import SavedOutfits from "./SavedOutfits";
import Shopping from "./Shopping";

export default function Content() {
  if (true) {
    return (
      <Switch>
        <Route path="/home/week">
          <WeeklyPlan />
        </Route>

        <Route path="/home/shopping">
          <Shopping />
        </Route>

        <Route path="/home/wardrobe">
          <Grid
            container
            direction="column"
            justifyContent="space-evenly"
            alignItems="center"
            spacing={5}
          >
            <Grid item>
              <WardrobeContent />
            </Grid>
          </Grid>
        </Route>

        <Route path="/home/r">
          <Grid
            container
            direction="column"
            justifyContent="space-evenly"
            alignItems="center"
            spacing={5}
          >
            <Grid item>
              <RandContent />
            </Grid>
          </Grid>
        </Route>

        <Route path="/home/settings">
          <Grid
            container
            direction="column"
            justifyContent="space-evenly"
            alignItems="center"
            spacing={5}
          >
            <Grid item>
              <SettingsP />
            </Grid>
          </Grid>
        </Route>

        <Route path="/home/pp">
          <Grid
            container
            direction="column"
            justifyContent="space-evenly"
            alignItems="center"
            spacing={5}
          >
            <Grid item>
              <PrivPol />
            </Grid>
          </Grid>
        </Route>

        <Route path="/home/saved">
          <Grid
            container
            direction="column"
            justifyContent="space-evenly"
            alignItems="center"
            spacing={5}
          >
            <Grid item>
              <SavedOutfits />
            </Grid>
          </Grid>
        </Route>

        <Route path="/home">
          <Grid
            container
            direction="column"
            justifyContent="space-evenly"
            alignItems="center"
            spacing={5}
          >
            <Grid item>
              <Dashboard />
            </Grid>
          </Grid>
        </Route>
      </Switch>
    );
  }
}
