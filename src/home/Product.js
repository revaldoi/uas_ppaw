import React from "react";
import banner from "./img/banner.png";
import banner2 from "./img/banner2.png";
import product3 from "./img/product3.jpg";
import product2 from "./img/product2.jpg";
import product1 from "./img/product1.jpg";
import rekomendasi from "./img/produk-rekomendasi.png";

import "./css/carousel.css";

export default function Product() {
  return (
    <React.Fragment>
      <div className="container">
        <div className="product-banner col-md-12">
          <div className="col-md-3">
            <img alt="banner" className="pbanner-img " src={banner} />
          </div>
          <div className="pbanner-title col-md-6">
            <p>PRODUK GRATIS UNTUK PENGGUNA BARU</p>
          </div>
          <div className="chevron col-md-3">
            <span className="fa fa-chevron-circle-right"></span>
            <img
              alt="banner"
              className="pbanner-img"
              style={{ float: "right" }}
              src={banner2}
            />
          </div>
        </div>
      </div>
      <br />

      <div className="container">
        <p className="more-link">
          Lihat semua <i className="fa fa-arrow-right"></i>
        </p>
      </div>
      <div className="container">
        <p className="product-title">PRODUK TERLARIS</p>
        <div className="slider">
          <div className="container-fluid">
            <div
              id="carousel-example"
              className="carousel slide"
              data-ride="carousel"
            >
              <div className="carousel-inner row w-100 mx-auto" role="listbox">
                <div className="carousel-item col-12 col-sm-6 col-md-4 col-lg-4 border active">
                  <div className="col-md-12 row">
                    <div className="product-img col-md-8">
                      <div className="top1">
                        <i>TOP 1</i>
                      </div>
                      <img alt="banner" className="top1-img" src={product3} />
                      <p className="top1-title">Penjualan / Bulan 42RB+</p>
                    </div>
                    <div className="product-img2 col-md-4">
                      <div className="top2">
                        <i>2</i>
                      </div>
                      <img alt="banner" className="top2-img" src={product1} />
                      <div className="top2">
                        <i>3</i>
                      </div>
                      <img alt="banner" className="top2-img" src={product2} />
                    </div>
                    <p className="card-title">Wedges Wanita</p>
                  </div>
                </div>
                <div className="carousel-item col-12 col-sm-6 col-md-4 col-lg-4 border">
                  <div className="col-md-12 row">
                    <div className="product-img col-md-8">
                      <div className="top1">
                        <i>TOP 1</i>
                      </div>
                      <img alt="banner" className="top1-img" src={product3} />
                      <p className="top1-title">Penjualan / Bulan 42RB+</p>
                    </div>
                    <div className="product-img2 col-md-4">
                      <div className="top2">
                        <i>2</i>
                      </div>
                      <img alt="banner" className="top2-img" src={product1} />
                      <div className="top2">
                        <i>3</i>
                      </div>
                      <img alt="banner" className="top2-img" src={product2} />
                    </div>
                    <p className="card-title">Wedges Wanita</p>
                  </div>
                </div>
                <div className="carousel-item col-12 col-sm-6 col-md-4 col-lg-4 border">
                  <div className="col-md-12 row">
                    <div className="product-img col-md-8">
                      <div className="top1">
                        <i>TOP 1</i>
                      </div>
                      <img alt="banner" className="top1-img" src={product3} />
                      <p className="top1-title">Penjualan / Bulan 42RB+</p>
                    </div>
                    <div className="product-img2 col-md-4">
                      <div className="top2">
                        <i>2</i>
                      </div>
                      <img alt="banner" className="top2-img" src={product1} />
                      <div className="top2">
                        <i>3</i>
                      </div>
                      <img alt="banner" className="top2-img" src={product2} />
                    </div>
                    <p className="card-title">Wedges Wanita</p>
                  </div>
                </div>
                <div className="carousel-item col-12 col-sm-6 col-md-4 col-lg-4 border">
                  <div className="col-md-12 row">
                    <div className="product-img col-md-8">
                      <div className="top1">
                        <i>TOP 1</i>
                      </div>
                      <img alt="banner" className="top1-img" src={product3} />
                      <p className="top1-title">Penjualan / Bulan 42RB+</p>
                    </div>
                    <div className="product-img2 col-md-4">
                      <div className="top2">
                        <i>2</i>
                      </div>
                      <img alt="banner" className="top2-img" src={product1} />
                      <div className="top2">
                        <i>3</i>
                      </div>
                      <img alt="banner" className="top2-img" src={product2} />
                    </div>
                    <p className="card-title">Wedges Wanita</p>
                  </div>
                </div>
              </div>
              <a
                className="carousel-control-prev"
                href="#carousel-example"
                role="button"
                data-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="sr-only">Previous</span>
              </a>
              <a
                className="carousel-control-next"
                href="#carousel-example"
                role="button"
                data-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="sr-only">Next</span>
              </a>
            </div>
          </div>
        </div>
        <p className="more-link">
          Lihat semua <i className="fa fa-arrow-right"></i>
        </p>
      </div>
      <br />
      <div className="container">
        <p className="product-title underline">PRODUK TERMURAH</p>

        <div className="row col-md-12">
          <div className="card-product col-md-2 col-sm-6 py-2 px-0">
            <div className="card ">
              <a href="#">
                <div className="product">
                  <img src={rekomendasi} alt="produk" />
                </div>
              </a>
              <div className="card-text">
                Asus VivoBook Max M4
                <p className="product-price">Rp 6,000,000</p>
                <div className="product-rating">
                  <i className="fa fa-fw fa-heart-o"></i>
                  <span>2770</span>
                  <span className="star-rating">(2771)</span>
                  <i className="fa fa-star-o star" aria-hidden="true"></i>
                  <i
                    className="fa fa-fw fa-star-half-o star"
                    aria-hidden="true"
                  ></i>
                  <i className="fa fa-star star" aria-hidden="true"></i>
                  <i className="fa fa-star star" aria-hidden="true"></i>
                  <i className="fa fa-star star" aria-hidden="true"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="card-product col-md-2 col-sm-6 py-2 px-0">
            <div className="card ">
              <div className="corner-ribbon">
                20% <i>off</i>
              </div>
              <a href="#">
                <div className="product">
                  <img src={rekomendasi} alt="produk" />
                </div>
              </a>
              <div className="card-text">
                Asus VivoBook Max M4
                <p className="product-price">Rp 6,000,000</p>
                <div className="product-rating">
                  <i className="fa fa-fw fa-heart-o"></i>
                  <span>2770</span>
                  <span className="star-rating">(2771)</span>
                  <i className="fa fa-star-o star" aria-hidden="true"></i>
                  <i
                    className="fa fa-fw fa-star-half-o star"
                    aria-hidden="true"
                  ></i>
                  <i className="fa fa-star star" aria-hidden="true"></i>
                  <i className="fa fa-star star" aria-hidden="true"></i>
                  <i className="fa fa-star star" aria-hidden="true"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="card-product col-md-2 col-sm-6 py-2 px-0 selected">
            <div className="card">
              <div className="corner-ribbon">
                20% <i>off</i>
              </div>
              <a href="#">
                <div className="product">
                  <img src={rekomendasi} alt="produk" />
                </div>
              </a>
              <div className="card-text">
                Asus VivoBook Max M4
                <p className="product-price">Rp 6,000,000</p>
                <div className="product-rating">
                  <i className="fa fa-fw fa-heart-o"></i>
                  <span>2770</span>
                  <span className="star-rating">(2771)</span>
                  <i className="fa fa-star-o star" aria-hidden="true"></i>
                  <i
                    className="fa fa-fw fa-star-half-o star"
                    aria-hidden="true"
                  ></i>
                  <i className="fa fa-star star" aria-hidden="true"></i>
                  <i className="fa fa-star star" aria-hidden="true"></i>
                  <i className="fa fa-star star" aria-hidden="true"></i>
                </div>
              </div>
              <button className="btn-selected">Produk Serupa</button>
            </div>
          </div>
          <div className="card-product col-md-2 col-sm-6 py-2 px-0">
            <div className="card ">
              <a href="#">
                <div className="product">
                  <img src={rekomendasi} alt="produk" />
                </div>
              </a>
              <div className="card-text">
                Asus VivoBook Max M4
                <p className="product-price">Rp 6,000,000</p>
                <div className="product-rating">
                  <i className="fa fa-fw fa-heart-o"></i>
                  <span>2770</span>
                  <span className="star-rating">(2771)</span>
                  <i className="fa fa-star-o star" aria-hidden="true"></i>
                  <i
                    className="fa fa-fw fa-star-half-o star"
                    aria-hidden="true"
                  ></i>
                  <i className="fa fa-star star" aria-hidden="true"></i>
                  <i className="fa fa-star star" aria-hidden="true"></i>
                  <i className="fa fa-star star" aria-hidden="true"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="card-product col-md-2 col-sm-6 py-2 px-0">
            <div className="card ">
              <div className="corner-ribbon">
                20% <i>off</i>
              </div>
              <a href="#">
                <div className="product">
                  <img src={rekomendasi} alt="produk" />
                </div>
              </a>
              <div className="card-text">
                Asus VivoBook Max M4
                <p className="product-price">Rp 6,000,000</p>
                <div className="product-rating">
                  <i className="fa fa-fw fa-heart-o"></i>
                  <span>2770</span>
                  <span className="star-rating">(2771)</span>
                  <i className="fa fa-star-o star" aria-hidden="true"></i>
                  <i
                    className="fa fa-fw fa-star-half-o star"
                    aria-hidden="true"
                  ></i>
                  <i className="fa fa-star star" aria-hidden="true"></i>
                  <i className="fa fa-star star" aria-hidden="true"></i>
                  <i className="fa fa-star star" aria-hidden="true"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="card-product col-md-2 col-sm-6 py-2 px-0">
            <div className="card ">
              <a href="#">
                <div className="product">
                  <img src={rekomendasi} alt="produk" />
                </div>
              </a>
              <div className="card-text">
                Asus VivoBook Max M4
                <p className="product-price">Rp 6,000,000</p>
                <div className="product-rating">
                  <i className="fa fa-fw fa-heart-o"></i>
                  <span>2770</span>
                  <span className="star-rating">(2771)</span>
                  <i className="fa fa-star-o star" aria-hidden="true"></i>
                  <i
                    className="fa fa-fw fa-star-half-o star"
                    aria-hidden="true"
                  ></i>
                  <i className="fa fa-star star" aria-hidden="true"></i>
                  <i className="fa fa-star star" aria-hidden="true"></i>
                  <i className="fa fa-star star" aria-hidden="true"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
