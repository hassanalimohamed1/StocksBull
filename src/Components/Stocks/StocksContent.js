import React from "react";

import "../../App.css";

import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

import SearchBar from "../Utils/Searchbar";
import Grid from "@mui/material/Grid";

export default function StocksContent(props) {
  //Getting all sectors form NASDAQ100 API Call
  const sectors = [];
  for (let i = 0; i < props.table.length; i++) {
    sectors.push(props.table[i].sector);
  }
  //Making a set to create unique set
  const industries = [...new Set(sectors)];

  return (
    <span>
      <div>
        <h1>Stocks</h1>
        <h3>What Is a Stock?</h3>
        <p>
          A stock (also known as equity) is a security that represents the
          ownership of a fraction of a corporation. This entitles the owner of
          the stock to a proportion of the corporation's assets and profits
          equal to how much stock they own. Units of stock are called "shares."
          - Source: Investopedia
        </p>
      </div>
      <div>
        <p>
          The Nasdaq100 (US-Tech 100) is an index that tracks the movement of a
          group of shares, similar to the S&amp;P500 (USA500) and the Dow Jones
          Industrial Average (USA 30- Wall Street). It consists of the 100
          largest non-financial companies listed on the Nasdaq according to
          market capitalization. - Source: Plus500
        </p>
        <p>To see the price history of a stock, click on the symbol below.</p>
      </div>
      <div>
        <Grid container spacing={12}>
          <Grid item xs={6} align="center">
            <SearchBar onSubmit={props.setSearch} />
          </Grid>
          <Grid item xs={6}>
            <Autocomplete
              aria-label="Autocomplete"
              aria-required="true"
              htmlFor="Stock Categories"
              fullWidth={true}
              onChange={(event, value) =>
                value === null ? props.setSearch("") : props.setSearch(value)
              }
              disablePortal
              id="combo-box-demo"
              options={industries}
              renderInput={(params) => (
                <TextField {...params} label="Industries" />
              )}
            />
          </Grid>
        </Grid>
      </div>
      </span>
  );
}
