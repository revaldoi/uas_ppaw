/* eslint-disable */
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap-grid.min.css";
import "bootstrap/dist/js/bootstrap.js";
import "jquery";
import "popper.js";
import ProductImage from "../img/katalog-3.png";

function Benardi() {
  return (
    <div className="App">
      <link
        href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
        rel="stylesheet"
      />
      <div class="card">
        <div class="text-center">
          <a href="detail.html">
            <img
              class="card-img-top catalog"
              src={ProductImage}
              alt="Benardi"
            />
          </a>
        </div>
        <div class="card-body">
          <a href="detail.html" class="product-name">
            Benardi Sup Merah 300 Gr
          </a>
          <br></br>
          <h3 class="price">Rp 24,300</h3>
          <s class="was">Rp 27,000</s>
          <div class="rating-div">
            <span class="rating">
              <i class="fa fa-star" aria-hidden="true"></i>
              <i class="fa fa-star" aria-hidden="true"></i>
              <i class="fa fa-star" aria-hidden="true"></i>
              <i class="fa fa-star-half-o" aria-hidden="true"></i>
              <i class="fa fa-star-o" aria-hidden="true"></i>
              <a>10 ulasan</a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Benardi;
