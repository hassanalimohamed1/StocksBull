import * as React from "react";

import Whitebull from "../images/whitebull.png";
import "../App.css";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Facebook from "../images/facebook.png";
import Instagram from "../images/instagram.png";
import Twitter from "../images/twitter.png";
import Linkedin from "../images/linkedin.png";
import usePopularStocksAPI from "../API/PopularStocks";
import Overlay from "../UI/Overlay";
import {Link} from "react-router-dom";

let icons = [Facebook, Instagram, Twitter, Linkedin];

const date = new Date();

export default function Footer() {
  const { loading, popular, error } = usePopularStocksAPI();

  if (loading) {
    return <Overlay />;
  }
  if (error) {
    return <p>{error.message}</p>;
  }

  return (
    <footer>
      <br></br>
      <Box
        sx={{
          width: "100vw",
          height: "450px",
          backgroundColor: "#85bb65",
        }}
      >
        <Container>
          <Grid container spacing={3}>
            <Grid item xs={4} display={{ xs: "none", md: "block" }}>
              <h1>Stocksbull</h1>
              <p>
                {/* This paragraph is from the task sheet */}
                Welcome to the Stock Bull. You may click on stocks to
                view all the available companies and get the latest
                price information by stock symbol. You can also see the Price History 
                the most recent one hundred days of
                information for a particular stock.
              </p>
            </Grid>
            <Grid justify="center " item xs={4}>
              <h3>Popular Stocks</h3>
              {popular.slice(0, 5).map((row, index) => (

                <Link key={index} to={`../History/${row.symbol}`}>
                  <p>{row.name}</p>
                </Link>
              ))}
            </Grid>
            <Grid item xs={4}>
              <img src={Whitebull} alt="stocksbull logo" />
              <div>
                <h6 className="footertext">
                  &copy;{date.getFullYear()} Hassan Mohamed
                </h6>
                <br></br>
                {icons.map((row, index) => (
                  <img
                    key={index}
                    className="icon"
                    src={row}
                    alt={`${row} logo`}
                  />
                ))}
              </div>
            </Grid>
            <Grid item xs={4}></Grid>
            <Grid item xs={4}></Grid>
          </Grid>
        </Container>
      </Box>
    </footer>
  );
}
