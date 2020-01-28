import React, { Component } from 'react';
import DepartmentStaff from '../../services/Departments';




const departmentStaff = new DepartmentStaff()

export default class StaffInfo extends Component {
  constructor(props){
    super(props);
    this.state = {
      department:{},
      load:true,
    };
  }
  componentDidMount(){
    departmentStaff.getStaff().then(
      response => {
        this.setState({department: response.data});
        this.setState({load: false});
        console.log(response.data);
      }
    ).catch(errors => {console.log(errors)});
  }



  render(){

    return(
      <div style={{marginTop:'100'}}>
        <p>Select the Staff you want to assess to Continue</p>
        {this.state.load ? '' : (
          <select className="browser-default custom-select">
            <option>Choose Staff:</option>
              {this.state.department.staff.map((staff) => (
                    <option name='assessed_user' key={staff.id} value={staff.id} onClick={ ()=> this.props.handleAssessUser(staff.id)}>{staff.username}</option>
              ))}
          </select>
        )}

      </div>
    )
  }
}
