import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap-grid.min.css";
import "bootstrap/dist/js/bootstrap.js";
import "jquery";
import "popper.js";

export default function Support() {
  return (
    <section class="cta p-35 d-none d-sm-block">
      <div class="container">
        <div class="row">
          <div class="col-md-3 col-6">
            <div class="inline icon">
              <img src="../img/time.png" alt="" />
            </div>
            <div class="inline info">
              <p>Working Days/Hours!</p>
              <span>Mon - Fri / 08:00 - 18:00</span>
            </div>
          </div>
          <div class="col-md-3 col-6 divider">
            <div class="inline icon">
              <img src="../img/phone.png" alt="" />
            </div>
            <div class="inline info">
              <p>Free Support Line!</p>
              <span>123456789</span>
            </div>
          </div>
          <div class="col-md-3 col-6 divider">
            <div class="inline icon">
              <img src="../img/mail.png" alt="" />
            </div>
            <div class="inline info">
              <p>Order Support!</p>
              <span>admin@plasa.com</span>
            </div>
          </div>
          <div class="col-md-3 col-6 divider">
            <div class="inline icon">
              <img src="../img/cart.png" alt="" />
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
