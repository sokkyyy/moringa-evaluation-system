import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { render } from "react-dom";
import Login from '../auth/Login';


class DemoCarousel extends Component {
  render() {
      return (
          <Carousel
          showThumbs={false}
          autoPlay={true}
          infiniteLoop={true}
          showArrows={false}
          showStatus={false}
          showIndicators={false}
          dynamicHeight={true}
          >

              <div>
                  <img src="https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"style={{height:630}} />
                  <div className="caption">
                    <h2>Moringa</h2>
                      <p>Ready Set Code</p>
                  </div>
              </div>
              <div>
                  <img src="https://images.pexels.com/photos/3183183/pexels-photo-3183183.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"style={{height:630}}  />
                  <div className="caption">
                    <h2>Moringa</h2>
                      <p>Ready Set Code</p>
                  </div>
              </div>
              <div>
                  <img src="https://images.pexels.com/photos/3153198/pexels-photo-3153198.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"style={{height:630}}  />
                  <div className="caption">
                    <h2>Moringa</h2>
                      <p>Ready Set Code</p>
                  </div>
              </div>

          </Carousel>
      );
  }
}

class Landing extends Component {

    render() {
        return (
<div>
<section className="container-fill">
      <div className="row mx-0 my-0">
        <div className="col-md-6" style={{width: '100%'}}>
        <DemoCarousel />
        </div>
        <div className="col-md-6">
    <div className="card">

        <h5 className="card-header info-color white-text text-center py-4">
            <strong>Sign in</strong>
        </h5>

        <div className="card-body px-lg-5 pt-0">
          <Login />
        </div>
    </div>

        </div>
      </div>
      </section>
    </div>
         );
    }
}

export default Landing;
