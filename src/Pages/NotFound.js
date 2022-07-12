import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import "../App.css";
import { Link } from "react-router-dom";

export default function NotFound() {
  /* This code is referenced from DevDojo -> 3 ways to set a document title in React", DevDojo, 2021. [Online]. 
  Available: https://devdojo.com/krissanawat101/3-ways-to-set-a-document-title-in-react. [Accessed: 11- May- 2022]. */

  useEffect(() => {
    document.title = `Page Not Found`;
  }, []);
  return (
    <span>
      <Box className="main" container item xs={12} sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={8}></Grid>
          <Grid className="center" item xs={4}>
            <h1 className="big">Oops...</h1>
            <h2>The page your looking for doesn't exist. </h2>
            <h2>
              Find a <Link to={`../Stocks`}>stock.</Link>
            </h2>
          </Grid>
        </Grid>
      </Box>
      </span>
  );
}
