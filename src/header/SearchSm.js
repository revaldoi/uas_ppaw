import React from "react";

export default function SearchSm() {
  return (
    <div className="container d-block d-md-none mt-2 h-40">
      <div className="row">
        <div className="col-2 d-md-none d-block">
          <button
            type="button"
            className="btn navbar-toggler bd-0"
            data-toggle="collapse"
            data-target="#navbarCollapse"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
        <div className="col-8 pl-0 pr-0">
          <div className="form-group has-search d-block d-md-none h-20">
            <span className="fa fa-search form-control-feedback"></span>
            <input
              type="text"
              className="form-control br-20"
              placeholder="Cari produk..."
            />
          </div>
        </div>
        <div className="col-2 margin-0 padding-0">
          <div className="navbar-nav nv-icon">
            <div className="row pl-3">
              <a className="nav-link nv-link" href="/catalog">
                <i className="fas fa-heart"></i>
              </a>
              <a className="nav-link nv-icon pl-3" href="/catalog">
                <i className="fas fa-shopping-cart"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
