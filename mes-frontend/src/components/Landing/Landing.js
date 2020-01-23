import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { render } from "react-dom";
import Login from '../auth/Login';
import Footer from '../Footer/Footer';



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
      <section className="login-block">
    <div className="container">
	<div className="row">
		<div className="col-md-4 login-sec">
		    <h2 className="text-center">Login</h2>
		    <form className="login-form">
  <div className="form-group">
    <label for="exampleInputEmail1" className="text-uppercase">Email</label>
    <input type="text" className="form-control" placeholder="example@gmail.com"/>
    
  </div>
  <div className="form-group">
    <label for="exampleInputPassword1" className="text-uppercase">Password</label>
    <input type="password" className="form-control" placeholder="......"/>
  </div>
  
  
    <div className="form-check">
    <label className="form-check-label">
      <input type="checkbox" className="form-check-input"/>
      <small>Remember Me</small>
    </label>
    <button type="submit" className="btn btn-login float-right" style={{background: '#ff8900',color: '#fff', fontSize: '13px'}}>Login</button>
  </div>
  
</form>
<div className="copy-text">Created with <i className="fa fa-heart"></i>by Origins</div>
		</div>
		 <div className="col-md-8 banner-sec">
	</div> 
</div>
</div>
      </section>
      </div>
         );
    }
}

export default Landing;

