import React from "react";
import logo from "./logo.png";

export default function SearchMid() {
  const lists = [
    "Handphone & Tablet",
    "Laptop & Aksesoris",
    "Fashion Wanita",
    "Fashion Pria",
    "Fashion Anak",
    "Fashion Muslim",
    "Kecantikan"
  ];

  const final = [];

  for (let list of lists) {
    final.push(
      <span className="ml-2">
        <a href="katalog.html" className="text-white ft-9">
          {list}
        </a>
      </span>
    );
  }

  return (
    <div className="container-fluid d-none d-md-block pb-4 pl-5">
      <div className="row">
        <div className="col-md-3">
          <a className="navbar-brand risk" href="#hi">
            <img className="img-fluid" src={logo} alt="yubobo" />
          </a>
        </div>
        <div className="col-md-8 mt-4">
          <div className="input-group">
            <input
              type="text"
              className="form-control br-0"
              placeholder="Cari produk..."
              required
            />
            <div className="input-group-prepend">
              <a
                href="katalog.html"
                className="input-group-text text-white bg-transparent"
              >
                <i className="fas fa-search"></i>
              </a>
            </div>
          </div>
          <div className="mt-2 text-white under-search ft-9">
            <span className="">
              <a href="katalog.html" className="text-white ft-9">
                Elektronik
              </a>
            </span>
            {final}
          </div>
        </div>
        <div className="col-md-1 mt-4 margin-0 padding-0">
          <div className="navbar-nav nv-con">
            <a className="nav-link nv-icon">
              <i className="fas fa-heart"></i>
            </a>
            <a className="nav-link nv-icon">
              <i className="fas fa-shopping-cart"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
