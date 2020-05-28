import React, { Component } from "react";
import axios from "axios";
import image_1 from "../../image/image_1.jpg";
class Menu_head extends Component {
  constructor(props) {
    super(props);
    this.state = { foods: [] };
   
  }

addToCart(food){


  axios
    .post("http://localhost:8081/addToCartItem",{
      userId :2, 
      itemId:food.id
    })
    .then((a) => {
      console.log(this.state);
    })
    .catch((err) => {
      console.log(err);
    });

}

  componentDidMount() {
    // alert(this.props.a + this.props.b);

    axios
      .get("http://localhost:8081/getHomeItems")
      .then((a) => {
        this.setState({ foods: a.data });
        console.log(this.state);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <div className="menu">
        <div className="head">
          <h1>OUR MENU</h1>
        </div>
        <div className="seperater">
          <div className="sep"></div>
          <i class="fas fa-utensils fa-3x"></i>
          <div className="sep"></div>
        </div>

        <div className="menu_search">
          <input type="text" className="search" />
          <a href="#" className="searchBtn">
            Search
          </a>
        </div>
        <div className="categorys">
          <a href="#" className="searchBtn cat">
            Dessert
          </a>
          <a href="#" className="searchBtn cat">
            Dinner
          </a>
          <a href="#" className="searchBtn cat">
            Lunch
          </a>

          <a href="#" className="searchBtn cat">
            Breakfast
          </a>
          <a href="#" className="searchBtn cat">
            Daily specials
          </a>
        </div>

        <div className="home_menu_items  ">
          {this.state.foods.map((food) => {
            return (
              <div className="menu_item">
                <div className="menu_item_image">
                  <img src={image_1}></img>
                </div>
                <div className="menu_item_content" key={food.id}>
                  <h4>{food.name}</h4>
                  <p>{food.inheritance}</p>
                  <h4>{food.price}</h4>
                  <button name={food.id} className="add" onClick={this.addToCart.bind(this,food)}>Add To Cart</button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Menu_head;
