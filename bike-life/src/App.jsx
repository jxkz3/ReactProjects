import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Bikes from "./pages/Bikes";
import BikeDetails from "./pages/BikeDetails";
import Layout from "./components/Layout";

function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/bikes" element={<Bikes />} />
          <Route path="/bikes/:id" element={<BikeDetails />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
