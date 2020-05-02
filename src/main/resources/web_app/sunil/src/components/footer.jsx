import React, { Component } from "react";
class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="content">
          <div className="social">
            <div className="social-menu">
              <h1>Follow us on</h1>
              <ul>
                <li>
                  <a href="">
                    <i className="fa fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="">
                    <i className="fa fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="">
                    <i className="fa fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="">
                    <i className="fa fa-youtube"></i>
                  </a>
                </li>
                <li>
                  <a href="">
                    <i className="fa fa-linkedin"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3955.9682723674014!2d80.03677121460663!3d7.468755513524877!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2d9c30af2ca59%3A0xc9b02416b4489c50!2sSunil&#39;s%20Bakers%20And%20Family%20Restaurants!5e0!3m2!1sen!2slk!4v1584850001382!5m2!1sen!2slk"
            width="400"
            height="300"
            frameborder="0"
            // style="border:0;"
            allowfullscreen=""
            aria-hidden="false"
            tabindex="0"
          ></iframe>
        </div>
      </div>
    );
  }
}
export default Footer;
