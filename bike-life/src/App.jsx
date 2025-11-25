import React from "react";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Bikes from "./pages/Bikes";
import BikeDetails from "./pages/BikeDetails";
import Layout from "./components/Layout";
import Income from "./pages/host/Income";
import Review from "./pages/host/Review";
import Host from "./components/Host";
import DashBoard from "./pages/host/DashBoard";
import HostVans from "./pages/host/HostVans";
import HostVansDetails from "./pages/host/HostVansDetails";

function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/bikes" element={<Bikes />} />
          <Route path="/bikes/:id" element={<BikeDetails />} />
          <Route path="/host" element={<Host />}>
            <Route index element={<DashBoard />} />

            <Route path="income" element={<Income />} />
            <Route path="review" element={<Review />} />
            <Route path="vans" element={<HostVans />} />
            <Route path="vans/:id" element={<HostVansDetails />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
