import React, { Component } from 'react';

class Gallery extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="gallery">
                <div className="gallery1">
                    <div className="gal-itm gait1"></div>
                    <div className="gal-itm gait2"></div>
                    <div className="gal-itm gait3"></div>
                    <div className="gal-itm gait4"></div>
                    <div className="gal-itm gait5"></div>
                    <div className="gal-itm gait6"></div>
                    
                    
                </div>

                <div className="gallery2">
                    <div className="gal-itm gait11"></div>
                    <div className="gal-itm gait12"></div>
                    <div className="gal-itm gait13"></div>
                    <div className="gal-itm gait14"></div>
                    <div className="gal-itm gait15"></div>
                    <div className="gal-itm gait16"></div>
                </div>
            </div>
         );
    }
}
 
export default Gallery;