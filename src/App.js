import React from "react";
import { Route, NavLink, HashRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap-grid.min.css";
import "bootstrap/dist/js/bootstrap.js";
import "jquery";
import "popper.js";
import Home from "./home/Home";
import Catalog from "./catalog/Catalog";
import Detail from "./detail/Detail";
import Header from "./common/header";

function App() {
  return <Header />;
}

export default App;
