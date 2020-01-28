import React, { useEffect, useState } from 'react';
import AdminServices from '../../services/AdminServices';
import DepartmentStaff from '../../services/Departments';

const departmentService = new DepartmentStaff()

const adminServices = new AdminServices();

function DepartmentForm() {
  const [staff, setStaff] = useState([]);
  const [department, setDepartment] = useState('');
  const [manager, setManager] = useState(null);
  const [line_manager, setLineman] = useState(null);


  useEffect(()=>{
    handleGetAllStaff();
  },[]);


  const handleGetAllStaff = () => {
    adminServices.getAllStaff()
    .then(response => {
      console.log(response.data);
      handleSetStaff(response.data);
    })
    .catch((errors) => {
        console.log(errors);
    })
  };

  const handleSetStaff = (data) => {
    setStaff(data);
  };

  const handleManagerClick = (id) => {
    setManager(id);
  };
  const handleLineManagerClick = (id) => {
    setLineman(id);
  };

  const handleDptChange = (event) => {
    const dpt = event.target.value;
    setDepartment(dpt);
  };

  const handleDptSubmit = (event) => {
    event.preventDefault();
    handlePostDepartment();
  };

  const handlePostDepartment = () => {
    const newDepartment = {department, manager, line_manager};
    departmentService.addDepartment(newDepartment).then(
      response => {
        console.log(response.data);
        window.location.href = '/admin/dashboard';
      }
    ).catch(errors => console.log(errors));
  };

  const optionsManager = staff.map((details, i) => {
    return (<option key={details.pk} onClick={() => handleManagerClick(details.pk)} name='manager' value={details.pk}>{details.user.first_name} {details.user.last_name}</option>)
  });

  const optionsLineManager = staff.map((details, i) => {
    return (<option key={details.pk} onClick={() => handleLineManagerClick(details.pk)} name='line_manager' value="1">{details.user.first_name} {details.user.last_name}</option>)
  });
    return (
      <form className="text-center border border-light p-5" onSubmit={handleDptSubmit}>
        <label>Name</label>
        <input
          type="text"
          id="name"
          value={department}
          className="form-control mb-4"
          onChange={handleDptChange}
        />

      <label>Manager</label>
        <select
          className="browser-default custom-select form-control mb-4"
          id="manager"
        >
          <option defaultValue></option>
          {optionsManager}
        </select>


        <label>Line Manager</label>
        <select className="browser-default custom-select form-control mb-4">
          <option defaultValue></option>
          {optionsLineManager}
        </select>

        <button className="btn btn-green btn-block" type="submit">
          Add
        </button>
      </form>
    );
}

export default DepartmentForm;
