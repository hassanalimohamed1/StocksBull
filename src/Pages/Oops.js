import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import "../App.css";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import Message from "../Components/Utils/Message";

export default function Oops() {
  const location = useLocation();

  /* This code is referenced from DevDojo -> 3 ways to set a document title in React", DevDojo, 2021. [Online]. 
  Available: https://devdojo.com/krissanawat101/3-ways-to-set-a-document-title-in-react. [Accessed: 11- May- 2022]. */

  useEffect(() => {
    document.title = `Oops`;
  }, []);
  return (
    <span>
    
      <Box className="main" container item xs={12} sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={8}></Grid>
          <Grid className="center" item xs={4}>
            <h1 className="big">Oops...</h1>
            <h2>{location.state.Message}</h2>
            <h3>{`${location.state.Discription}  (${Message(
              location.state.Discription
            )})`}</h3>
            <h3>
              Find a <Link to={`../Stocks`}>stock.</Link>
            </h3>
          </Grid>
        </Grid>
      </Box>
      </span>
  );
}
