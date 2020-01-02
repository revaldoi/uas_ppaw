import React from "react";
import phone from "./img/phone.png";
import time from "./img/time.png";
import mail from "./img/mail.png";
import cart from "./img/cart.png";

export default function Support() {
  return (
    <section className="cta p-35 d-none d-sm-block">
      <div className="container">
        <div className="row">
          <div className="col-md-3 col-6">
            <div className="inline icon">
              <img src={time} alt="" />
            </div>
            <div className="inline info">
              <p>Working Days/Hours!</p>
              <span>Mon - Fri / 08:00 - 18:00</span>
            </div>
          </div>
          <div className="col-md-3 col-6 divider">
            <div className="inline icon">
              <img src={phone} alt="" />
            </div>
            <div className="inline info">
              <p>Free Support Line!</p>
              <span>123456789</span>
            </div>
          </div>
          <div className="col-md-3 col-6 divider">
            <div className="inline icon">
              <img src={mail} alt="" />
            </div>
            <div className="inline info">
              <p>Order Support!</p>
              <span>admin@plasa.com</span>
            </div>
          </div>
          <div className="col-md-3 col-6 divider">
            <div className="inline icon">
              <img src={cart} alt="" />
            </div>
            <div className="inline info">
              <p>Safe Shopping!</p>
              <span>Safe Shopping Guarantee</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
