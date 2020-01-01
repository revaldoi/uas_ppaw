import React from "react";
import logo from "../img/logo.png";
import pyntar from "../img/pyntar.png";
import dyare from "../img/dyare.png";

export default function Information() {
  return (
    <div class="widget">
      <div class="container">
        <div class="row">
          <div class="col-md-3 col-12">
            <a class="navbar-brand padding-bottom-20" href="katalog.html">
              <img src={logo} class="height-60 img-fluid lazy" />
            </a>
            <h4>CONTACT US</h4>
            <ul class="widget-list">
              <li>
                <i class="text" aria-hidden="true"></i>
                Jl. Asia Afrika No. 30, Bandung Utara
              </li>
              <li>
                <i class="text" aria-hidden="true"></i>
                123456789 - 123456789
              </li>
              <li>
                <i class="text" aria-hidden="true"></i>
                admin@dplasa.com
              </li>
            </ul>
          </div>
          <div class="col">
            <h4>INFORMATION</h4>
            <ul class="widget-list extra">
              <li>
                <a href="katalog.html" class="text">
                  About Us
                </a>
              </li>
              <li>
                <a href="katalog.html" class="text">
                  Deliveri Information
                </a>
              </li>
              <li>
                <a href="katalog.html" class="text">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="katalog.html" class="text">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="katalog.html" class="text">
                  Affiliate
                </a>
              </li>
            </ul>
          </div>
          <div class="col">
            <h4>CUSTOMER SERVICE</h4>
            <ul class="widget-list extra">
              <li>
                <a href="katalog.html" class="text">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="katalog.html" class="text">
                  Returns
                </a>
              </li>
              <li>
                <a href="katalog.html" class="text">
                  Site Map
                </a>
              </li>
              <li>
                <a href="katalog.html" class="text">
                  Order History
                </a>
              </li>
              <li>
                <a href="katalog.html" class="text">
                  Wish List
                </a>
              </li>
              <li>
                <a href="katalog.html" class="text">
                  Newsletter
                </a>
              </li>
            </ul>
          </div>
          <div class="col">
            <h4>EXTRAS</h4>
            <ul class="widget-list extra">
              <li>
                <a href="katalog.html" class="text">
                  Brands
                </a>
              </li>
              <li>
                <a href="katalog.html" class="text">
                  Gift Certificates
                </a>
              </li>
              <li>
                <a href="katalog.html" class="text">
                  Affiliate
                </a>
              </li>
              <li>
                <a href="katalog.html" class="text">
                  Specials
                </a>
              </li>
              <li>
                <a href="katalog.html" class="text">
                  My Account
                </a>
              </li>
              <li>
                <a href="katalog.html" class="text">
                  Order History
                </a>
              </li>
            </ul>
          </div>
          <div class="col-md-3 col-12">
            <h4>FROM OUR BLOG</h4>
            <ul class="blog-list">
              <li>
                <div class="inline image">
                  <div class="crop-footer">
                    <img src={pyntar} />
                  </div>
                </div>
                <div class="inline text">
                  <a href="katalog.html">
                    <p class="text">Sering Melamun Pertanda Cerdas?</p>
                    <span class="date">Mon, 04-12-2017</span>
                  </a>
                </div>
              </li>
              <li>
                <div class="inline image">
                  <div class="crop-footer">
                    <img src={dyare} />
                  </div>
                </div>
                <div class="inline text">
                  <a href="katalog.html">
                    <p class="text">
                      Ketahui Berbagai Penyebab Diare dan Cara Mengatasi Diare
                    </p>
                    <span class="date">Mon, 04-12-2017</span>
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
