import React, { Component } from "react";

class Welcome extends Component {
  render() {
    return (
      <div className="welcome">
        <div className="image"></div>
        <div className="overlay">
          <div className="welcome-text">
            <div class="heading-section ftco-animate ">
              <h2 class="mb-4">
                Welcome to <span class="flaticon-pizza">SUNIL'S</span> Family
                Restaurant
              </h2>
            </div>
            <div>
              <p>
                Grabbing brunch or just stopping by for a drink - ' SUNIL'S
                Family Restaurant ' brings out an exciting, and effervescent
                vibe to the dining experience. We are dedicated to quality
                service and providing our customers with an exemplary culinary
                experience that we are renowned for.
              </p>
              {/* </div> */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
// ReactDOM.render(<DemoCarousel />, document.querySelector('.demo-carousel'));
export default Welcome;
