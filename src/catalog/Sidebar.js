import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap-grid.min.css";
import "bootstrap/dist/js/bootstrap.js";
import "jquery";
import "popper.js";
import ProductSidebar from "./img/katalog-side.png";

function Sidebar() {
  return (
    <div className="App">
      <div className="container-fluid py-5 sided">
        <h4>Cari Produk</h4>
        <input
          type="email"
          className="form-control my-4"
          placeholder="Cari produk..."
        />
        <button type="button" className="btn btn-primary btn-md btn-block">
          CARI PRODUK
        </button>
        <br></br>
        <h5 className="font-weight-bold my-4 filter">Filters</h5>
        <hr className="filter-line" />
        <h5 className="font-weight-bold my-4">Kategori</h5>
        <form>
          <p>
            <input type="checkbox" />
            Elektronik
          </p>
          <p>
            <input type="checkbox" />
            Handphone & Tablet
          </p>
          <p>
            <input type="checkbox" />
            Laptop & Aksesoris
          </p>
          <p>
            <input type="checkbox" defaultChecked />
            Fashion Wanita
          </p>
          <p>
            <input type="checkbox" />
            Fashion Pria
          </p>
          <p>
            <input type="checkbox" />
            Fashion Muslim
          </p>
          <p>
            <input type="checkbox" />
            Fashion Anak
          </p>
          <p>
            <input type="checkbox" />
            Kecantikan
          </p>
          <p>
            <input type="checkbox" />
            Kesehatan
          </p>
          <p>
            <input type="checkbox" />
            Perawatan Tubuh
          </p>
        </form>
        <hr />
        <h5 className="font-weight-bold my-4">Harga</h5>
        <div id="slider-range"></div>
        <p className="pt-3">Harga: Rp 10.000 - Rp 200.000</p>
        <button type="button" className="btn btn-primary btn-md btn-block">
          FILTER
        </button>
        <hr />
        <h5 className="font-weight-bold my-4">Brands</h5>
        <form>
          <p>
            <input type="checkbox" />
            Asus (29)
          </p>
          <p>
            <input type="checkbox" />
            Brand Om Botak
          </p>
          <p>
            <input type="checkbox" />
            Gorilla
          </p>
          <p>
            <input type="checkbox" />
            Indo Dealz
          </p>
          <p>
            <input type="checkbox" />
            Onyx
          </p>
        </form>
        <hr />
        <h5>Etalase</h5>
        <form>
          <p>
            <input type="checkbox" />
            Handphone
          </p>
          <p>
            <input type="checkbox" />
            Headset
          </p>
          <p>
            <input type="checkbox" />
            Novel
          </p>
        </form>
        <hr />
        <h5 className="font-weight-bold my-4">Pengiriman</h5>
        <form>
          <p>
            <input type="checkbox" />
            JNE
          </p>
          <p>
            <input type="checkbox" />
            J&T
          </p>
          <p>
            <input type="checkbox" />
            TIKI
          </p>
          <p>
            <input type="checkbox" />
            SICEPAT
          </p>
          <p>
            <input type="checkbox" />
            POST INDONESIA
          </p>
        </form>
        <div className="text-center">
          <img src={ProductSidebar} width="100%" alt="Promotion" />
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
