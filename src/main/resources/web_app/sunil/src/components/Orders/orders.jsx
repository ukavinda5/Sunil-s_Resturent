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
        <div className="orderc">
          <table className="order_table">
            <tr>
              <th>Date</th>
              <th>Discription</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Status</th>
            </tr>
            <tr>
              <td>2001-01-05</td>
              <td>Koththu</td>
              <td>5</td>
              <td>350</td>
              <td>Deliverd</td>
            </tr>

            <tr>
              <td>2001-01-05</td>
              <td>Koththu</td>
              <td>5</td>
              <td>350</td>
              <td>Deliverd</td>
            </tr>

            <tr>
              <td>2001-01-05</td>
              <td>Koththu</td>
              <td>5</td>
              <td>350</td>
              <td>Deliverd</td>
            </tr>

            <tr>
              <td>2001-01-05</td>
              <td>Koththu</td>
              <td>5</td>
              <td>350</td>
              <td>Deliverd</td>
            </tr>

            <tr>
              <td>2001-01-05</td>
              <td>Koththu</td>
              <td>5</td>
              <td>350</td>
              <td>Deliverd</td>
            </tr>

            <tr>
              <td>2001-01-05</td>
              <td>Koththu</td>
              <td>5</td>
              <td>350</td>
              <td>Deliverd</td>
            </tr>

            <tr>
              <td>2001-01-05</td>
              <td>Koththu</td>
              <td>5</td>
              <td>350</td>
              <td>Deliverd</td>
            </tr>
          </table>
        </div>
      </div>
    );
  }
}

export default Orders;
