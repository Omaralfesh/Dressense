import { createTheme, ThemeProvider, BottomNavigation } from "@mui/material";
import Navigation from "./components/LandingPage/Navigation";
import HeroSection from "./components/LandingPage/HeroSection";
import Features from "./components/LandingPage/Features";
import { Route, Switch } from "react-router-dom";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Paperbase from "./components/WebComponents/Paperbase";
import Logout from "./components/logout";

const theme = createTheme({
  palette: {
    // type: "light",
    primary: {
      main: "#222831",
    },
    secondary: {
      main: "#eeeeee",
    },
  },
  spacing: 8,
});

function setTextSize(size) {
  sessionStorage.setItem("size", size);
  Paperbase.theme.fontSize = size + "%";
}

function getTextSize() {
  let size = sessionStorage.getItem("size");
  document.body.style.fontSize = size + "%";
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Switch>
        <Route path="/" exact>
          <HeroSection>
            <Navigation />
            {/* <ResponsiveAppBar /> */}
          </HeroSection>
          <Features />
        </Route>
        <Route path="/login">
          <SignIn />
        </Route>
        <Route path="/signup">
          <SignUp />
        </Route>
        <Route path="/logout">
          <Logout />
        </Route>
        <Route path="/home">
          <Paperbase />
        </Route>
      </Switch>
    </ThemeProvider>
  );
}

export default App;
