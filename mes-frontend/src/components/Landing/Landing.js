import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Landing extends Component {
    state = {  }
    render() { 
        return ( 
<div>
<nav className="mb-1 navbar navbar-expand-lg navbar-dark fixed-top" style={{backgroundColor: '#689241'}}>
  <a className="navbar-brand" href="#">MES</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent-333"
    aria-controls="navbarSupportedContent-333" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarSupportedContent-333">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href="#">Home
          <span className="sr-only">(current)</span>
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Features</a>
      </li>
     
      
    </ul>
    <ul className="navbar-nav ml-auto nav-flex-icons">
    <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" id="navbarDropdownMenuLink-333" data-toggle="dropdown"
          aria-haspopup="true" aria-expanded="false">Dropdown
        </a>
        <div className="dropdown-menu dropdown-default" aria-labelledby="navbarDropdownMenuLink-333">
          <a className="dropdown-item" href="#">Action</a>
          <a className="dropdown-item" href="#">Another action</a>
          <a className="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Log In</a>
      </li>
    </ul>
  </div>
</nav>
{/* <div className="eazy">
<DemoCarousel /> */}
</div>


         );
    }
}

export default Landing;