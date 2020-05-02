import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React from "react";

import "./App.scss";
import Navbar from "./components/navbar";
import Slider from "./components/Home/slider";
import Footer from "./components/footer";
import Login from "./components/login";
import Contact from "./components/Home/contact";
import Welcome from "./components/Home/welcome";
import Delivery from "./components/Home/delivery";
import Home_menu from "./components/Home/home_menu";
import Cart from "./components/Cart/cart";
import Menu_head from "./components/Menu/menu_head";
import Orders from "./components/Orders/orders";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar></Navbar>
        <Route path="/index" component={Slider} />
        <Route path="/index" component={Delivery} />
        <Route path="/index" component={Welcome} />
        <Route path="/index" component={Contact} />
        <Route path="/index" component={Home_menu} />
        <Route path="/index" component={Footer} />
        <Route path="/login" component={Login} />
        <Route path="/cart" component={Cart} />
        <Route path="/menu" component={Menu_head} />
        <Route path="/menu" component={Footer} />
        <Route path="/Orders" component={Orders} />
      </div>
    </Router>
  );
}

export default App;
