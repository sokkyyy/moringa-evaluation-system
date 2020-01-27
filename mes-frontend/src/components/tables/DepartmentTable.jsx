import React, { Component } from 'react';
import { MDBCard, MDBCardBody, MDBCardHeader, MDBInput, MDBBtn, MDBTable, MDBTableBody, MDBTableHead  } from 'mdbreact';
import { MDBDataTable } from 'mdbreact';
import AdminNavbar from '../Navbar/AdminNavbar'
import DepartmentStaff from '../../services/Departments';

const departmentService = new DepartmentStaff()

function DepartmentTable(){
  const [departments, setDepartmets] = React.useState([]);

  React.useEffect(()=>{
    handleGetDepartments();
  },[]);

  const handleGetDepartments = () => {
    departmentService.allDepartments().then(
      response => {
        setDepartmets(response.data);
      }
    ).catch(errors => console.log(errors));
  };


  const rowData = departments.map((department, i) => {
    return {
      'name': department.name,
      'manager': department.manager.full_name,
      'line-manager': department.line_manager.full_name,
      'staff-count':department.staff.length,
      'edit': [<i key="cell1" className="fas fa-pencil-alt mr-2 blue-text" aria-hidden="true"></i>],
      'delete': [<i key="cell1" className="fa fa-trash mr-2 red-text" aria-hidden="true"></i>]    }
  });

  const data = {
    columns: [

      {
        'label': 'Department',
        'field': 'name',
        'sort': 'asc',
        'width': '155'
      },

      {
        'label': 'Manager',
        'field': 'manager',
        'sort': 'asc',
        'width': '155'
      },

      {
        'label': 'Line Manager',
        'field': 'line-manager',
        'sort': 'asc',
        'width': '155'
      },
      {
        'label': 'Staff Count',
        'field': 'staff-count',
        'sort': 'asc',
        'width': '155'
      },

      {
        'label': 'Edit',
        'field': 'edit',
        'sort': 'asc',
        'width': '155'
      },
      {
        'label': 'Delete',
        'field': 'delete',
        'sort': 'asc',
        'width': '155'
      },

    ],
    rows:rowData,
  };
    return (


            <MDBCard narrow>

              <MDBCardHeader className="green gradient-card-header d-flex justify-content-between">
                <h4>Deparments</h4>
              </MDBCardHeader>

              <MDBCardBody cascade>
                <MDBDataTable
                  scrollY
                  maxHeight="200px"
                  striped
                  small
                  data={data}
                />

                <MDBBtn rounded size="m" color="green" className="px-2" data-toggle="modal" data-target="#add-department">
                  Add Department
                </MDBBtn>
              </MDBCardBody>
            </MDBCard>

    );
}

export default DepartmentTable;
