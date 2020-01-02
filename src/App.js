import React from "react";
import { Route, NavLink, HashRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap-grid.min.css";
import "bootstrap/dist/js/bootstrap.js";
import "jquery";
import "popper.js";
import Catalog from "./catalog/Catalog";

function App() {
  return <Catalog />;
}

export default App;
