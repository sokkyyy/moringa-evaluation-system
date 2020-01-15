import React from 'react';
import logo from './logo.png'


const Navbar = () => {
  return (
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
              <a className="nav-link" href="#">
                Dashboard
              </a>
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
                <a className="dropdown-item" href="#">
                  Team Reports
                </a>
                <a className="dropdown-item" href="#">
                  Company Reports
                </a>
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
                <a className="dropdown-item" href="#">
                  Take Assessment
                </a>
                <a className="dropdown-item" href="#">
                  Schedule Assessment
                </a>
                <a className="dropdown-item" href="#">
                  In-Meeting Assessment
                </a>
              </div>
            </li>
          </ul>

          <a className="nav-link btn" id="signout-button" href="#">
            Sign Out
          </a>
        </div>
      </nav>
    </div>
  );
}

export default Navbar