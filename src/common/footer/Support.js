import React from "react";
import phone from "../img/phone.png";
import time from "../img/time.png";
import mail from "../img/mail.png";
import cart from "../img/cart.png";

export default function Support() {
  return (
    <section class="cta p-35 d-none d-sm-block">
      <div class="container">
        <div class="row">
          <div class="col-md-3 col-6">
            <div class="inline icon">
              <img src={time} alt="" />
            </div>
            <div class="inline info">
              <p>Working Days/Hours!</p>chart
              <span>Mon - Fri / 08:00 - 18:00</span>
            </div>
          </div>
          <div class="col-md-3 col-6 divider">
            <div class="inline icon">
              <img src={phone} alt="" />
            </div>
            <div class="inline info">
              <p>Free Support Line!</p>
              <span>123456789</span>
            </div>
          </div>
          <div class="col-md-3 col-6 divider">
            <div class="inline icon">
              <img src={mail} alt="" />
            </div>
            <div class="inline info">
              <p>Order Support!</p>
              <span>admin@plasa.com</span>
            </div>
          </div>
          <div class="col-md-3 col-6 divider">
            <div class="inline icon">
              <img src={cart} alt="" />
            </div>
            <div class="inline info">
              <p>Safe Shopping!</p>
              <span>Safe Shopping Guarantee</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
