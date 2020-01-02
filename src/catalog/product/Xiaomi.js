/* eslint-disable */
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap-grid.min.css";
import "bootstrap/dist/js/bootstrap.js";
import "jquery";
import "popper.js";
import ProductImage from "../img/katalog-2.png";

function Xiaomi() {
  return (
    <div className="App">
      <link
        href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
        rel="stylesheet"
      />
      <div className="card">
        <div className="text-center">
          <span className="label label-new">NEW</span>
          <a href="detail.html">
            <img
              className="card-img-top catalog"
              src={ProductImage}
              alt="Xiaomi"
            />
          </a>
        </div>
        <div className="card-body">
          <a href="detail.html" className="product-name">
            Xiaomi Mi Band 2 Black
          </a>
          <br></br>
          <h3 className="price">Rp 249,000</h3>
          <s className="was">Rp 349,000</s>
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

export default Xiaomi;
