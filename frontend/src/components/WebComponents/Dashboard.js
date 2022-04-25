import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import CookiePopUp from "./CookiePopUp";

const Dashboard = (props) => {
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
                {props.date} This is your main dashboard! Check out the tabs on
                the left to explore
              </Typography>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <CookiePopUp>
      </CookiePopUp>
    </Paper>
  );
};

export default Dashboard;
