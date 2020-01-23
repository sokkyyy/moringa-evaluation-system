import React from 'react';
import logo from './logo.png'
import {Link} from 'react-router-dom';


function Navbar(props){
  const handleSignOut = (()=>{
    localStorage.removeItem('access');
    localStorage.removeItem('refresh');
    window.location.href = '/login';
  });
  return(
    <div>
      <nav className="mb-1 navbar navbar-expand-lg navbar-dark">
        <a className="navbar-brand" href="#">
          <img src={logo} alt="moringa-school-logo" id="logo" />
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent-333"
          aria-controls="navbarSupportedContent-333"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse"
          id="navbarSupportedContent-333"
        >
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a className="nav-link" href="#" id="app_name">
                mes
                <span className="sr-only">(current)</span>
              </a>
            </li>
          </ul>

          <ul className="navbar-nav ml-auto nav-flex-icons">
            <li className="nav-item">
              <Link to='/dashboard' className="nav-link" href="#">
                Dashboard
              </Link>
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                id="navbarDropdownMenuLink-333"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Reports
              </a>
              <div
                className="dropdown-menu dropdown-default"
                aria-labelledby="navbarDropdownMenuLink-333"
              >
                <a className="dropdown-item" href="#">
                  My Reports
                </a>
                {(props.role === 'user')? '' : (
                  <div>
                    <a className="dropdown-item" href="#">
                      Team Reports
                    </a>
                    <a className="dropdown-item" href="#">
                      Company Reports
                    </a>
                  </div>
                )}
              </div>
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                id="navbarDropdownMenuLink-333"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Assessment
              </a>
              <div
                className="dropdown-menu dropdown-default"
                aria-labelledby="navbarDropdownMenuLink-333"
              >
                <Link to='/assessment' className="dropdown-item" activeStyle={{backgroundColor: 'red'}}>
                  Take Assessment
                </Link>

                {/* HIDE  Schedule Assessment AND In-Meeting Assessment from SYSTEM USERS*/}
                {(props.role === 'user')? '' : (
                  <div>
                    <a className="dropdown-item" href="#">
                      Schedule Assessment
                    </a>
                    <Link className="dropdown-item" to='/manager/assessment'>
                      In-Meeting Assessment
                    </Link>

                  </div>
                )}
                
              </div>
            </li>
          </ul>

          <button className="nav-link btn" id="signout-button" onClick={handleSignOut}>
            Sign Out
          </button>
        </div>
      </nav>
    </div>
  );
}

export default Navbar
