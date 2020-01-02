import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap-grid.min.css";
import "bootstrap/dist/js/bootstrap.js";
import "jquery";
import "popper.js";
import HomeProduct1 from "./img/home-product(1).jpg";
import HomeProduct2 from "./img/home-product(2).jpg";
import HomeProduct3 from "./img/home-product(3).jpg";
import "./css/home.css";
import "./css/carousel.css";

function CarouselItem() {
  return (
    <div className="App">
      <link
        rel="stylesheet"
        href="http://ajax.googleapis.com/ajax/libs/jqueryui/1.10.3/themes/start/jquery-ui.min.css"
      />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css"
      />
      <script src="https://code.jquery.com/jquery-1.12.4.js"></script>
      <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>

      <div class="container-fluid">
        <div id="carousel-example" class="carousel slide" data-ride="carousel">
          <div class="carousel-inner row w-100 mx-auto" role="listbox">
            <div class="carousel-item col-12 col-sm-6 col-md-4 col-lg-4 border active">
              <div class="col-md-12 row">
                <div class="product-img col-md-8">
                  <div class="top1">
                    <i>TOP 1</i>
                  </div>
                  <img class="top1-img" src={HomeProduct3} />
                  <p class="top1-title">Penjualan / Bulan 42RB+</p>
                </div>
                <div class="product-img2 col-md-4">
                  <div class="top2">
                    <i>2</i>
                  </div>
                  <img class="top2-img" src={HomeProduct1} />
                  <div class="top2">
                    <i>3</i>
                  </div>
                  <img class="top2-img" src={HomeProduct2} />
                </div>
                <p class="card-title">Wedges Wanita</p>
              </div>
            </div>
            <div class="carousel-item col-12 col-sm-6 col-md-4 col-lg-4 border">
              <div class="col-md-12 row">
                <div class="product-img col-md-8">
                  <div class="top1">
                    <i>TOP 1</i>
                  </div>
                  <img class="top1-img" src={HomeProduct3} />
                  <p class="top1-title">Penjualan / Bulan 42RB+</p>
                </div>
                <div class="product-img2 col-md-4">
                  <div class="top2">
                    <i>2</i>
                  </div>
                  <img class="top2-img" src={HomeProduct1} />
                  <div class="top2">
                    <i>3</i>
                  </div>
                  <img class="top2-img" src={HomeProduct2} />
                </div>
                <p class="card-title">Wedges Wanita</p>
              </div>
            </div>
            <div class="carousel-item col-12 col-sm-6 col-md-4 col-lg-4 border">
              <div class="col-md-12 row">
                <div class="product-img col-md-8">
                  <div class="top1">
                    <i>TOP 1</i>
                  </div>
                  <img class="top1-img" src={HomeProduct3} />
                  <p class="top1-title">Penjualan / Bulan 42RB+</p>
                </div>
                <div class="product-img2 col-md-4">
                  <div class="top2">
                    <i>2</i>
                  </div>
                  <img class="top2-img" src={HomeProduct1} />
                  <div class="top2">
                    <i>3</i>
                  </div>
                  <img class="top2-img" src={HomeProduct2} />
                </div>
                <p class="card-title">Wedges Wanita</p>
              </div>
            </div>
            <div class="carousel-item col-12 col-sm-6 col-md-4 col-lg-4 border">
              <div class="col-md-12 row">
                <div class="product-img col-md-8">
                  <div class="top1">
                    <i>TOP 1</i>
                  </div>
                  <img class="top1-img" src={HomeProduct3} />
                  <p class="top1-title">Penjualan / Bulan 42RB+</p>
                </div>
                <div class="product-img2 col-md-4">
                  <div class="top2">
                    <i>2</i>
                  </div>
                  <img class="top2-img" src={HomeProduct1} />
                  <div class="top2">
                    <i>3</i>
                  </div>
                  <img class="top2-img" src={HomeProduct2} />
                </div>
                <p class="card-title">Wedges Wanita</p>
              </div>
            </div>
          </div>
          <a
            class="carousel-control-prev"
            href="#carousel-example"
            role="button"
            data-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a
            class="carousel-control-next"
            href="#carousel-example"
            role="button"
            data-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default CarouselItem;
