import React from "react";
import Banner from "./Banner.js";
import Product from "./Product.js";
import Payment from "./Payment.js";
import "./css/home.css";

export default function Home() {
  return (
    <React.Fragment>
      <Banner />
      <br />
      <Product />
      <Payment />
    </React.Fragment>
  );
}
