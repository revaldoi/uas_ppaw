import React from "react";
import logo from "./img/logo.png";
import pyntar from "./img/pyntar.png";
import dyare from "./img/dyare.png";

export default function Information() {
  return (
    <div className="widget">
      <div className="container">
        <div className="row">
          <div className="col-md-3 col-12">
            <a className="navbar-brand padding-bottom-20" href="/catalog">
              <img src={logo} alt="logo" className="height-60 img-fluid lazy" />
            </a>
            <h4>CONTACT US</h4>
            <ul className="widget-list">
              <li>
                <i className="text" aria-hidden="true"></i>
                Jl. Asia Afrika No. 30, Bandung Utara
              </li>
              <li>
                <i className="text" aria-hidden="true"></i>
                123456789 - 123456789
              </li>
              <li>
                <i className="text" aria-hidden="true"></i>
                admin@dplasa.com
              </li>
            </ul>
          </div>
          <div className="col">
            <h4>INFORMATION</h4>
            <ul className="widget-list extra">
              <li>
                <a href="/catalog" className="text">
                  About Us
                </a>
              </li>
              <li>
                <a href="/catalog" className="text">
                  Deliveri Information
                </a>
              </li>
              <li>
                <a href="/catalog" className="text">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/catalog" className="text">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="/catalog" className="text">
                  Affiliate
                </a>
              </li>
            </ul>
          </div>
          <div className="col">
            <h4>CUSTOMER SERVICE</h4>
            <ul className="widget-list extra">
              <li>
                <a href="/catalog" className="text">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="/catalog" className="text">
                  Returns
                </a>
              </li>
              <li>
                <a href="/catalog" className="text">
                  Site Map
                </a>
              </li>
              <li>
                <a href="/catalog" className="text">
                  Order History
                </a>
              </li>
              <li>
                <a href="/catalog" className="text">
                  Wish List
                </a>
              </li>
              <li>
                <a href="/catalog" className="text">
                  Newsletter
                </a>
              </li>
            </ul>
          </div>
          <div className="col">
            <h4>EXTRAS</h4>
            <ul className="widget-list extra">
              <li>
                <a href="/catalog" className="text">
                  Brands
                </a>
              </li>
              <li>
                <a href="/catalog" className="text">
                  Gift Certificates
                </a>
              </li>
              <li>
                <a href="/catalog" className="text">
                  Affiliate
                </a>
              </li>
              <li>
                <a href="/catalog" className="text">
                  Specials
                </a>
              </li>
              <li>
                <a href="/catalog" className="text">
                  My Account
                </a>
              </li>
              <li>
                <a href="/catalog" className="text">
                  Order History
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-3 col-12">
            <h4>FROM OUR BLOG</h4>
            <ul className="blog-list">
              <li>
                <div className="inline image">
                  <div className="crop-footer">
                    <img src={pyntar} alt="pintar" />
                  </div>
                </div>
                <div className="inline text">
                  <a href="/catalog">
                    <p className="text">Sering Melamun Pertanda Cerdas?</p>
                    <span className="date">Mon, 04-12-2017</span>
                  </a>
                </div>
              </li>
              <li>
                <div className="inline image">
                  <div className="crop-footer">
                    <img src={dyare} alt="diare" />
                  </div>
                </div>
                <div className="inline text">
                  <a href="/catalog">
                    <p className="text">
                      Ketahui Berbagai Penyebab Diare dan Cara Mengatasi Diare
                    </p>
                    <span className="date">Mon, 04-12-2017</span>
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
