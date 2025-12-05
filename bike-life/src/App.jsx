import React from "react";
import "./App.css";
import "./pages.css";
import { Routes, Route, Link } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Bikes from "./pages/Bikes";
import BikeDetails from "./pages/BikeDetails";
import Layout from "./components/Layout";
import Income from "./pages/host/Income";
import Review from "./pages/host/Review";
import Host from "./pages/Host";
import DashBoard from "./pages/host/DashBoard";

import Pricing from "./pages/host/details/Pricing";
import Description from "./pages/host/details/description";
import Photos from "./pages/host/details/Photos";
import HostBikesDetails from "./pages/host/HostBikesDetails";
import HostBikes from "./pages/host/HostBikes";

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
            <Route path="bikes" element={<HostBikes />} />
            <Route path="bikes/:id" element={<HostBikesDetails />}>
              <Route path="pricing" element={<Pricing />} />
              <Route path="description" element={<Description />} />
              <Route path="photos" element={<Photos />} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
