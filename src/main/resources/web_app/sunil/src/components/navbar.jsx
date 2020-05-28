import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../image/logo.png";

class Navbar extends Component {
  constructor(props) {
    super();
    this.state = {
      logged: false,
    };
    this.navslide = this.navslide.bind(this);
  }

  navslide() {
    const burgur = document.querySelector(".hburger");
    const nav = document.querySelector(".nav-links");
    nav.classList.toggle("nav-active");
    // burgur.addEventListener("click", () => {

    // });
  }

  // componentDidUpdate() {
  //   this.navslide();
  // }
  render() {
    return (
      <div>
        <nav>
          <div className="logo"></div>
          {/* <h4>Sunil's</h4> */}

          <ul className="nav-links">
            <li>
              <Link to="/">
                <div className="nav-item">Home</div>
              </Link>
            </li>

            <li>
              <Link to="/menu">
                <div className="nav-item">Menu</div>
              </Link>
            </li>
            <li>
              <Link to="/Orders">
                <div className="nav-item">Orders</div>
              </Link>
            </li>

            <li>
              <Link to="#">
                <div className="nav-item">About</div>
              </Link>
            </li>

            {!this.state.logged ? (
              <li>
                <Link to="/login">
                  <div className="nav-item1 ">Login</div>
                </Link>
              </li>
            ) : (
              ""
            )}
          </ul>
          <Link to="/cart">
            <div className="cartlogo"></div>
          </Link>
          <div className="hburger" onClick={this.navslide}>
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
