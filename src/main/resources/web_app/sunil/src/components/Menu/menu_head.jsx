import React, { Component } from "react";
import image_1 from "../../image/image_1.jpg";
class Menu_head extends Component {
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

        <div className="home_menu_items bac ">
          <div className="menu_item">
            <div className="menu_item_image">
              <img src={image_1}></img>
            </div>
            <div className="menu_item_content">
              <h4>Buriyani</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis,
                sit?
              </p>
              <h4>Rs-350</h4>
            </div>
          </div>

          <div className="menu_item">
            <div className="menu_item_image">
              <img src={image_1}></img>
            </div>
            <div className="menu_item_content">
              <h4>Buriyani</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis,
                sit?
              </p>
              <h4>Rs-350</h4>
            </div>
          </div>

          <div className="menu_item">
            <div className="menu_item_image">
              <img src={image_1}></img>
            </div>
            <div className="menu_item_content">
              <h4>Buriyani</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis,
                sit?
              </p>
              <h4>Rs-350</h4>
            </div>
          </div>

          <div className="menu_item">
            <div className="menu_item_image">
              <img src={image_1}></img>
            </div>
            <div className="menu_item_content">
              <h4>Buriyani</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis,
                sit?
              </p>
              <h4>Rs-350</h4>
            </div>
          </div>

          <div className="menu_item">
            <div className="menu_item_image">
              <img src={image_1}></img>
            </div>
            <div className="menu_item_content">
              <h4>Buriyani</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis,
                sit?
              </p>
              <h4>Rs-350</h4>
            </div>
          </div>

          <div className="menu_item">
            <div className="menu_item_image">
              <img src={image_1}></img>
            </div>
            <div className="menu_item_content">
              <h4>Buriyani</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis,
                sit?
              </p>
              <h4>Rs-350</h4>
            </div>
          </div>

          <div className="menu_item">
            <div className="menu_item_image">
              <img src={image_1}></img>
            </div>
            <div className="menu_item_content">
              <h4>Buriyani</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis,
                sit?
              </p>
              <h4>Rs-350</h4>
            </div>
          </div>

          <div className="menu_item">
            <div className="menu_item_image">
              <img src={image_1}></img>
            </div>
            <div className="menu_item_content">
              <h4>Buriyani</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis,
                sit?
              </p>
              <h4>Rs-350</h4>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Menu_head;
