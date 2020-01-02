/* eslint-disable */
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap-grid.min.css";
import "bootstrap/dist/js/bootstrap.js";
import "jquery";
import "popper.js";
import ProductImage from "../img/katalog-5.png";

function Iphone() {
  return (
    <div className="App">
      <link
        href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
        rel="stylesheet"
      />
      <div className="card">
        <div className="text-center">
          <span className="label label-discount">20% OFF</span>

          <a href="/detail">
            <img
              className="card-img-top catalog"
              src={ProductImage}
              alt="Iphone"
            />
          </a>
        </div>
        <div className="card-body">
          <a href="detail.html" className="product-name">
            Techno Tip PPS7
          </a>
          <br></br>
          <h3 className="price">Rp 9,600</h3>
          <s className="was">Rp 12,000</s>
          <div className="rating-div">
            <span>
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

export default Iphone;
