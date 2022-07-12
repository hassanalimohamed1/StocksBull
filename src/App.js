import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";

import History from "./Pages/History";
import Stocks from "./Pages/Stocks";

import "./App.css";
import Navigation from "./UI/Navigation";
import Oops from "./Pages/Oops";
import NotFound from "./Pages/NotFound";


function App() {
  return (
    <Router>
        < Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/*" element={<NotFound />} />
        <Route path="/history/:id" element={<History />} />
        <Route path="/stocks" element={<Stocks />} />
        <Route path="/Oops" element={<Oops />} />
        <Route path="/stocks/*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;