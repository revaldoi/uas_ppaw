import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap-grid.min.css";
import "bootstrap/dist/js/bootstrap.js";
import "jquery";
import "popper.js";
import "./css/detail.css";
import Yobobo from "../detail/img/yubobo.png";
import JNE from "../detail/img/jne.png";
import TIKI from "../detail/img/tiki.png";
import pos from "../detail/img/pos.png";
import sicepat from "../detail/img/sicepat.png";
import jnt from "../detail/img/jnt.png";
function Sidebar() {
  return (
    <div id="sidebar" className="col-md-3">
      <div className="card p-3">
        <div className="text-center p-0">
          <img src={Yobobo} width="100%" alt="yobobo" />
          <span className="grey">
            <i className="fa fa-map-marker pt-3" aria-hidden="true"></i>
            Kota Surabaya
            <p>
              <i className="fa fa-clock-o" aria-hidden="true"></i>
              Sekitar 6 jam yang lalu
            </p>
          </span>
        </div>
        <hr />
        <span className="grey">Harga: Rp. 10.000 - Rp. 200.000</span>
        <p>
          <b>99.60% (200 produk)</b>
        </p>
        <span className="grey">Diskusi dibalas</span>
        <p>
          <b>94% (±8 menit)</b>
        </p>
        <span className="grey">Pesan dibalas</span>
        <p>
          <b>100% (±1 jam)</b>
        </p>
        <div className="container-fluid p-0">
          <button className="btn btn-info btn-md btn-block">
            CHAT PENJUAL
          </button>
        </div>
        <hr />
        <h5 className="font-weight-bold">Dukungan Pengiriman</h5>
        <div className="row">
          <img src={JNE} className="delivery-service" alt="jne" />
          <div className="p-3 grey">
            <i className="fa fa-check" aria-hidden="true"></i>
            Regular
            <i className="fa fa-check" aria-hidden="true"></i>
            YES
          </div>
        </div>
        <div className="row">
          <img src={TIKI} className="delivery-service" alt="tiki" />
          <div className="p-3 grey">
            <i className="fa fa-check" aria-hidden="true"></i>
            Regular
            <p>
              <i className="fa fa-check" aria-hidden="true"></i>
              Over Night Service
            </p>
          </div>
        </div>
        <div className="row">
          <img src={pos} className="delivery-service" alt="pos" />
          <div className="p-3 grey">
            <i className="fa fa-check" aria-hidden="true"></i>
            Pos Kilat Khusus
          </div>
        </div>
        <div className="row">
          <img src={sicepat} className="delivery-service" alt="sicepat" />
          <div className="p-3 grey">
            <i className="fa fa-check" aria-hidden="true"></i>
            Pos Kilat Khusus
          </div>
        </div>
        <div className="row">
          <img src={jnt} className="delivery-service" alt="jnt" />
          <div className="p-3 grey">
            <i className="fa fa-check" aria-hidden="true"></i>
            Pos Kilat Khusus
          </div>
        </div>
      </div>
    </div>
  );
}
export default Sidebar;
