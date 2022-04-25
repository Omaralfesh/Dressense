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
import { styled } from "@mui/material/styles";
import MenuItem from "@mui/material/MenuItem";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Card } from "@mui/material";
import Wardrobe from "./Wardrobe";
import Clothes from "./Clothes";
import axios from "axios";

const Input = styled("input")({
  display: "none",
});

const WardrobeContent = (props) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const [brand, setBrand] = React.useState("");

  const handleBrandChange = (event) => {
    setBrand(event.target.value);
  };

  const [category, setCategory] = React.useState("");

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const categories = [
    {
      value: "top",
      label: "Top",
    },
    {
      value: "bottom",
      label: "Bottom",
    },
    {
      value: "shoes",
      label: "Shoes",
    },
    {
      value: "jacket",
      label: "Jacket",
    },
  ];

  const [itemPattern, setItemPattern] = React.useState("");

  const handlePatternChange = (event) => {
    setItemPattern(event.target.value);
  };

  const patterns = [
    {
      value: "striped",
      label: "Striped",
    },
    {
      value: "plain",
      label: "Plain",
    },
  ];

  const [color, setColor] = React.useState("");

  const handleColorChange = (event) => {
    setColor(event.target.value);
  };

  const colors = [
    {
      value: "green",
      label: "Green",
    },
    {
      value: "yellow",
      label: "Yellow",
    },
    {
      value: "black",
      label: "Black",
    },
    {
      value: "red",
      label: "Red",
    },
    {
      value: "blue",
      label: "Blue",
    },
  ];

  const [fit, setFit] = React.useState("");

  const handleFitChange = (event) => {
    setFit(event.target.value);
  };

  const fits = [
    {
      value: "loose",
      label: "Loose",
    },
    {
      value: "tight",
      label: "Tight",
    },
  ];

  const [occasion, setOccasion] = React.useState("");

  const handleOccasionChange = (event) => {
    setOccasion(event.target.value);
  };

  const occasions = [
    {
      value: "casual",
      label: "Casual",
    },
    {
      value: "formal",
      label: "Formal",
    },
  ];

  const [file, setFile] = React.useState(null);
  const uploadBtnHandler = (event) => {
    // event.preventDefault();
    if (!file) {
      setColor("black");
      setFit("tight");
      setOccasion("casual");
      setCategory("jacket");
      setItemPattern("plain");
    } else {
      setColor("black");
      setFit("9.5");
      setOccasion("casual");
      setCategory("shoes");
      setItemPattern("plain");
    }
    setFile(event.target.files[0]);

    console.log(event.target.files[0]);
  };

  const handleClose = async (event) => {
    event.preventDefault();
    console.log(file);
    // let data = new FormData();
    // data.append("image", file);
    // data.append("type", category);
    // data.append("colour", color);
    // data.append("fit", fit);
    // data.append("occasion", occasion);
    // data.append("brand", brand);
    // data.append("pattern", itemPattern);
    // for (let pair of data.entries()) {
    //   console.log(pair[0] + ", " + pair[1]);
    // }
    // const obj = { colour: "yellow" };
    // // data.append("colour", "blue");

    // const response = await fetch("https://api.dressense.me/colour/", {
    //   method: "POST", // *GET, POST, PUT, DELETE, etc.
    //   mode: "cors", // no-cors, *cors, same-origin
    //   cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    //   credentials: "same-origin", // include, *same-origin, omit
    //   headers: {
    //     "Content-Type": "multipart/form-data",
    //     // 'Content-Type': 'application/x-www-form-urlencoded',
    //   },
    //   redirect: "follow", // manual, *follow, error
    //   referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    //   body: JSON.stringify(obj), // body data type must match "Content-Type" header
    // });

    setOpen(false);
  };

  return (
    <>
      <Grid
        container
        direction="column"
        justifyContent="space-evenly"
        alignItems="center"
        spacing={5}
      >
        <Grid item>
          <Button variant="contained" onClick={handleClickOpen}>
            Add a new item
          </Button>
          <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Add a new item</DialogTitle>
            <DialogContent>
              <DialogContentText>
                To add the new item, please enter the item name, brand, fit,
                color, and upload a picture of the item.
              </DialogContentText>

              <TextField
                margin="dense"
                id="brand"
                label="Brand"
                type="text"
                fullWidth
                variant="standard"
                onChange={handleBrandChange}
              />

              <TextField
                select
                // fullWidth
                margin="dense"
                value={itemPattern}
                helperText="Please select item type"
                id="itemPattern"
                label="Pattern"
                type="text"
                // fullWidth
                variant="standard"
                onChange={handlePatternChange}
              >
                {patterns.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>

              <TextField
                id="outlined-select-category"
                select
                // fullWidth
                margin="dense"
                label="Type"
                variant="standard"
                value={category}
                onChange={handleCategoryChange}
                helperText="Please select item type"
              >
                {categories.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
              <TextField
                id="outlined-select-category"
                select
                // fullWidth
                margin="dense"
                label="Color"
                variant="standard"
                value={color}
                onChange={handleColorChange}
                helperText="Please select a Color"
              >
                {colors.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
              <TextField
                id="outlined-select-category"
                select
                // fullWidth
                margin="dense"
                label="Fit"
                variant="standard"
                value={fit}
                onChange={handleFitChange}
                helperText="Please select item fitting"
              >
                {fits.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
              <TextField
                id="outlined-select-category"
                select
                fullWidth
                margin="dense"
                label="Occasion"
                variant="standard"
                value={occasion}
                onChange={handleOccasionChange}
                helperText="Please select suitable occasion type"
              >
                {occasions.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>

              <label htmlFor="contained-button-file">
                <Input
                  accept="image/*"
                  id="contained-button-file"
                  type="file"
                  onChange={uploadBtnHandler}
                />
                <Button variant="contained" component="span">
                  Upload Picture
                </Button>
              </label>
              {file && (
                <Card>
                  <img
                    alt=""
                    src={URL.createObjectURL(file)}
                    style={{ width: 500, height: 500 }}
                  />
                </Card>
              )}
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>Cancel</Button>
              <Button onClick={handleClose}>Add</Button>
            </DialogActions>
          </Dialog>
        </Grid>

        <Grid item>
          <Clothes />
        </Grid>
      </Grid>
    </>
  );
};

export default WardrobeContent;
