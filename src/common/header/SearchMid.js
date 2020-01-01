import React from "react";
import logo from "../img/logo.png";

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
      <span class="ml-2">
        <a href="katalog.html" class="text-white ft-9">
          {list}
        </a>
      </span>
    );
  }

  return (
    <div class="container-fluid d-none d-md-block pb-4 pl-5">
      <div class="row">
        <div class="col-md-3">
          <a class="navbar-brand risk" href="#hi">
            <img class="img-fluid" src={logo} alt="yubobo" />
          </a>
        </div>
        <div class="col-md-8 mt-4">
          <div class="input-group">
            <input
              type="text"
              class="form-control br-0"
              placeholder="Cari produk..."
              required
            />
            <div class="input-group-prepend">
              <a
                href="katalog.html"
                class="input-group-text text-white bg-transparent"
              >
                <i class="fas fa-search"></i>
              </a>
            </div>
          </div>
          <div class="mt-2 text-white under-search ft-9">
            <span class="">
              <a href="katalog.html" class="text-white ft-9">
                Elektronik
              </a>
            </span>
            {final}
          </div>
        </div>
        <div class="col-md-1 mt-4 margin-0 padding-0">
          <div class="navbar-nav nv-con">
            <a class="nav-link nv-icon">
              <i class="fas fa-heart"></i>
            </a>
            <a class="nav-link nv-icon">
              <i class="fas fa-shopping-cart"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
