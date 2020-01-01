import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap-grid.min.css";
import "bootstrap/dist/js/bootstrap.js";
import "jquery";
import "popper.js";

export default function Header() {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark no-mp cta mb-2">
      <div class="col-md-12 no-mp margin-0 padding-0">
        <Contact />
        <SearchMid />
        <SearchSm />
      </div>
    </nav>
  );
}

function Contact() {
  return (
    <div class="row d-none d-md-block margin-0 padding-0">
      <div class="col-md-12 pt-0 mb-2">
        <div class="container">
          <div class="row ml-3">
            <div class="col-md-5 mt-1 no-mp">
              <span class="text-white ft-13">
                <i class="fas fa-envelope text-white"></i>
                admin@plasa.com
              </span>
              <span class="text-white ml-1 ft-13">
                <i class="fas fa-phone-alt text-white"></i>
                (+01) 23456789 - (+01) 23456789
              </span>
            </div>
            <div class="col-md-7 mt-1 no-mp t-right">
              <span class="text-white mt-2 ml-2 mr-2 ft-13">
                <i class="fas fa-bell text-white"></i>
                notifikasi
              </span>
              <span class="text-white mt-2 ml-2 mr-2 ft-13">
                <i class="fas fa-question-circle text-white"></i>
                bantuan
              </span>
              <span class="mt-2 ml-2 mr-2">
                <a class="text-white ft-12" href="">
                  DAFTAR
                </a>
              </span>
              <span class="ml-2">
                <a class="btn btn-sm m0 bg-white ft-12" href="katalog.html">
                  MASUK
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SearchMid() {
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
    <div class="container d-none d-md-block">
      <div class="row">
        <div class="col-md-3">
          <a class="navbar-brand risk" href="#hi">
            <img class="img-fluid" src="../img/logo.png" alt="yubobo" />
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
            <a class="nav-link nv-icon" href="">
              <i class="fas fa-heart"></i>
            </a>
            <a class="nav-link nv-icon" href="">
              <i class="fas fa-shopping-cart"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

function SearchSm() {
  return (
    <div class="container d-block d-md-none mt-2 h-40">
      <div class="row">
        <div class="col-2 d-md-none d-block">
          <button
            type="button"
            class="btn navbar-toggler bd-0"
            data-toggle="collapse"
            data-target="#navbarCollapse"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
        </div>
        <div class="col-8">
          <div class="form-group has-search d-block d-md-none h-20">
            <span class="fa fa-search form-control-feedback"></span>
            <input
              type="text"
              class="form-control br-20"
              placeholder="Cari produk..."
            />
          </div>
        </div>
        <div class="col-2 margin-0 padding-0">
          <div class="navbar-nav nv-icon">
            <a class="nav-link nv-link" href="">
              <i class="fas fa-heart"></i>
            </a>
            <a class="nav-link nv-icon" href="">
              <i class="fas fa-shopping-cart"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
