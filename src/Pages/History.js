import React, { useState, useEffect } from "react";

import useGraphAPI from "../API/Graphapi";
import Container from "@mui/material/Container";
import Overlay from "../UI/Overlay";
import { useParams } from "react-router-dom";
import useProfileAPI from "../API/Profileapi";
import Grid from "@mui/material/Grid";
import Graph from "../Components/History/Graph";
import Discription from "../Components/History/Description";
import Quotes from "../Components/History/Quotes";
import HistoryContent from "../Components/History/HistoryContent";
import Datepicker from "../Components/History/Datepicker";
import Footer from "../UI/Footer";
import { useNavigate } from "react-router-dom";

import "react-datepicker/dist/react-datepicker.css";

export default function History() {
  const params = useParams();
  const stock = params.id;
  const navigate = useNavigate();

  const [search, setSearch] = useState("");
  const [changes, setChanges] = useState("");

  const { loading, graph, error } = useGraphAPI(stock);
  const { profileLoading, profile, profileError } = useProfileAPI(stock);

  /* This code is referenced from DevDojo -> 3 ways to set a document title in React", DevDojo, 2021. [Online]. 
  Available: https://devdojo.com/krissanawat101/3-ways-to-set-a-document-title-in-react. [Accessed: 11- May- 2022]. */

  useEffect(() => {
    document.title = `${stock} - History`;
  }, []);

  if (
    Object.keys(graph)[0] === "Error Message" ||
    Object.keys(graph)[0] === "Note"
  ) {
    navigate("../../Oops/", {
      state: {
        Message: Object.keys(graph)[0],
        Discription: Object.values(graph)[0],
      },
    });
  }

  if (loading || profileLoading) {
    return <Overlay />;
  } else if (error || profileError) {
    <h1>{error.message || profileError.message}</h1>;
  }
  return (
    <span>
      <Container>
        <HistoryContent
          profile={profile}
          graph={graph["Time Series (Daily)"]}
          search={search}
          setChanges={setChanges}
        />
        <Grid container spacing={2}>
          <Grid item xs={10} md={6}>
            <Datepicker
              graph={graph["Time Series (Daily)"]}
              search={search}
              setSearch={setSearch}
            />
            <Quotes graph={graph["Time Series (Daily)"]} search={search} />
          </Grid>
          <Grid item display xs={10} md={6}>
            <Graph
              graph={graph["Time Series (Daily)"]}
              changes={changes}
              search={search}
              profile={profile}
            />
          </Grid>
          <Grid item xs={10} md={12}>
            <Discription profile={profile} />
          </Grid>
        </Grid>
      </Container>
      <Footer />
      </span>
  );
}
