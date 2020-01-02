/* eslint-disable */
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap-grid.min.css";
import "bootstrap/dist/js/bootstrap.js";
import "jquery";
import "popper.js";
import ProductImage from "../img/katalog-4.png";

function Fossil() {
  return (
    <div className="App">
      <link
        href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
        rel="stylesheet"
      />
      <div className="card">
        <div className="text-center">
          <a href="/detail">
            <img
              className="card-img-top catalog"
              src={ProductImage}
              alt="Fossil"
            />
          </a>
        </div>
        <div className="card-body">
          <a href="/detail" className="product-name">
            Fossil - Jam Tangan Pria Fossil FS4991
          </a>
          <h3 className="price">Rp 1,230,000</h3>
          <s className="was">Rp 2,735,000</s>
          <div className="rating-div">
            <span className="rating">
              <i className="fa fa-star" aria-hidden="true"></i>
              <i className="fa fa-star" aria-hidden="true"></i>
              <i className="fa fa-star" aria-hidden="true"></i>
              <i className="fa fa-star-half-o" aria-hidden="true"></i>
              <i className="fa fa-star-o" aria-hidden="true"></i>
              <a>10 ulasan</a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Fossil;
