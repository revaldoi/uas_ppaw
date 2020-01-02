import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap-grid.min.css";
import "bootstrap/dist/js/bootstrap.js";
import "jquery";
import "popper.js";
import "./css/home.css";

function Header() {
  return (
    <div className="container">
      <div className="row text-center">
        <div className="col-md-7 col-12 edo nopadding">
          <ul className="carousel-indicators">
            <li data-target="#demo" data-slide-to="0" class="active"></li>
            <li data-target="#demo" data-slide-to="1"></li>
            <li data-target="#demo" data-slide-to="2"></li>
          </ul>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img
                src="https://www.courts.com.sg/media/wysiwyg/1/9/19wk14-listing-samsung-galaxy-a80-m.jpg"
                alt=""
                width="100%"
                height="100%"
              />
            </div>
            <div class="carousel-item">
              <img
                src="http://www.infotechnow.com/banner_intel8thgen.jpg"
                alt=""
                width="1100"
                height="500"
              />
            </div>
            <div class="carousel-item">
              <img
                src="https://hitecmobile.com.sg/media/wysiwyg/Banner1_640x300.jpg"
                alt=""
                width="1100"
                height="500"
              />
            </div>

            <a class="carousel-control-prev" href="#demo" data-slide="prev">
              <span class="carousel-control-prev-icon"></span>
            </a>
            <a class="carousel-control-next" href="#demo" data-slide="next">
              <span class="carousel-control-next-icon"></span>
            </a>
          </div>
        </div>

        <div class="col-5 edo nopadding">
          <div class="col-12 nopadding atas">
            <a href="katalog.html">
              <img
                src="https://www.converse.com.sg/wp-content/uploads/2014/01/homepage-Chuck-II-Refresh-1600x540.jpg"
                alt=""
              />
            </a>
          </div>
          <div class="col-12 nopadding atas mt-1">
            <a href="katalog.html">
              <img
                src="https://www.prosoundgear.com/wp-content/uploads/2017/03/JBL-Banner.jpg"
                alt=""
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
