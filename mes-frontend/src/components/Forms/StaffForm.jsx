import React, { Component } from 'react';
import DepartmentStaff from '../../services/Departments';
import AdminServices from '../../services/AdminServices';



const adminServices = new AdminServices();

const departmentStaff = new DepartmentStaff();

class StaffForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      first_name:'',
      last_name:'',
      username:'',
      email:'',
      grade:'',
      department:null,
      role:'',

      department_names:[],
    };
  }

  componentDidMount(){
      departmentStaff.getDeptNames().then(
        response => {
          this.setState({department_names: response.data})
          console.log(this.state.department_names);
        }
      ).catch(errors => console.log(errors));
  }

  handleChange = (event) => {
    const value = event.target.value;
    this.setState({
      [event.target.name]:value
    });
  };

  handleGradeClick = (grade) => {
    this.setState({grade:grade});
  };

  handleDptClick = (dpt_id) => {
    this.setState({department: dpt_id});
    console.log(this.state.department);
  };
  handleRoleClick = (role) => {
    this.setState({role:role});
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const {first_name,last_name,username,email,grade,department,role} = this.state;
    const staffDetails = {first_name,last_name,username,email,grade,department,role};

    adminServices.registerStaff(staffDetails)
    .then(response => {
      console.log(response.data);
    })
    .catch((errors)=>{console.log(errors)});

  };

  render() {
    return (
      <form className="text-center border border-light p-5" action="#!">


        <input
          type="text"
          id="fName"
          name='first_name'
          value={this.state.first_name}
          onChange={this.handleChange}
          className="form-control mb-4"
          placeholder="First Name"
          required

        />

        <input
          type="text"
          id="lName"
          name='last_name'
          onChange={this.handleChange}
          value={this.state.last_name}
          className="form-control mb-4"
          placeholder="Last Name"
          required
        />

        <input
          type="text"
          id="username"
          value={this.state.username}
          name='username'
          onChange={this.handleChange}
          className="form-control mb-4"
          placeholder="Username"
          required
        />

        <input
          type="email"
          id="defaultSubscriptionFormEmail"
          value={this.state.email}
          name='email'
          onChange={this.handleChange}
          className="form-control mb-4"
          placeholder="E-mail"
          required
        />

        <select
          className="browser-default custom-select form-control mb-4"
          id="grade"
          required
        >
          <option defaultValue>JOB GRADE</option>
          <option value="1" onClick={() => this.handleGradeClick('1')}>1</option>
          <option value="4" onClick={() => this.handleGradeClick('4')}>4</option>
          <option value="5" onClick={() => this.handleGradeClick('5')}>5</option>
          <option value="6" onClick={() => this.handleGradeClick('6')}>6</option>
          <option value="7" onClick={() => this.handleGradeClick('7')}>7</option>
          <option value="8" onClick={() => this.handleGradeClick('8')}>8</option>
          <option value="9" onClick={() => this.handleGradeClick('9')}>9</option>
          <option value="10" onClick={() => this.handleGradeClick('10')}>10</option>
          <option value="11" onClick={() => this.handleGradeClick('11')}>11</option>
          <option value="12" onClick={() => this.handleGradeClick('12')}>12</option>
        </select>

        <select
          className="browser-default custom-select form-control mb-4"
          id="department"
          required
        >
          <option defaultValue>DEPARTMENT</option>
          {this.state.department_names.map((dpt,i) => (
            <option value={dpt.pk} onClick={() => this.handleDptClick(dpt.pk)}>{dpt.name}</option>
          ))}
        </select>

        <select className="browser-default custom-select form-control mb-4" required>
          <option defaultValue >ROLE</option>
          <option value="super_admin"  onClick={() => this.handleRoleClick('super_admin')}>Super Admin(MES admin)</option>
          <option value="admin"  onClick={() => this.handleRoleClick('admin')}>Admin(Department Managers & Line Managers)</option>
          <option value="user"  onClick={() => this.handleRoleClick('user')}>User(Normal Staff)</option>
        </select>

        <button className="btn btn-green btn-block" type="submit" onClick={this.handleSubmit} >
          Add
        </button>
      </form>
    );
  }
}

export default StaffForm;
