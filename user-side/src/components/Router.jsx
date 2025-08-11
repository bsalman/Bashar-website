import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Home";
const Skills = React.lazy(() => import("./Skills"));
const Contact = React.lazy(() => import("./Contact"));
const PageNotFound = React.lazy(() => import("./PageNotFound"));
const Education = React.lazy(() => import("./Education"));
const Experience = React.lazy(() => import("./Experience"));
const NavBar = React.lazy(() => import("./NavBar"));
const Footer = React.lazy(() => import("./Footer"));

function Router() {
  return (
    <BrowserRouter>
      <div className="nav-container   navbar navbar-expand-lg">
        <NavBar />
      </div>
      <main className="routs-container ">
        <div className="content_cont">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route index element={<Home />} />
            <Route path="/education" element={<Education />}></Route>
            <Route path="/experience" element={<Experience />}></Route>
            <Route path="/skills" element={<Skills />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="*" element={<PageNotFound />}></Route>
          </Routes>
        </div>
      </main>
      <div className="footer-container">
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default Router;
