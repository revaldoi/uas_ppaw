import React from "react";
import visa from "./img/visa.webp";
import linepay from "./img/linepay.webp";
import jcb from "./img/jcb.svg";
import atmbersama from "./img/atmbersama.jpg";
import mandiriecash from "./img/mandiriecash.jpg";
import mandiriclickpay from "./img/mandiriclickpay.jpg";
import epaybri from "./img/epaybri.jpg";
import prima from "./img/prima.jpg";
import dompetku from "./img/dompetku.jpg";
import gopay from "./img/gopay.jpg";
import bca from "./img/bca.jpg";
import youtube from "./img/youtube.jpg";
import mastercard from "./img/mastercard.png";
import Indomaret from "./img/Indomaret.png";
import bcaklikpay from "./img/bcaklikpay.png";
import xltunai from "./img/xltunai.png";
import tcash from "./img/tcash.png";
import mandiri from "./img/mandiri.png";
import mandirisyariah from "./img/mandirisyariah.png";
import bri from "./img/bri.png";
import bni from "./img/bni.png";
import permata from "./img/permata.png";
import jne from "./img/jne.png";
import tiki from "./img/tiki.png";
import pos from "./img/pos.png";
import jnt from "./img/jnt.png";
import sicepat from "./img/sicepat.png";
import twitter from "./img/twitter.png";
import google from "./img/google.png";
import facebook from "./img/facebook.png";
import pinterest from "./img/pinterest.png";

export default function Payment() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-6">
          <p className="product-title">METHODE PEMBAYARAN</p>
          <div>
            <img alt="payment" src={mastercard} width="65" height="35" />
            <img alt="payment" src={visa} width="65" height="35" />
            <img alt="payment" src={jcb} width="65" height="35" />
            <img alt="payment" src={Indomaret} width="85" height="35" />
            <img alt="payment" src={atmbersama} width="60" height="45" />
          </div>
          <br />
          <div>
            <img alt="payment" src={bcaklikpay} width="65" height="35" />
            <img alt="payment" src={mandiriecash} width="65" height="35" />
            <img alt="payment" src={mandiriclickpay} width="65" height="35" />
            <img alt="payment" src={epaybri} width="85" height="20" />
            <img alt="payment" src={prima} width="60" height="45" />
          </div>
          <br />
          <div>
            <img alt="payment" src={xltunai} width="65" height="65" />
            <img alt="payment" src={dompetku} width="65" height="45" />
            <img alt="payment" src={tcash} width="65" height="25" />
            <img alt="payment" src={gopay} width="85" height="60" />
            <img alt="payment" src={linepay} width="65" height="35" />
          </div>
        </div>
        <div className="col-sm-6">
          <p className="product-title">BANK TRANSFER</p>
          <div>
            <img alt="payment" src={bca} width="65" height="30" />
            <img alt="payment" src={mandiri} width="65" height="30" />
            <img alt="payment" src={mandirisyariah} width="65" height="30" />
            <img alt="payment" src={bri} width="65" height="65" />
            <img alt="payment" src={bni} width="65" height="25" />
          </div>
          <div>
            <img alt="payment" src={permata} width="65" height="20" />
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <div className="row">
        <div className="col-sm-6">
          <p className="product-title">JENIS PENGIRIMAN</p>
          <div>
            <img alt="payment" src={jne} width="65" height="40" />
            <img alt="payment" src={tiki} width="65" height="45" />
            <img alt="payment" src={pos} width="65" height="50" />
            <img alt="payment" src={jnt} width="85" height="65" />
            <img alt="payment" src={sicepat} width="60" height="25" />
          </div>
        </div>
        <div className="col-sm-6">
          <br />
          <p className="product-title">
            Temukan Kami di: &nbsp; &nbsp;
            <img alt="payment" src={twitter} width="20" height="20" /> &nbsp;
            &nbsp; &nbsp;
            <img alt="payment" src={google} width="20" height="20" /> &nbsp;
            &nbsp;
            <img alt="payment" src={facebook} width="20" height="20" /> &nbsp;
            &nbsp;
            <img alt="payment" src={youtube} width="25" height="15" /> &nbsp;
            &nbsp;
            <img alt="payment" src={pinterest} width="20" height="20" /> &nbsp;
            &nbsp;
          </p>
        </div>
      </div>
      <br />
      <br />
      <br />
    </div>
  );
}
