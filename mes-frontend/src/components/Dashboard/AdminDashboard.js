import React, { Component } from "react";
import AdminNavbar from "../Navbar/AdminNavbar";
import UserService from '../../services/UserService';


const userService = new UserService();




class AdminDashboard extends Component {
  constructor(props){
    super(props);
    this.state = {
      load:true,
    };
  }

  componentDidMount(){
    userService.getUser()
    .then(response => {
        if(response.data.system_role !== 'super_admin'){
          window.location.href = '/dashboard';
        }else{
          // this.setState({staff: response.data});
          console.log(response.data);
        }
    })
    .catch(() =>{
        this.props.history.push('/login');
    })
  }

  render() {
    return (
      <body>
        {this.state.load ? '' : (
          <div>
            <div>
              <AdminNavbar />
            </div>
            <div className="row container-fluid">
              <div className="col-md-2">
                <h4>Dashboard</h4>
                <hr />
              </div>
            </div>
          </div>
        )}

      </body>
    );
  }
}

export default AdminDashboard;
