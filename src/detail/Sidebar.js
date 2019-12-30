import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import 'jquery';
import 'popper.js';
import './css/detail.css';
import Yobobo from '../detail/img/yubobo.png';
import JNE from '../detail/img/jne.png';
import TIKI from '../detail/img/tiki.png';
import pos from '../detail/img/pos.png';
import sicepat from '../detail/img/sicepat.png';
import jnt from '../detail/img/jnt.png';
function Sidebar(){
    return(
        <div id="sidebar" class="col-md-3">
            <div class="card p-3">
                <div class="text-center p-0">
                    <img src={Yobobo} width="100%" />
                    <span class="grey">
                        <i class="fa fa-map-marker pt-3" aria-hidden="true"></i>
                        Kota Surabaya
                        <p>
                            <i class="fa fa-clock-o" aria-hidden="true"></i>
                            Sekitar 6 jam yang lalu</p>
                    </span>
                </div>
                <hr />
                <span class="grey">Harga: Rp. 10.000 - Rp. 200.000
                </span>
                <p>
                    <b>99.60% (200 produk)</b>
                </p>
                <span class="grey">Diskusi dibalas
                </span>
                <p>
                    <b>94% (±8 menit)</b>
                </p>
                <span class="grey">Pesan dibalas
                </span>
                <p>
                    <b>100% (±1 jam)</b>
                </p>
                <div class="container-fluid p-0">
                    <button class="btn btn-info btn-md btn-block" >
                        CHAT PENJUAL</button>
                </div>
                <hr />
                <h5 class="font-weight-bold">Dukungan Pengiriman</h5>
                <div class="row">
                    <img src={JNE} class="delivery-service" />
                    <div class="p-3" class="grey">
                        <i class="fa fa-check" aria-hidden="true"></i>
                        Regular
                        <i class="fa fa-check" aria-hidden="true"></i>
                        YES
                    </div>
                </div>
                <div class="row">
                    <img src={TIKI} class="delivery-service" />
                    <div class="p-3" class="grey">
                        <i class="fa fa-check" aria-hidden="true"></i>
                        Regular
                        <p>
                            <i class="fa fa-check" aria-hidden="true"></i>
                            Over Night Service</p>
                    </div>
                </div>
                <div class="row">
                    <img src={pos} class="delivery-service" />
                    <div class="p-3" class="grey">
                        <i class="fa fa-check" aria-hidden="true"></i>
                        Pos Kilat Khusus
                    </div>
                </div>
                <div class="row">
                    <img src={sicepat} class="delivery-service" />
                    <div class="p-3" class="grey">
                        <i class="fa fa-check" aria-hidden="true"></i>
                        Pos Kilat Khusus
                    </div>
                </div>
                <div class="row">
                    <img src={jnt} class="delivery-service" />
                    <div class="p-3" class="grey">
                        <i class="fa fa-check" aria-hidden="true"></i>
                        Pos Kilat Khusus
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Sidebar;