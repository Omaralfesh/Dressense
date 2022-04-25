import "./HeroSection.css";
import Container from "react-bootstrap/Container";
import Typography from "@mui/material/Typography";
import AppleIcon from "@mui/icons-material/Apple";
import AndroidIcon from "@mui/icons-material/Android";
import WebIcon from "@mui/icons-material/Web";
import { Button } from "@mui/material";
import React from "react";
import ReactDOM from "react-dom";
import SignIn from "../SignIn";

const webBtnHandler = (e) => {
  e.preventDefault();
  ReactDOM.render(
    <React.StrictMode>
      <SignIn />
    </React.StrictMode>,
    document.getElementById("root")
  );
  console.log("Clicked");
};

const HeroSection = (props) => {
  return (
    <div className="hero">
      {props.children}
      <Container className="heroContainer">
        <div class="d-sm-flex align-items-center justify-content-between">
          <div className="heroContainer">
            <Typography
              sx={{ color: "#222831", fontWeight: "bold" }}
              variant="h2"
            >
              Your Smart Wardrobe
            </Typography>
            <h3>
              Get your outfits planned for the whole week and recommendations
              for new clothes
            </h3>

            <Button
              sx={{ marginRight: 2, marginTop: 2 }}
              size="large"
              variant="contained"
              startIcon={<AppleIcon />}
            >
              Download for IOS
            </Button>
            <Button
              sx={{ marginRight: 2, marginTop: 2 }}
              size="large"
              variant="contained"
              startIcon={<AndroidIcon />}
            >
              Download for Android
            </Button>
            <Button
              sx={{ marginRight: 2, marginTop: 2, width: "492px" }}
              size="large"
              variant="contained"
              startIcon={<WebIcon />}
              onClick={webBtnHandler}
            >
              Proceed to our Web Version
            </Button>
          </div>
        </div>
      </Container>

      {/* <Container>
        <div>
          <img
            className="img-fluid phone-img"
            src={weekPlanPic}
            alt="First slide"
          />
        </div>
      </Container> */}
    </div>
  );
};

export default HeroSection;
