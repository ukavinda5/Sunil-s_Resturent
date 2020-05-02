import React, { Component } from "react";
class Orders extends Component {
  render() {
    return (
      <div className="orders">
        <div className="orderH">
          <div className="head">
            <h1>YOUR ORDERS</h1>
          </div>
          <div className="seperater">
            <div className="sep"></div>
            <i class="fas fa-utensils fa-3x"></i>
            <div className="sep"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default Orders;
