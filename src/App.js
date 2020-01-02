import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./header/";
import Footer from "./footer/";
import Home from "./home/";
import Detail from "./detail/Detail";
import Catalog from "./catalog/Catalog";

function App() {
  return (
    <Router>
      <Header />
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/catalog" component={Catalog} />
        <Route path="/detail" component={Detail} />
      </div>
      <Footer />
    </Router>
  );
}

export default App;
