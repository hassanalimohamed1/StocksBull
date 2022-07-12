import React, { useState } from "react";
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Grid from "@mui/material/Grid";

export default function SearchBar(props) {
  const [innerSearch, setInnerSearch] = useState("");
  const [inputError, setInputError] = useState(false);

  return (
    <span>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <TextField
            aria-label="SearchBar"
            aria-required="true"
            htmlFor="StockInput"
            id="standard-basic"
            onChange={(e) => {
              setInnerSearch(e.target.value);
              if (
                /[0-9]/.test(e.target.value) === true ||
                /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(e.target.value)
              ) {
                setInputError(true);
              } else {
                setInputError(false);
              }
            }}
            error={inputError}
            helperText={
              inputError === true ? "Enter a valid stock symbol or industry." : " "
            }
            value={innerSearch}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    edge="end"
                    onClick={(e) => {
                      setInnerSearch("");
                    }}
                  >
                    <CloseIcon />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Grid>
        <Grid item xs={4}>
          <div className="center padding">
            <Button
              variant="contained"
              disabled={inputError}
              onClick={(e) => {
                props.onSubmit(innerSearch);
              }}
              id="search-button"
              sx={{ bgcolor: "#85bb65", "&:hover": { bgcolor: "#85bb65" } }}
              startIcon={<SearchIcon />}
            >
              Search
            </Button>
          </div>
        </Grid>
      </Grid>
      </span>
  );
}
