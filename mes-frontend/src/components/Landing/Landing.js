import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { render } from "react-dom";



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
    state = {  }
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
    
            <form className="md-form" style={{color: '#757575'}}>
    
              <input type="email" id="materialLoginFormEmail" className="form-control"/>
              <label for="materialLoginFormEmail">E-mail</label>
    
    
              <input type="password" id="materialLoginFormPassword" className="form-control"/>
                <label for="materialLoginFormPassword">Password</label>
    
    
                <div className="d-flex align-items-center justify-content-between">
                    <div className="form-check">
                        <input type="checkbox" className="form-check-input" id="materialLoginFormRemember"/>
                        <label className="form-check-label" for="materialLoginFormRemember">Remember me</label>
                    </div>
                    <div>
                        <a href="">Forgot password?</a>
                    </div>
                </div>
    
    
                <button className="btn btn-outline-info btn-rounded btn-block my-4 waves-effect z-depth-0" type="submit">Sign in</button>
    
              
            </form>
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