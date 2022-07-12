import React, {useState, useEffect} from "react";

import Container from "@mui/material/Container";
import useTableAPI from "../API/Tableapi";
import Overlay from "../UI/Overlay";
import StocksContent from "../Components/Stocks/StocksContent";
import StocksTable from "../Components/Stocks/StocksTable";
import Footer from "../UI/Footer";
import "../App.css";


export default function Projections() {
  const [search, setSearch] = useState("");
  const { loading, table, error } = useTableAPI();

    /* This code is referenced from DevDojo -> 3 ways to set a document title in React", DevDojo, 2021. [Online]. 
  Available: https://devdojo.com/krissanawat101/3-ways-to-set-a-document-title-in-react. [Accessed: 11- May- 2022]. */

  useEffect(() => {
    document.title = `Stocks`
  }, [])

  if (loading) {
    return <Overlay />;
  }
  if (error) {
    <h1>{error.message}</h1>
  }

  return (
    <span>
      <Container maxWidth="lg">
        <StocksContent table={table} setSearch={setSearch} />
        <StocksTable table={table} search={search} />
      </Container>
      <Footer />
    </span>
  );
}
