import React from "react";

export default function SearchSm() {
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
            <a class="nav-link nv-link">
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
