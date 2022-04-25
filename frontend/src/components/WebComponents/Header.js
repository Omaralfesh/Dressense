import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import HelpIcon from "@mui/icons-material/Help";
import IconButton from "@mui/material/IconButton";
import Link from "@mui/material/Link";
import MenuIcon from "@mui/icons-material/Menu";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import Toolbar from "@mui/material/Toolbar";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import { Route, Switch } from "react-router-dom";

const lightColor = "rgba(255, 255, 255, 0.7)";

function Header(props) {
  const { onDrawerToggle } = props;

  return (
    <React.Fragment>
      <AppBar color="primary" position="sticky" elevation={0}>
        <Toolbar>
          <Grid container spacing={1} alignItems="center">
            <Grid sx={{ display: { sm: "none", xs: "block" } }} item>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={onDrawerToggle}
                edge="start"
              >
                <MenuIcon />
              </IconButton>
            </Grid>
            <Grid item xs />
            <Grid item></Grid>
            <Grid item>
              <Tooltip title="Alerts • No alerts">
                <IconButton color="inherit">
                  <NotificationsIcon />
                </IconButton>
              </Tooltip>
            </Grid>
            <Grid item>
              <IconButton color="inherit" sx={{ p: 0.5 }}>
                <Avatar src="/static/images/avatar/1.jpg" alt="My Avatar" />
              </IconButton>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <AppBar
        component="div"
        color="primary"
        position="static"
        elevation={0}
        sx={{ zIndex: 0 }}
      >
        <Switch>
          <Route path="/home/week">
            <Toolbar>
              <Grid container alignItems="center" spacing={1}>
                <Grid item xs>
                  <Typography color="inherit" variant="h5" component="h1">
                    Weekly Plan
                  </Typography>
                </Grid>
              </Grid>
            </Toolbar>
            <AppBar
              component="div"
              position="static"
              elevation={0}
              sx={{ zIndex: 0 }}
            ></AppBar>
          </Route>

          <Route path="/home/wardrobe">
            <Toolbar>
              <Grid container alignItems="center" spacing={1}>
                <Grid item xs>
                  <Typography color="inherit" variant="h5" component="h1">
                    Wardrobe
                  </Typography>
                </Grid>
              </Grid>
            </Toolbar>
          </Route>

          <Route path="/home/r">
            <Toolbar>
              <Grid container alignItems="center" spacing={1}>
                <Grid item xs>
                  <Typography color="inherit" variant="h5" component="h1">
                    Random Outfit Generator
                  </Typography>
                </Grid>
              </Grid>
            </Toolbar>
          </Route>

          <Route path="/home/settings">
            <Toolbar>
              <Grid container alignItems="center" spacing={1}>
                <Grid item xs>
                  <Typography color="inherit" variant="h5" component="h1">
                    Settings
                  </Typography>
                </Grid>
              </Grid>
            </Toolbar>
          </Route>

          <Route path="/home/pp">
            <Toolbar>
              <Grid container alignItems="center" spacing={1}>
                <Grid item xs>
                  <Typography color="inherit" variant="h5" component="h1">
                    Dressense’s Privacy Policy
                  </Typography>
                </Grid>
              </Grid>
            </Toolbar>
          </Route>

          <Route path="/home/week">
            <Toolbar>
              <Grid container alignItems="center" spacing={1}>
                <Grid item xs>
                  <Typography color="inherit" variant="h5" component="h1">
                    Weekly Plan
                  </Typography>
                </Grid>
              </Grid>
            </Toolbar>
          </Route>

          <Route path="/home/wardrobe">
            <Toolbar>                
              <Grid container alignItems="center" spacing={1}>
                <Grid item xs>
                  <Typography color="inherit" variant="h5" component="h1">
                    Wardrobe
                  </Typography>
                </Grid>
              </Grid>
            </Toolbar>
          </Route>

          <Route path="/home/saved">
            <Toolbar>
              <Grid container alignItems="center" spacing={1}>
                <Grid item xs>
                    <Typography color="inherit" variant="h5" component="h1">
                        Saved Outfits
                    </Typography>
                </Grid>
              </Grid>
            </Toolbar>
          </Route>
          
          <Route path="/home">
            <Toolbar>
              <Grid container alignItems="center" spacing={1}>
                <Grid item xs>
                  <Typography color="inherit" variant="h5" component="h1">
                    Dashboard
                  </Typography>
                </Grid>
              </Grid>
            </Toolbar>
          </Route>

          </Switch>
      </AppBar>
    </React.Fragment>
  );
}

Header.propTypes = {
  onDrawerToggle: PropTypes.func.isRequired,
};

export default Header;
