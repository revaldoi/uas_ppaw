import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap-grid.min.css";
import "bootstrap/dist/js/bootstrap.js";
import "jquery";
import "popper.js";
import "./css/home.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

function Banner() {
  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="col-md-7 col-12 edo nopadding">
            <Crsl />
          </div>
          <div className="col-5 edo nopadding">
            <div className="col-12 nopadding atas">
              <a href="/catalog">
                <img
                  src="https://www.converse.com.sg/wp-content/uploads/2014/01/homepage-Chuck-II-Refresh-1600x540.jpg"
                  alt=""
                />
              </a>
            </div>
            <div className="col-12 nopadding atas mt-1">
              <a href="/catalog">
                <img
                  src="https://www.prosoundgear.com/wp-content/uploads/2017/03/JBL-Banner.jpg"
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <br />
      <div className="container">
        <div className="row">
          <div className="col-12 mb-2">
            <h5>PENCARIAN POPULER</h5>
          </div>
          <div className="col-md-3 col-6 col-xs-6 nopadding border">
            <div className="row mt-3">
              <div className="col-6 text-center nopadding">
                <p className="font-weight-bold">Converse</p>
                <p>3299 produk</p>
              </div>
              <div className="col-6 pencarian text-center nopadding">
                <a href="/catalog">
                  <img
                    src="https://image.flaticon.com/icons/svg/1974/1974761.svg"
                    alt=""
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-6 col-xs-6 nopadding border">
            <div className="row mt-3">
              <div className="col-6 text-center nopadding">
                <p className="font-weight-bold">Xiaomi</p>
                <p>1020 produk</p>
              </div>
              <div className="col-6 pencarian text-center nopadding">
                <a href="/catalog">
                  <img
                    src="https://image.flaticon.com/icons/svg/186/186239.svg"
                    alt=""
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-6 col-xs-6 nopadding border">
            <div className="row mt-3">
              <div className="col-6 text-center nopadding">
                <p className="font-weight-bold">JBL</p>
                <p>2090 produk</p>
              </div>
              <div className="col-6 pencarian text-center nopadding">
                <a href="/catalog">
                  <img
                    src="https://www.flaticon.com/premium-icon/icons/svg/2161/2161462.svg"
                    alt=""
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-6 col-xs-6 nopadding border">
            <div className="row mt-3">
              <div className="col-6 text-center nopadding">
                <p className="font-weight-bold">Asus</p>
                <p>4404 produk</p>
              </div>
              <div className="col-6 pencarian text-center nopadding">
                <a href="/catalog">
                  <img
                    src="https://image.flaticon.com/icons/svg/124/124106.svg"
                    alt=""
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h5>KATEGORI</h5>
          </div>
          <div className="col-md-2 col-sm-6 col-6 nopadding text-center border">
            <img
              className="kategori mt-3"
              src="https://image.flaticon.com/icons/svg/2160/2160324.svg"
              alt=""
            />
            <p className="mt-3">Elektronik</p>
          </div>
          <div className="col-md-2 col-sm-6 col-6 nopadding text-center border">
            <img
              className="kategori mt-3"
              src="https://www.flaticon.com/premium-icon/icons/svg/284/284286.svg"
              alt=""
            />
            <p className="mt-3">Handphone & Tablet</p>
          </div>
          <div className="col-md-2 col-sm-6 col-6 nopadding text-center border">
            <img
              className="kategori mt-3"
              src="https://image.flaticon.com/icons/svg/230/230306.svg"
              alt=""
            />
            <p className="mt-3">Laptop & Aksesoris</p>
          </div>
          <div className="col-md-2 col-sm-6 col-6 nopadding text-center border">
            <img
              className="kategori mt-3"
              src="https://image.flaticon.com/icons/svg/770/770088.svg"
              alt=""
            />
            <p className="mt-3">Fashion Wanita</p>
          </div>
          <div className="col-md-2 col-sm-6 col-6 nopadding text-center border">
            <img
              className="kategori mt-3"
              src="https://image.flaticon.com/icons/svg/892/892458.svg"
              alt=""
            />
            <p className="mt-3">Fashion Pria</p>
          </div>
          <div className="col-md-2 col-sm-6 col-6 nopadding text-center border">
            <img
              className="kategori mt-3"
              src="https://image.flaticon.com/icons/svg/822/822123.svg"
              alt=""
            />
            <p className="mt-3">Fashion Anak</p>
          </div>
          <div className="col-md-2 col-sm-6 col-6 nopadding text-center border">
            <img
              className="kategori mt-3"
              src="https://image.flaticon.com/icons/svg/1585/1585286.svg"
              alt=""
            />
            <p className="mt-3">Otomotif</p>
          </div>
          <div className="col-md-2 col-sm-6 col-6 nopadding text-center border">
            <img
              className="kategori mt-3"
              src="https://image.flaticon.com/icons/svg/1568/1568063.svg"
              alt=""
            />
            <p className="mt-3">Kecantikan</p>
          </div>
          <div className="col-md-2 col-sm-6 col-6 nopadding text-center border">
            <img
              className="kategori mt-3"
              src="https://image.flaticon.com/icons/svg/1142/1142172.svg"
              alt=""
            />
            <p className="mt-3">Kesehatan</p>
          </div>
          <div className="col-md-2 col-sm-6 col-6 nopadding text-center border">
            <img
              className="kategori mt-3"
              src="https://image.flaticon.com/icons/svg/1830/1830796.svg"
              alt=""
            />
            <p className="mt-3">Perawatan Tubuh</p>
          </div>
          <div className="col-md-2 col-sm-6 col-6 nopadding text-center border">
            <img
              className="kategori mt-3"
              src="https://image.flaticon.com/icons/svg/189/189810.svg"
              alt=""
            />
            <p className="mt-3">Lain-Lain</p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

function Crsl() {
  return (
    <Carousel
      showStatus={false}
      showThumbs={false}
      infiniteLoop={true}
      autoPlay={true}
    >
      <div>
        <img
          src="https://www.courts.com.sg/media/wysiwyg/1/9/19wk14-listing-samsung-galaxy-a80-m.jpg"
          alt=""
          width="100%"
          height="100%"
        />
      </div>
      <div>
        <img
          src="http://www.infotechnow.com/banner_intel8thgen.jpg"
          alt=""
          width="1100"
          height="500"
        />
      </div>
      <div>
        <img
          src="https://hitecmobile.com.sg/media/wysiwyg/Banner1_640x300.jpg"
          alt=""
          width="1100"
          height="500"
        />
      </div>
    </Carousel>
  );
}

export default Banner;
