import React, { Component } from "react";
import axios from "axios";
import image from "../../image/image_1.jpg";
class Cart extends Component {

  constructor(props){
    super(props)
    this.state={
      CartItems : []
    }
  }



  componentDidMount() {

    axios
      .get("http://localhost:8081/getCartItems?userId="+2)
      .then((a) => {
        this.setState({ CartItems: a.data });
        console.log(this.state);
      })
      .catch((err) => {
        console.log(err);
      });
  }



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
            
          {this.state.CartItems.map((item)=>{
            
              return(
                

                <div className="cart_item">
            
              <div className="cart_item_img">
                <img src={image}></img>
              </div>
              <div className="cart_item_nam">
                <label>{item.id}</label>
              </div>
              <div className="cart_item_qty">
                <div id="-">
                  <i class="fas fa-minus-circle fa-2x"></i>
                </div>
                <label>{item.qty}</label>
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
              );
          })
            }
            
            

           
          
          <div className="cart_checkout">
            <div className="checkout shadow "></div>
          </div>
        </div>
      </div>
      </div>
    );
  }
}

export default Cart;
