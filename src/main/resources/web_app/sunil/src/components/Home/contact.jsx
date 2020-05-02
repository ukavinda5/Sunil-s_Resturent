import React, { Component } from "react";

class Contact extends Component {
  render() {
    return (
      <div className="contact">
        <h1>Contact us</h1>
        <div className="con_items">
          <div className="con_item shadow ">
            <i class="fas fa-compass fa-5x"></i>
            <h3>MADAMPE ROAD</h3>
            <p>KULIYAPITIYA.</p>

            {/* <h6>037-2283350 077 6074595</h6> */}
          </div>
          <div className="con_item shadow">
            <i class="fas fa-phone-square-alt fa-5x"></i>
            <h3>037-2283350</h3>
            <p>077 6074595</p>
          </div>
          <div className="con_item shadow">
            <i class="fas fa-clock fa-5x"></i>
            <h3>Open Monday-Sunday</h3>
            <p>8:00am - 10:00pm</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
