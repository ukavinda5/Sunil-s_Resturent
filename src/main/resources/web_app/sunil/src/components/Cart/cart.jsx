import React, { Component } from "react";
import image from "../../image/image_1.jpg";
class Cart extends Component {
  render() {
    return (
      <div className="cart">
        <div className="cart_header">
          <h1>YOUR CART</h1>
        </div>
        <div className="seperater">
          <div className="sep"></div>
          <i class="fas fa-utensils fa-3x"></i>
          <div className="sep"></div>
        </div>
        <div className="cart_content">
          <div className="cart_items">
            <div className="cart_item">
              <div className="cart_item_img">
                <img src={image}></img>
              </div>
              <div className="cart_item_nam">
                <label>Vegetable Noodles</label>
              </div>
              <div className="cart_item_qty">
                <div id="-">
                  <i class="fas fa-minus-circle fa-2x"></i>
                </div>
                <label>2</label>
                <div id="+">
                  <i class="fas fa-plus-circle fa-2x"></i>
                </div>
              </div>
              <div className="cart_item_price">
                <label>Rs 350/-</label>
              </div>
              <div className="cart_item_remove">
                <i class="far fa-trash-alt fa-2x"></i>
              </div>
            </div>
          </div>
          <div className="cart_checkout">
            <div className="checkout shadow "></div>
          </div>
        </div>
      </div>
    );
  }
}

export default Cart;
