import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Bikes from "./pages/Bikes";

function App() {
  return (
    <>
      <BrowserRouter>
        <header>
          <Link className="site-logo" to="/">
            Home
          </Link>
          <nav>
            <Link to="/bikes">Bikes</Link>
            <Link to="/about">About</Link>
          </nav>
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/bikes" element={<Bikes />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
