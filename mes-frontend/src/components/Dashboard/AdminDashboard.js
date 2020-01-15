import React, { Component } from "react";
import AdminNavbar from "../Navbar/AdminNavbar";
import Sidecard from '../Profile_Card/Sidecard'

class AdminDashboard extends Component {
  state = {};
  render() {
    return (
      <body>
        <div>
          <AdminNavbar />
        </div>
        <div className="row container-fluid">
          <div className="col-md-2">
            <h4>Dashboard</h4>
            <hr />
            <Sidecard />
          </div>         
        </div>
      </body>
    );
  }
}

export default AdminDashboard;
