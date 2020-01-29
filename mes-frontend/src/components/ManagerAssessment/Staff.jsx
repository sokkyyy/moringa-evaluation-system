import React, { Component } from 'react';
import DepartmentStaff from '../../services/Departments';
import UserService from '../../services/UserService';



const userService = new UserService();
const departmentStaff = new DepartmentStaff()



function LineManagerUnderlings({staff, clickAssessUser}){
  return(
    <select
      className="browser-default custom-select form-control mb-4"
      id="department"
    >
    <option defaultValue>Employee</option>
    {staff.map((details, i) => (
      <option key={details.id} value={details.id} onClick={() => clickAssessUser(details.id)}>{details.full_name}</option>
    ))}
    </select>
  )
}

export default class StaffInfo extends Component {
  constructor(props){
    super(props);
    this.state = {
      department:{},
      staff:{},
      load:true,
    };
  }
  componentDidMount(){
    departmentStaff.getStaff().then(
      response => {
        this.setState({department: response.data});
        this.setState({load: false});
        this.getUser();
        console.log(response.data);
      }
    ).catch(errors => {console.log(errors)});
  }

  getUser = () => {
    userService.getUser()
    .then(response => {
        this.setState({staff:response.data});
    })
    .catch((errors) => {
        console.log(errors);
    })
  };

  render(){
    const {staff, department} = this.state
    return(
      <div style={{marginTop:'100'}}>
        <p>Select the Staff you want to assess to Continue</p>
        {this.state.load ? '' : (
        <div>
          {(staff.pk === department.manager.id) ? (
            <select
              className="browser-default custom-select form-control mb-4"
              id="department"
            >
            <option defaultValue>Employee</option>
            <option value={department.line_manager.id} onClick={()=> this.props.handleAssessUser(department.line_manager.id)}>{department.line_manager.full_name}</option>
          </select>
        ):(
          <LineManagerUnderlings staff={department.staff} clickAssessUser={this.props.handleAssessUser} />

        )}
        </div>
    )}

      </div>
    );
  }
}
