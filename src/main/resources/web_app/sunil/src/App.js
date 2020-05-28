import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React from "react";
import "./App.css";

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
import Admin from './components/admin/admin'

function App() {
  return (
    <Router>
      <div className="App">
        
        <Route path="/" exact component={Navbar} />
        <Route path="/" exact component={Slider} />
        <Route path="/" exact component={Delivery} />
        <Route path="/" exact component={Welcome} />
        <Route path="/" exact component={Contact} />
        <Route path="/" exact component={Home_menu} />
        <Route path="/" exact component={Footer} />
        <Route path="/login" exact component={Navbar} />
        <Route path="/login" exact component={Login} />
        <Route path="/cart" exact component={Navbar} />
        <Route path="/cart" exact component={Cart} />
        <Route path="/admin" exact component={Admin} />
        <Route path="/menu" exact component={Navbar} />
        <Route
          path="/menu"
          render={(props) => <Menu_head {...props} a={"aa"} b={10} />}
        />
        <Route path="/menu" component={Footer} />
        <Route path="/Orders" component={Navbar} />
        <Route path="/Orders" component={Orders} />
      </div>
    </Router>
  );
}

export default App;
