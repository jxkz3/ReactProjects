import { Route, Routes } from "react-router-dom";
import "./App.css";
import "./Page.css";

import Layout from "./components/Layout";
import Home from "./pages/Home";
import ProjectPage from "./pages/ProjectPage";
import SkillPage from "./pages/SkillPage";
import ContactPage from "./pages/ContactPage";
import AboutPage from "./pages/AboutPage";

export default function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="projects" element={<ProjectPage />} />
          <Route path="skills" element={<SkillPage />} />
          <Route path="contacts" element={<ContactPage />} />
          <Route path="about" element={<AboutPage />} />
        </Route>
      </Routes>
    </>
  );
}
