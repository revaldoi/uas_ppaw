import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap-grid.min.css";
import "bootstrap/dist/js/bootstrap.js";
import "jquery";
import "popper.js";
import Header from "./header/";
import Footer from "./footer/";

function App() {
  return (
    <React.Fragment>
      <Header />
      <Footer />
    </React.Fragment>
  );
}

export default App;
