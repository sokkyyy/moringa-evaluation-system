import React, { Component } from "react";
import logo from "./logo.png";

class AdminNavbar extends Component {
  state = {};
  render() {
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
                  Admin
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

              <li className="nav-item">
                <a className="nav-link" href="#">
                  Job Grades
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#">
                  Departments
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#">
                  Staff
                </a>
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
}

export default AdminNavbar;
