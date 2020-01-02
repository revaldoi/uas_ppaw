import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap-grid.min.css";
import "bootstrap/dist/js/bootstrap.js";
import "jquery";
import "popper.js";
import "./css/detail.css";
import MainView from "./MainView";
import Rekomendasi from "./Rekomendasi";

function Detail() {
  return (
    <div className="container p-5">
      <link
        href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
        rel="stylesheet"
        integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN"
        crossOrigin="anonymous"
      />
      <div className="d-none d-sm-block">
        <a href="/" className="text-dark">
          Home
        </a>
        <i className="fa fa-angle-double-right mx-2" aria-hidden="true"></i>
        <a href="/" className="text-dark">
          Shop
        </a>
        <i className="fa fa-angle-double-right mx-2" aria-hidden="true"></i>
        <a href="/catalog" className="text-dark font-weight-bold active">
          Elektronik
        </a>
      </div>
      <MainView />
      <p className="bold">REKOMENDASI</p>
      <div className="borderTopCyan">
        <Rekomendasi />
      </div>

      <div className="container-fluid text-center p-4">
        <button id="more" type="button" className="btn btn-md">
          LIHAT LAINNYA
        </button>
      </div>
    </div>
  );
}

export default Detail;
