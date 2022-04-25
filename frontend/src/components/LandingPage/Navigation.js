import { ListGroup, Navbar } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { NavDropdown } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Navigation.css";
import Button from "@mui/material/Button";
import { AppBar, Toolbar, Link } from "@mui/material";
import { Typography } from "@mui/material";
import CheckroomIcon from "@mui/icons-material/Checkroom";

const Navigation = () => {
  return (
    <AppBar
      position="static"
      color="transparent"
      elevation={0}
      sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
    >
      <Toolbar sx={{ flexWrap: "wrap" }}>
        <Typography
          variant="h6"
          color="inherit"
          noWrap
          sx={{ fontWeight: "bold", flexGrow: 1 }}
        >
          <CheckroomIcon />
          Dressense
        </Typography>
        <nav>
          <Link
            variant="contained"
            color="text.primary"
            href="#"
            sx={{ my: 1, mx: 1.5 }}
          >
            Features
          </Link>
        </nav>
        <Button href="#" variant="contained" sx={{ my: 1, mx: 1.5 }}>
          Login
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navigation;
