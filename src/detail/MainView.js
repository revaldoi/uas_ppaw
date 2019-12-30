import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import 'jquery';
import 'popper.js';
import './css/detail.css';
import ProductImage from '../detail/img/detail_produk-5.png';
import SideBar from './Sidebar';

function MainView(){
    return(
        <div class="row">
                <div class="col-md-9">
                    <div class="row">
                        <div class="col-md-6 col-sm-12 item-photo">
                            <div class="preview col-md-10">
                                <div class="preview-pic tab-content">
                                    <div class="tab-pane active" id="pic-1"><img src={ProductImage}/></div>
                                    <div class="tab-pane" id="pic-2"><img src={ProductImage}/></div>
                                    <div class="tab-pane" id="pic-3"><img src={ProductImage}/></div>
                                    <div class="tab-pane" id="pic-4"><img src={ProductImage}/></div>
                                    <div class="tab-pane" id="pic-5"><img src={ProductImage}/></div>
                                </div>
                                <ul class="preview-thumbnail nav nav-tabs">
                                    <li class="active">
                                        <a><img src={ProductImage}/></a>
                                    </li>
                                    <li>
                                        <a><img src={ProductImage}/></a>
                                    </li>
                                    <li>
                                        <a><img src={ProductImage}/></a>
                                    </li>
                                    <li>
                                        <a><img src={ProductImage}/></a>
                                    </li>
                                    <li>
                                        <a><img src={ProductImage}/></a>
                                    </li>
                                </ul> 
                            </div>
                        </div>
                        <div class="col-md-6 col-sm-12">
                            {/* <!-- Datos del vendedor y titulo del producto --> */}
                            <h4 class="font-weight-bold">IPHONE 6 19GB GREY SECOND kondisi Nonefingerprint</h4>
                            <span class="rating">
                                <i class="fa fa-star"  aria-hidden="true"></i>
                                <i class="fa fa-star"  aria-hidden="true"></i>
                                <i class="fa fa-star"  aria-hidden="true"></i>
                                <i class="fa fa-fw fa-star-half-o"  aria-hidden="true"></i>
                                <i class="fa fa-star-o"  aria-hidden="true"></i>
                            </span>
                            <p
                                class="review-title"
                                class="fontSize12Block">10 ulasan</p>
                            <div class="row">
                                <div class="col-md-12 col-12">
                                    <p>99,57% Transaksi sukses dari 235 transaksi
                                        <i
                                            class="fa fa-fw fa-info-circle"></i>
                                    </p>
                                </div>
                            </div>
                            {/* <!-- Precios --> */}
                            <h3 class="cyanMargin">RP 1,796,000</h3>
                            <h5 class="grey">
                                <s>Rp 1,960,000</s>
                            </h5>
                            <br/>
                            <div class="row margin-top-20 margin-bottom-20">
                                <div class="col-md-3 col-4">
                                    {/* <!-- Setting max order input --> */}
                                    {/* <!-- End Setting max order input --> */}
                                    <a>
                                        <b>Jumlah</b>
                                    </a>
                                    <input
                                        type="number"
                                        name="qty"
                                        value="1"
                                        min="1"
                                        max="9999"
                                        step="1"
                                        class="input-box form-control border-radius-50 text-center margin-top-5 margin-bottom-20"
                                        id="input"/>
                                </div>
                                <div class="col-md-9 col-8 ">
                                    <a class="d-none d-sm-block">
                                        <b>Catatan untuk Penjual (Optional)</b>
                                    </a>
                                    {/* <!-- Ini untuk desktop --> */}
                                    <a class="d-block d-sm-none">
                                        <b>Catatan untuk Penjual</b>
                                    </a>
                                    {/* <!-- Ini untuk mobile --> */}
                                    <input
                                        type="text"
                                        name="notes"
                                        class="input-box form-control border-radius-50 margin-top-5"
                                        placeholder="Contoh: Warna Putih, Ukuran XL, Edisi"/>
                                </div>
                            </div>
                            <div class="row  margin-top-20 margin-bottom-20">
                                <div class="container-fluid " id="tambahKeranjang">
                                    <button class="btn btn-info btn-md py-2 px-4">
                                        TAMBAH KE KERANJANG</button>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-6 pt-1">
                                    {/* <!-- <a onclick="addWishlist(501)" class="wishlist-dp" > --> */}
                                    <i class="fa fa-heart"></i>
                                    <span class="marginLeft">Tambah Wishlist</span>
                                </div>
                                <div class="col-md-6">
                                    <button class="btn btn-outline-secondary" type="button">Bagikan
                                        <i class="fa fa-fw fa-share-alt"></i>
                                    </button>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-3 col-3 py-4">
                                    <span class="pull-left">
                                        <i class="fa fa-eye"></i>
                                    </span>
                                    <span class="pull-right">
                                        <p>
                                            <span class="grey">Dilihat<br/>
                                                <b>5,3rb</b>
                                            </span>
                                        </p>
                                    </span>
                                </div>
                                <div class="col-md-3 col-3 py-4">
                                    <span class="pull-left">
                                        <i class="fa fa-check-circle-o"></i>
                                    </span>
                                    <span class="pull-right">
                                        <p>
                                            <span class="grey">Terkirim<br/>
                                                <b>5</b>
                                            </span>
                                        </p>
                                    </span>
                                </div>
                                <div class="col-md-3 col-3 py-4">
                                    <span class="pull-left">
                                        <i class="fa fa-archive"></i>
                                    </span>
                                    <span class="pull-right">
                                        <p>
                                            <span class="grey">Berat <br/>
                                                <b>100 gr</b>
                                            </span>
                                        </p>
                                    </span>
                                </div>
                                <div class="col-md-3 col-3 py-4">
                                    <span class="pull-left">
                                        <i class="fa fa-shield"></i>
                                    </span>
                                    <span class="pull-right">
                                        <p>
                                            <span class="grey">Asuransi<br/>
                                                <b>Opsional</b>
                                            </span>
                                        </p>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    {/* <!-- INFORMASI PRODUK --> */}
                    <div class="col-xs-9">
                        <ul class="menu-items" id="menuItems">
                            <li class="active">Informasi Produk</li>
                            <li>Ulasan (12)</li>
                            <li>Diskusi Produk (3)</li>
                        </ul>
                        <div class="borderSilver">
                            <p class="marginBtm">
                                Sit sit laboris laboris quis deserunt reprehenderit commodo. Eiusmod proident
                                officia quis elit tempor mollit et sint officia qui e xercitation officia
                                proident enim. Minim pariatur elit in ut dolore adipisicing proident amet.
                                Ullamco pariatur proident eiusmod ad ut sunt nisi occaecat culpa sint ad irure.
                            </p>
                            <p
                                class="borderSilver2">
                                Sit sit laboris laboris quis deserunt reprehenderit commodo. Eiusmod proident
                                officia quis elit tempor mollit et sint officia qui exercitation officia
                                proident enim. Minim pariatur elit in ut dolore adipisicing proident amet.
                                Ullamco pariatur proident eiusmod ad ut sunt nisi occaecat culpa sint ad irure.
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