import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap-grid.min.css";
import "bootstrap/dist/js/bootstrap.js";
import "jquery";
import "popper.js";
import Header from "./header/";
import Footer from "./footer/";
import Home from "./home/";
import Detail from "./detail/Detail";
import Catalog from "./catalog/Catalog";

function App() {
  return (
    <React.Fragment>
      <Header />
      <Catalog />
      <Footer />
    </React.Fragment>
  );
}

export default App;
