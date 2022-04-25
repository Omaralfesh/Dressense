import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Button from '@mui/material/Button';
import './FontB.css';
import './Paperbase';
import { useState } from "react";

const SettingsP = (props) => {
  const [fontSize, setFontSize] =  React.useState(14);

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
            <Grid item xs style={{fontSize: `${fontSize}px`}}>
              <h1>Dressense Privacy Policy</h1> 
              <p> To see our privacy policy, <a href="/home/pp">click here</a>.</p>

              <p>To adjust font sizes on Dressense:</p>
              <button onClick={() => setFontSize(fontSize + 1)}>+ Increase</button>
              <button onClick={() => setFontSize(fontSize - 1)}>- Decrease</button>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </Paper>
  );
};

export default SettingsP;