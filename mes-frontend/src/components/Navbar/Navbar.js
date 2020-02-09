import React from 'react';
import logo from './logo.png'
import {Link} from 'react-router-dom';
import ScheduleAssessmentForm from '../Forms/ScheduleAssessmentForm'


function Navbar(props){
  const handleSignOut = (()=>{
    localStorage.removeItem('access');
    localStorage.removeItem('refresh');
    window.location.href = '/';
  });
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
          <ul className="navbar-nav ml-auto nav-flex-icons">
            <li className="nav-item">
              <Link to="/dashboard" className="nav-link" href="#">
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
                {props.role === "user" ? (
                  ""
                ) : (
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
                <Link
                  to="/assessment"
                  className="dropdown-item"
                  activeStyle={{ backgroundColor: "red" }}
                >
                  Take Assessment
                </Link>

                {/* HIDE  Schedule Assessment AND In-Meeting Assessment from SYSTEM USERS*/}
                {props.role === "user" ? (
                  ""
                ) : (
                  <div>
                    <a
                      data-toggle="modal"
                      data-target="#schedule-assessment"
                      className="dropdown-item"
                    >
                      Schedule Assessment
                    </a>
                    <Link className="dropdown-item" to="/manager/assessment">
                      In-Meeting Assessment
                    </Link>
                  </div>
                )}
              </div>
            </li>

            {/* <li className="nav-item">
              <button
                className="nav-link btn"
                id="signout-button"
                onClick={handleSignOut}
              >
                Sign Out
              </button>
            </li> */}
          </ul>

          <button
            className="nav-link btn"
            id="signout-button"
            onClick={handleSignOut}
          >
            Sign Out
          </button>
        </div>
      </nav>
      <div className="container">
        <div
          className="modal fade"
          id="schedule-assessment"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header bg-green">
                <h5 className="modal-title" id="exampleModalLabel">
                  SCHEDULE ASSESSMENT
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                  
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <ScheduleAssessmentForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar
