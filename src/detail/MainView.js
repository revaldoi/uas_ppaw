import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap-grid.min.css";
import "bootstrap/dist/js/bootstrap.js";
import "jquery";
import "popper.js";
import "./css/detail.css";
import ProductImage from "../detail/img/detail_produk-5.png";
import SideBar from "./Sidebar";

function MainView() {
  return (
    <div className="row">
      <div className="col-md-9">
        <div className="row">
          <div className="col-md-6 col-sm-12 item-photo">
            <div className="preview col-md-10">
              <div className="preview-pic tab-content">
                <div className="tab-pane active" id="pic-1">
                  <img src={ProductImage} alt="produk" />
                </div>
                <div className="tab-pane" id="pic-2">
                  <img src={ProductImage} alt="produk" />
                </div>
                <div className="tab-pane" id="pic-3">
                  <img src={ProductImage} alt="produk" />
                </div>
                <div className="tab-pane" id="pic-4">
                  <img src={ProductImage} alt="produk" />
                </div>
                <div className="tab-pane" id="pic-5">
                  <img src={ProductImage} alt="produk" />
                </div>
              </div>
              <ul className="preview-thumbnail nav nav-tabs">
                <li className="active">
                  <a href="/catalog">
                    <img src={ProductImage} alt="produk" />
                  </a>
                </li>
                <li>
                  <a href="/catalog">
                    <img src={ProductImage} alt="produk" />
                  </a>
                </li>
                <li>
                  <a href="/catalog">
                    <img src={ProductImage} alt="produk" />
                  </a>
                </li>
                <li>
                  <a href="/catalog">
                    <img src={ProductImage} alt="produk" />
                  </a>
                </li>
                <li>
                  <a href="/catalog">
                    <img src={ProductImage} alt="produk" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-6 col-sm-12">
            {/* <!-- Datos del vendedor y titulo del producto --> */}
            <h4 className="font-weight-bold">
              IPHONE 6 19GB GREY SECOND kondisi Nonefingerprint
            </h4>
            <span className="rating">
              <i className="fa fa-star" aria-hidden="true"></i>
              <i className="fa fa-star" aria-hidden="true"></i>
              <i className="fa fa-star" aria-hidden="true"></i>
              <i className="fa fa-fw fa-star-half-o" aria-hidden="true"></i>
              <i className="fa fa-star-o" aria-hidden="true"></i>
            </span>
            <p className="review-title fontSize12Block">10 ulasan</p>
            <div className="row">
              <div className="col-md-12 col-12">
                <p>
                  99,57% Transaksi sukses dari 235 transaksi
                  <i className="fa fa-fw fa-info-circle"></i>
                </p>
              </div>
            </div>
            {/* <!-- Precios --> */}
            <h3 className="cyanMargin">RP 1,796,000</h3>
            <h5 className="grey">
              <s>Rp 1,960,000</s>
            </h5>
            <br />
            <div className="row margin-top-20 margin-bottom-20">
              <div className="col-md-3 col-4">
                {/* <!-- Setting max order input --> */}
                {/* <!-- End Setting max order input --> */}
                <a href="/catalog">
                  <b>Jumlah</b>
                </a>
                <input
                  type="number"
                  name="qty"
                  placeholder="1"
                  min="1"
                  max="9999"
                  step="1"
                  className="input-box form-control border-radius-50 text-center margin-top-5 margin-bottom-20"
                  id="input"
                />
              </div>
              <div className="col-md-9 col-8 ">
                <a href="/" className="d-none d-sm-block">
                  <b>Catatan untuk Penjual (Optional)</b>
                </a>
                {/* <!-- Ini untuk desktop --> */}
                <a href="/" className="d-block d-sm-none">
                  <b>Catatan untuk Penjual</b>
                </a>
                {/* <!-- Ini untuk mobile --> */}
                <input
                  type="text"
                  name="notes"
                  className="input-box form-control border-radius-50 margin-top-5"
                  placeholder="Contoh: Warna Putih, Ukuran XL, Edisi"
                />
              </div>
            </div>
            <div className="row  margin-top-20 margin-bottom-20">
              <div className="container-fluid " id="tambahKeranjang">
                <button className="btn btn-info btn-md py-2 px-4">
                  TAMBAH KE KERANJANG
                </button>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 pt-1">
                {/* <!-- <a onclick="addWishlist(501)" className="wishlist-dp" > --> */}
                <i className="fa fa-heart"></i>
                <span className="marginLeft">Tambah Wishlist</span>
              </div>
              <div className="col-md-6">
                <button className="btn btn-outline-secondary" type="button">
                  Bagikan
                  <i className="fa fa-fw fa-share-alt"></i>
                </button>
              </div>
            </div>
            <div className="row">
              <div className="col-md-3 col-3 py-4">
                <span className="pull-left">
                  <i className="fa fa-eye"></i>
                </span>
                <span className="pull-right">
                  <p>
                    <span className="grey">
                      Dilihat
                      <br />
                      <b>5,3rb</b>
                    </span>
                  </p>
                </span>
              </div>
              <div className="col-md-3 col-3 py-4">
                <span className="pull-left">
                  <i className="fa fa-check-circle-o"></i>
                </span>
                <span className="pull-right">
                  <p>
                    <span className="grey">
                      Terkirim
                      <br />
                      <b>5</b>
                    </span>
                  </p>
                </span>
              </div>
              <div className="col-md-3 col-3 py-4">
                <span className="pull-left">
                  <i className="fa fa-archive"></i>
                </span>
                <span className="pull-right">
                  <p>
                    <span className="grey">
                      Berat <br />
                      <b>100 gr</b>
                    </span>
                  </p>
                </span>
              </div>
              <div className="col-md-3 col-3 py-4">
                <span className="pull-left">
                  <i className="fa fa-shield"></i>
                </span>
                <span className="pull-right">
                  <p>
                    <span className="grey">
                      Asuransi
                      <br />
                      <b>Opsional</b>
                    </span>
                  </p>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- INFORMASI PRODUK --> */}
        <div className="col-xs-9">
          <ul className="menu-items" id="menuItems">
            <li className="active">Informasi Produk</li>
            <li>Ulasan (12)</li>
            <li>Diskusi Produk (3)</li>
          </ul>
          <div className="borderSilver">
            <p className="marginBtm">
              Sit sit laboris laboris quis deserunt reprehenderit commodo.
              Eiusmod proident officia quis elit tempor mollit et sint officia
              qui e xercitation officia proident enim. Minim pariatur elit in ut
              dolore adipisicing proident amet. Ullamco pariatur proident
              eiusmod ad ut sunt nisi occaecat culpa sint ad irure.
            </p>
            <p className="borderSilver2">
              Sit sit laboris laboris quis deserunt reprehenderit commodo.
              Eiusmod proident officia quis elit tempor mollit et sint officia
              qui exercitation officia proident enim. Minim pariatur elit in ut
              dolore adipisicing proident amet. Ullamco pariatur proident
              eiusmod ad ut sunt nisi occaecat culpa sint ad irure.
            </p>
          </div>
        </div>
        {/* <!-- END INFORMASI PRODUK --> */}
      </div>
      {/* <!-- END MAIN VIEW --> */}
      <SideBar />
    </div>
  );
}
export default MainView;
