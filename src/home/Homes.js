import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap-grid.min.css";
import "bootstrap/dist/js/bootstrap.js";
import "jquery";
import "popper.js";
import "./css/home.css";
import Banner from "./Banner";

function Home() {
  return (
    <div>
      {/* <!-- BANNER : REVALDO --> */}
      <Banner />
    </div>
  );
}

export default Home;
