import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Shopping() {
  const [tops, setTops] = useState(null);
  const [bottoms, setBottoms] = useState(null);
  const [shoes, setShoes] = useState(null);

  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://asos2.p.rapidapi.com/products/v2/list",
      params: {
        store: "US",
        offset: "0",
        categoryId: "7616",
        limit: "6",
        country: "US",
        sort: "freshness",
        currency: "USD",
        sizeSchema: "US",
        lang: "en-US",
      },
      headers: {
        "X-RapidAPI-Host": "asos2.p.rapidapi.com",
        "X-RapidAPI-Key": "7032c35bb5msha213609e710a5c0p1a5185jsn23274bc9e3cc",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        setTops(response.data["products"]);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://asos2.p.rapidapi.com/products/v2/list",
      params: {
        store: "US",
        offset: "0",
        categoryId: "4910",
        limit: "6",
        country: "US",
        sort: "freshness",
        currency: "USD",
        sizeSchema: "US",
        lang: "en-US",
      },
      headers: {
        "X-RapidAPI-Host": "asos2.p.rapidapi.com",
        "X-RapidAPI-Key": "7032c35bb5msha213609e710a5c0p1a5185jsn23274bc9e3cc",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        setBottoms(response.data["products"]);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://asos2.p.rapidapi.com/products/v2/list",
      params: {
        store: "US",
        offset: "0",
        categoryId: "4209",
        limit: "6",
        country: "US",
        sort: "freshness",
        currency: "USD",
        sizeSchema: "US",
        lang: "en-US",
      },
      headers: {
        "X-RapidAPI-Host": "asos2.p.rapidapi.com",
        "X-RapidAPI-Key": "7032c35bb5msha213609e710a5c0p1a5185jsn23274bc9e3cc",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        setShoes(response.data["products"]);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  return (
    <Grid
      container
      direction="column"
      justifyContent="space-evenly"
      alignItems="center"
      spacing={5}
    >
      {" "}
      <Grid item>
        <Box sx={{ flexGrow: 1 }}>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            {!tops ? (
              <p>Loading</p>
            ) : (
              tops.map((topItem) => (
                <Grid item xs={2} sm={4} md={2} key={topItem.id}>
                  <Card sx={{ maxWidth: 500 }}>
                    <CardMedia
                      component="img"
                      alt="green iguana"
                      height="450"
                      image={`https://${topItem.imageUrl}`}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {topItem.name}
                      </Typography>
                      <Typography variant="h5" color="text.secondary">
                        Price: {topItem.price.current.text}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button
                        variant="contained"
                        size="large"
                        onClick={() =>
                          window.open(
                            `https://www.asos.com/${topItem.url}`,
                            "_blank"
                          )
                        }
                      >
                        Go to the product website
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              ))
            )}
          </Grid>
        </Box>
      </Grid>
      <Grid item>
        <Box sx={{ flexGrow: 1 }}>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            {!bottoms ? (
              <p>Loading</p>
            ) : (
              bottoms.map((bottomItem) => (
                <Grid item xs={2} sm={4} md={2} key={bottomItem.id}>
                  <Card sx={{ maxWidth: 500 }}>
                    <CardMedia
                      component="img"
                      alt="green iguana"
                      height="450"
                      image={`https://${bottomItem.imageUrl}`}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {bottomItem.name}
                      </Typography>
                      <Typography variant="h5" color="text.secondary">
                        Price: {bottomItem.price.current.text}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button
                        variant="contained"
                        size="large"
                        onClick={() =>
                          window.open(
                            `https://www.asos.com/${bottomItem.url}`,
                            "_blank"
                          )
                        }
                      >
                        Go to the product website
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              ))
            )}
          </Grid>
        </Box>
      </Grid>
      <Grid item>
        <Box sx={{ flexGrow: 1 }}>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            {!shoes ? (
              <p>Loading</p>
            ) : (
              shoes.map((shoesItem) => (
                <Grid item xs={2} sm={4} md={2} key={shoesItem.id}>
                  <Card sx={{ maxWidth: 500 }}>
                    <CardMedia
                      component="img"
                      alt="green iguana"
                      height="450"
                      image={`https://${shoesItem.imageUrl}`}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {shoesItem.name}
                      </Typography>
                      <Typography variant="h5" color="text.secondary">
                        Price: {shoesItem.price.current.text}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button
                        variant="contained"
                        size="large"
                        onClick={() =>
                          window.open(
                            `https://www.asos.com/${shoesItem.url}`,
                            "_blank"
                          )
                        }
                      >
                        Go to the product website
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              ))
            )}
          </Grid>
        </Box>
      </Grid>
    </Grid>
  );
}
