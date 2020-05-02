import React, { Component } from "react";
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
              <a href="/index">
                <div className="nav-item">Home</div>
              </a>
            </li>

            <li>
              <a href="/menu">
                <div className="nav-item">Menu</div>
              </a>
            </li>
            <li>
              <a href="/Orders">
                <div className="nav-item">Orders</div>
              </a>
            </li>

            <li>
              <a href="#">
                <div className="nav-item">About</div>
              </a>
            </li>

            {!this.state.logged ? (
              <li>
                <a href="/login">
                  <div className="nav-item1 ">Login</div>
                </a>
              </li>
            ) : (
              ""
            )}
          </ul>
          <a href="/cart">
            <div className="cartlogo"></div>
          </a>
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
