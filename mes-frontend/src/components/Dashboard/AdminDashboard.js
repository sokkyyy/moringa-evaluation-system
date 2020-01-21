

import React, { Component } from 'react';
import { MDBCard, MDBCardBody, MDBCardHeader, MDBInput, MDBBtn, MDBTable, MDBTableBody, MDBTableHead  } from 'mdbreact';
import { MDBDataTable } from 'mdbreact';
import AdminNavbar from '../Navbar/AdminNavbar'

class AdminDashboard extends Component {
  state = {  }
  render() { 

  const data = {
    columns: [
      
      {
        // 'label': 'Name',
        'field': 'name',
        'sort': 'asc'
      },
      {
        // 'label': 'Job Grade',
        'field': 'job_grade',
        'sort': 'asc'
      },
      {
        // 'label': 'Department',
        'field': 'department',
        'sort': 'asc'
      },
      {
        // 'label': 'Role',
        'field': 'role',
        'sort': 'asc'
      },
      {
        // 'label': 'Edit',
        'field': 'edit',
        'sort': 'asc'
      },
      {
        // 'label': 'Delete',
        'field': 'delete',
        'sort': 'asc'
      },
    ],
    rows: [
      {
        
        'name': 'Otto',
        'job_grade': '1',
        'department': 'Finance',
        'role': 'Admin',      
        'edit': [<i key="cell1" className="fas fa-pencil-alt mr-2 blue-text" aria-hidden="true"></i>],
        'delete': [<i key="cell1" className="fa fa-trash mr-2 red-text" aria-hidden="true"></i>]
      },
      {
        
        'name': 'Jake',
        'job_grade': 'TM - Level 2',
        'department': 'Finance',
        'role': 'Super Admin',        
        'edit': [<i key="cell1" className="fas fa-pencil-alt mr-2 blue-text" aria-hidden="true"></i>],
        'delete': [<i key="cell1" className="fa fa-trash mr-2 red-text" aria-hidden="true"></i>]
      },
      {
        
        'name': 'Esther',
        'job_grade': '3',
        'department': 'Classroom',
        'role': 'System User',
        'edit': [<i key="cell1" className="fas fa-pencil-alt mr-2 blue-text" aria-hidden="true"></i>],
        'delete': [<i key="cell1" className="fa fa-trash mr-2 red-text" aria-hidden="true"></i>]
        
        
      },
      {
        
        'name': 'Joel',
        'job_grade': '4',
        'department': 'Classroom',
        'role': 'Admin',
        'edit': [<i key="cell1" className="fas fa-pencil-alt mr-2 blue-text" aria-hidden="true"></i>],
        'delete': [<i key="cell1" className="fa fa-trash mr-2 red-text" aria-hidden="true"></i>]
      },
      {
        
        'name': 'Jacob',
        'job_grade': '8',
        'department': 'System Admin',
        'role': 'Super Admin',        
        'edit': [<i key="cell1" className="fas fa-pencil-alt mr-2 blue-text" aria-hidden="true"></i>],
        'delete': [<i key="cell1" className="fa fa-trash mr-2 red-text" aria-hidden="true"></i>]
      },
      {
        
        'name': 'Anita',
        'job_grade': '12',
        'department': 'Classroom',
        'role': 'System User',
        'edit': [<i key="cell1" className="fas fa-pencil-alt mr-2 blue-text" aria-hidden="true"></i>],
        'delete': [<i key="cell1" className="fa fa-trash mr-2 red-text" aria-hidden="true"></i>]
        
        
      },
      {
        
        'name': 'Joe',
        'job_grade': '12',
        'department': 'Finance',
        'role': 'Admin',
        'edit': [<i key="cell1" className="fas fa-pencil-alt mr-2 blue-text" aria-hidden="true"></i>],
        'delete': [<i key="cell1" className="fa fa-trash mr-2 red-text" aria-hidden="true"></i>]
      },
      {
        
        'name': 'Mark',
        'job_grade': '5',
        'department': 'Finance',
        'role': 'Super Admin',       
        'edit': [<i key="cell1" className="fas fa-pencil-alt mr-2 blue-text" aria-hidden="true"></i>],
        'delete': [<i key="cell1" className="fa fa-trash mr-2 red-text" aria-hidden="true"></i>]
      },
      {
        
        'name': 'Alexis',
        'job_grade': '6',
        'department': 'Classroom',
        'role': 'System User',       
        'edit': [<i key="cell1" className="fas fa-pencil-alt mr-2 blue-text" aria-hidden="true"></i>],
        'delete': [<i key="cell1" className="fa fa-trash mr-2 red-text" aria-hidden="true"></i>]
        
        
      },
      {
        
        'name': 'Heaton',
        'job_grade': '7',
        'department': 'Classroom',
        'role': 'System User',      
        'edit': [<i key="cell1" className="fas fa-pencil-alt mr-2 blue-text" aria-hidden="true"></i>],
        'delete': [<i key="cell1" className="fa fa-trash mr-2 red-text" aria-hidden="true"></i>]
        
        
      },
      {
        
        'name': 'Onell',
        'job_grade': '9',
        'department': 'Finance',
        'role': 'Admin',
        'edit': [<i key="cell1" className="fas fa-pencil-alt mr-2 blue-text" aria-hidden="true"></i>],
        'delete': [<i key="cell1" className="fa fa-trash mr-2 red-text" aria-hidden="true"></i>]
      },
      {
        
        'name': 'Lottin',
        'job_grade': '5',
        'department': 'Finance',
        'role': 'Super Admin', 
        'edit': [<i key="cell1" className="fas fa-pencil-alt mr-2 blue-text" aria-hidden="true"></i>],
        'delete': [<i key="cell1" className="fa fa-trash mr-2 red-text" aria-hidden="true"></i>]
      },
      {
        
        'name': 'Alphonse',
        'job_grade': '3',
        'department': 'Classroom',
        'role': 'System User',        
        'edit': [<i key="cell1" className="fas fa-pencil-alt mr-2 blue-text" aria-hidden="true"></i>],
        'delete': [<i key="cell1" className="fa fa-trash mr-2 red-text" aria-hidden="true"></i>]
        
        
      }
      
    ]
  };
    return (
      <body>
        {/* <div>
        <AdminNavbar />
      </div> */}
        <div className="row">
          <div className="col-md-2 admin-bar">

          </div>
          <div className="col-md-10">

            <h4>Dashboard</h4>

            <hr/>
            
            <MDBCard narrow>
              {/* <MDBCardHeader className="view view-cascade green gradient-card-header d-flex justify-content-between align-items-center py-2 mx-4 mb-3"> */}
                <div>
                  {/* <MDBBtn outline rounded size="sm" color="white" className="px-2">
      <i className="fa fa-th-large mt-0"></i>
    </MDBBtn> */}
                  {/* <MDBBtn outline rounded size="sm" color="white" className="px-2">
      <i className="fa fa-columns mt-0"></i>
    </MDBBtn> */}
                {/* </div>
                <a href="#" className="white-text mx-3">
                  Staff
                </a>
                <div> */}
                  {/* <MDBBtn outline rounded size="sm" color="white" className="px-2">
      <i className="fas fa-pencil-alt mt-0"></i>
    </MDBBtn> */}
                  {/* <MDBBtn
                    outline
                    rounded
                    size="sm"
                    color="white"
                    className="px-2"
                  >
                    <i className="fas fa-times mt-0"></i>
                  </MDBBtn> */}
                  {/* <MDBBtn outline rounded size="sm" color="white" className="px-2">
      <i className="fa fa-info-circle mt-0"></i>
    </MDBBtn> */}
                </div>
              {/* </MDBCardHeader> */}
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

                <MDBBtn rounded size="m" color="green" className="px-2">
                  Add Staff
                </MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </div>
        </div>
      </body>
    );
  }
}

export default AdminDashboard;


