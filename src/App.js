import React from "react";
import Header from "./header/";
import Footer from "./footer/";
import Home from "./home/";
import Detail from "./detail/Detail";
import Catalog from "./catalog/Catalog";

function App() {
  return (
    <React.Fragment>
      <Header />
      <Home />
      <Footer />
    </React.Fragment>
  );
}

export default App;
