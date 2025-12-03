import { Route, Routes } from "react-router-dom";
import "./App.css";
import Content from "./components/Content";
import Header from "./components/Header";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Header />} />
      </Routes>
    </>
  );
}
