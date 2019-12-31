import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap-grid.min.css";
import "bootstrap/dist/js/bootstrap.js";
import "jquery";
import "popper.js";

export default function Header() {
  return (
    <nav
      class="navbar navbar-expand-lg navbar-dark no-mp cta mb-2"
      style="margin: 0; padding: 0;"
    >
      <div class="col-md-12 no-mp" style="margin: 0; padding: 0;">
        <div class="row d-none d-md-block" style="margin: 0; padding: 0;">
          <div
            class="col-md-12 pt-0 mb-2"
            style="background:rgba(59,178,184,1);"
          >
            <div class="container">
              <div class="row ml-3">
                <div class="col-md-5 mt-1 no-mp">
                  <span class="text-white " style="font-size: 13px;">
                    <i class="fas fa-envelope text-white"></i>
                    admin@plasa.com
                  </span>
                  <span class="text-white ml-1" style="font-size: 13px;">
                    <i class="fas fa-phone-alt text-white"></i>
                    (+01) 23456789 - (+01) 23456789
                  </span>
                </div>
                <div class="col-md-7 mt-1 no-mp" style="text-align: right;">
                  <span
                    class="text-white mt-2 ml-2 mr-2"
                    style="font-size: 13px;"
                  >
                    <i class="fas fa-bell text-white"></i>
                    notifikasi
                  </span>
                  <span
                    class="text-white mt-2 ml-2 mr-2"
                    style="font-size: 13px;"
                  >
                    <i class="fas fa-question-circle text-white"></i>
                    bantuan
                  </span>
                  <span class="mt-2 ml-2 mr-2">
                    <a class="text-white" href="" style="font-size:12px">
                      DAFTAR
                    </a>
                  </span>
                  <span class="ml-2">
                    <a
                      class="btn btn-sm m0"
                      href="katalog.html"
                      style="background: white; font-size: 12px;"
                    >
                      MASUK
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="container d-none d-md-block" style="height: 120px;">
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
                  class="form-control"
                  placeholder="Cari produk..."
                  required
                  style="border-radius: 0;"
                />
                <div class="input-group-prepend">
                  <a
                    href="katalog.html"
                    class="input-group-text text-white"
                    style="background: transparent;"
                  >
                    <i class="fas fa-search"></i>
                  </a>
                </div>
              </div>
              <div class="mt-2 text-white under-search" style="font-size: 9pt;">
                <span class="">
                  <a
                    href="katalog.html"
                    class="text-white"
                    style="font-size:12px;"
                  >
                    Elektronik
                  </a>
                </span>
                <span class="ml-2">
                  <a
                    href="katalog.html"
                    class="text-white"
                    style="font-size:12px;"
                  >
                    Handhone & Tablet
                  </a>
                </span>
                <span class="ml-2">
                  <a
                    href="katalog.html"
                    class="text-white"
                    style="font-size:12px;"
                  >
                    Laptop & Aksesoris
                  </a>
                </span>
                <span class="ml-2">
                  <a
                    href="katalog.html"
                    class="text-white"
                    style="font-size:12px;"
                  >
                    Fashion Wanita
                  </a>
                </span>
                <span class="ml-2">
                  <a
                    href="katalog.html"
                    class="text-white"
                    style="font-size:12px;"
                  >
                    Fashion Pria
                  </a>
                </span>
                <span class="ml-2">
                  <a
                    href="katalog.html"
                    class="text-white"
                    style="font-size:12px;"
                  >
                    Fashion Anak
                  </a>
                </span>
                <span class="ml-2">
                  <a
                    href="katalog.html"
                    class="text-white"
                    style="font-size:12px;"
                  >
                    Fashion Muslim
                  </a>
                </span>
                <span class="ml-2">
                  <a
                    href="katalog.html"
                    class="text-white"
                    style="font-size:12px;"
                  >
                    Kecantikan
                  </a>
                </span>
              </div>
            </div>
            <div class="col-md-1 mt-4" style="margin: 0; padding: 0;">
              <div
                class="navbar-nav"
                style="display:inline-block; width: 100%; text-align: right;"
              >
                <a
                  class="nav-link"
                  style="display:inline-block; margin-left: 10px;"
                  href=""
                >
                  <i class="fas fa-heart"></i>
                </a>
                <a
                  class="nav-link"
                  style="display:inline-block; margin-left: 10px;"
                  href=""
                >
                  <i class="fas fa-shopping-cart"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div class="container d-block d-md-none mt-2" style="height: 40px;">
          <div class="row">
            <div class="col-2 d-md-none d-block">
              <button
                type="button"
                class="btn navbar-toggler"
                data-toggle="collapse"
                data-target="#navbarCollapse"
                style="border:0px"
              >
                <span class="navbar-toggler-icon"></span>
              </button>
            </div>
            <div class="col-8">
              <div
                class="form-group has-search d-block d-md-none"
                style="height: 20px;"
              >
                <span class="fa fa-search form-control-feedback"></span>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Cari produk..."
                  style="border-radius: 20px;"
                />
              </div>
            </div>
            <div class="col-2" style="margin: 0; padding: 0;">
              <div
                class="navbar-nav"
                style="display:inline-block; width: 100%;"
              >
                <a
                  class="nav-link"
                  style="display:inline-block; margin-left: 5px; margin-right: 5px;;"
                  href=""
                >
                  <i class="fas fa-heart"></i>
                </a>
                <a
                  class="nav-link"
                  style="display:inline-block; margin-left: 5px; margin-right: 5px;;"
                  href=""
                >
                  <i class="fas fa-shopping-cart"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
