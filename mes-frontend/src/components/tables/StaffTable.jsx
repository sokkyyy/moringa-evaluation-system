

import React, { Component } from 'react';
import { MDBCard, MDBCardBody, MDBCardHeader, MDBInput, MDBBtn, MDBTable, MDBTableBody, MDBTableHead  } from 'mdbreact';
import { MDBDataTable } from 'mdbreact';
import AdminNavbar from '../Navbar/AdminNavbar'

class StaffTable extends Component {
  constructor(props){
    super(props);

  }
  render() {
    const staff = this.props.staff.map((details) => (
            {'name':`${details.user.first_name} ${details.user.last_name}`,
              'email':details.user.email,
              'username':details.user.username,
              'job_grade':details.job_grade,
              'department':details.department.name,
              'role':details.system_role,
              'edit': [<i key={details.pk} className="fas fa-pencil-alt mr-2 blue-text" aria-hidden="true"></i>],
              'delete': [<i key={details.pk} className="fa fa-trash mr-2 red-text" aria-hidd0en="true"></i>]
            }
    ));


  const data = {
    columns: [

      {
        'label': 'Name',
        'field': 'name',
        'sort': 'asc',
        'width': '155'
      },

      {
        'label': 'Email',
        'field': 'email',
        'sort': 'asc',
        'width': '155'
      },
      {
        'label': 'Username',
        'field': 'username',
        'sort': 'asc',
        'width': '155'
      },
      {
        'label': 'Job Grade',
        'field': 'job_grade',
        'sort': 'asc',
        'width': '155'
      },
      {
        'label': 'Department',
        'field': 'department',
        'sort': 'asc',
        'width': '155'
      },
      {
        'label': 'Role',
        'field': 'role',
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
    rows: staff,
  };
    return (


            <MDBCard narrow>

              <MDBCardHeader className="green gradient-card-header d-flex justify-content-between">
                <h4>Staff</h4>
              </MDBCardHeader>

              <MDBCardBody cascade>
                <MDBDataTable
                  scrollY
                  maxHeight="200px"
                  striped
                  small
                  data={data}
                />
                {/* <MDBTable btn fixed>
    <MDBTableHead columns={data_panel.columns} />
    <MDBTableBody rows={data_panel.rows} />
  </MDBTable> */}

                <MDBBtn rounded size="m" color="green" className="px-2"
                data-toggle="modal"
                  data-target="#add-staff"
                  >
                  Add Staff
                </MDBBtn>
              </MDBCardBody>
            </MDBCard>

    );
  }
}

export default StaffTable;
