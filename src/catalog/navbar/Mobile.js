/* eslint-disable */
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap-grid.min.css";
import "bootstrap/dist/js/bootstrap.js";
import "jquery";
import "popper.js";
import IconSort from "../img/sort.png";
import IconFilter from "../img/filter.png";

function Mobile() {
  return (
    <div className="App">
      <section className="d-block d-sm-none bread-mobile">
        <a href="/" className="text-dark">
          Home
        </a>
        <i className="fa fa-angle-double-right" aria-hidden="true"></i>
        <a href="/catalog" className="text-dark font-weight-bold active">
          Katalog
        </a>
      </section>

      <section className="d-block d-sm-none tool mobile">
        <div className="tool">
          <div className="mx-2">
            <i className="fa fa-th" aria-hidden="true"></i>
          </div>
          <div className="mr-auto ml-2">
            <i className="fa fa-bars" aria-hidden="true"></i>
          </div>
          <ul className="navbar-nav">
            <li className="active sort-by sortm">
              <select className="custom-select mb-0 ">
                <option value="">Sort by popularitas</option>
                <option value="date_desc">Sort by price</option>
                <option value="date_asc">Sort by rating</option>
              </select>
            </li>
          </ul>
          <div className="container">
            <ul className="navbar-nav">
              <li className="mob">
                <form className="form-inline m-4 my-lg-0 mob">
                  <select className="nav-item custom-select show mob">
                    <option value="">Show 15</option>
                    <option value="date_desc">Show 30</option>
                    <option value="date_asc">Show 50</option>
                  </select>
                </form>
              </li>
              <li>
                <ul className="form-inline list-group list-group-horizontal justify-content-end tampil-mobile">
                  <li className="list-group-item m">1</li>
                  <li className="list-group-item r">dari</li>
                  <li className="list-group-item r">3</li>
                  <li className="list-group-item nexth">
                    <i className="fa fa-angle-right"></i>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
        <div className="nav-mobile-fix d-block d-sm-none">
          <button type="button" className="btn nav-btn">
            <img src={IconFilter} alt="Filter" width="14px" />
            Filter
          </button>
          <button type="button" className="btn nav-btn">
            <img src={IconSort} alt="Sort" width="14px" />
            Urutkan
          </button>
        </div>
      </section>
    </div>
  );
}

export default Mobile;
