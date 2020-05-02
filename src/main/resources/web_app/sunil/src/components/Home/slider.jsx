import React, { Component } from "react";
import logo from "../../image/logo.png";
import b_1 from "../../image/b_1.jpg";
import b_2 from "../../image/b_2.jpg";
import b_3 from "../../image/b_3.jpg";
import b_4 from "../../image/b_4.jpg";
class Slider extends Component {
  render() {
    return (
      <div id="slider">
        <figure>
          {/* <img src={require("../../image/logo.png")}></img> */}
          {/* <img src={logo}></img> */}
          <img src={b_1}></img>
          <img src={b_2}></img>
          <img src={b_3}></img>
          <img src={b_4}></img>
          <img src={b_1}></img>
        </figure>
      </div>
    );
  }
}
export default Slider;
