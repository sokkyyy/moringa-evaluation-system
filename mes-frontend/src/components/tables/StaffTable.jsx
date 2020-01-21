

import React, { Component } from 'react';
import { MDBCard, MDBCardBody, MDBCardHeader, MDBInput, MDBBtn, MDBTable, MDBTableBody, MDBTableHead  } from 'mdbreact';
import { MDBDataTable } from 'mdbreact';
import AdminNavbar from '../Navbar/AdminNavbar'

class StaffTable extends Component {
  state = {  }
  render() { 

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
    rows: [
      {        
        'name': 'Otto',
        'email': 'sample@gmail.com',
        'job_grade': '1',
        'department': 'Finance',
        'role': 'Admin',      
        'edit': [<i key="cell1" className="fas fa-pencil-alt mr-2 blue-text" aria-hidden="true"></i>],
        'delete': [<i key="cell1" className="fa fa-trash mr-2 red-text" aria-hidden="true"></i>]
      },
      {        
        'name': 'Jake',
        'email': 'sample@gmail.com',
        'job_grade': '2',
        'department': 'Finance',
        'role': 'Super Admin',        
        'edit': [<i key="cell1" className="fas fa-pencil-alt mr-2 blue-text" aria-hidden="true"></i>],
        'delete': [<i key="cell1" className="fa fa-trash mr-2 red-text" aria-hidden="true"></i>]
      },
      {        
        'name': 'Esther',
        'email': 'sample@gmail.com',
        'job_grade': '3',
        'department': 'Classroom',
        'role': 'System User',
        'edit': [<i key="cell1" className="fas fa-pencil-alt mr-2 blue-text" aria-hidden="true"></i>],
        'delete': [<i key="cell1" className="fa fa-trash mr-2 red-text" aria-hidden="true"></i>]        
      },
      {        
        'name': 'Joel',
        'email': 'sample@gmail.com',
        'job_grade': '4',
        'department': 'Classroom',
        'role': 'Admin',
        'edit': [<i key="cell1" className="fas fa-pencil-alt mr-2 blue-text" aria-hidden="true"></i>],
        'delete': [<i key="cell1" className="fa fa-trash mr-2 red-text" aria-hidden="true"></i>]
      },
      {        
        'name': 'Jacob',
        'email': 'sample@gmail.com',
        'job_grade': '8',
        'department': 'System Admin',
        'role': 'Super Admin',        
        'edit': [<i key="cell1" className="fas fa-pencil-alt mr-2 blue-text" aria-hidden="true"></i>],
        'delete': [<i key="cell1" className="fa fa-trash mr-2 red-text" aria-hidden="true"></i>]
      },
      {        
        'name': 'Anita',
        'email': 'sample@gmail.com',
        'job_grade': '12',
        'department': 'Classroom',
        'role': 'System User',
        'edit': [<i key="cell1" className="fas fa-pencil-alt mr-2 blue-text" aria-hidden="true"></i>],
        'delete': [<i key="cell1" className="fa fa-trash mr-2 red-text" aria-hidden="true"></i>]        
      },
      {        
        'name': 'Joe',
        'email': 'sample@gmail.com',
        'job_grade': '12',
        'department': 'Finance',
        'role': 'Admin',
        'edit': [<i key="cell1" className="fas fa-pencil-alt mr-2 blue-text" aria-hidden="true"></i>],
        'delete': [<i key="cell1" className="fa fa-trash mr-2 red-text" aria-hidden="true"></i>]
      },
      {        
        'name': 'Mark',
        'email': 'sample@gmail.com',
        'job_grade': '5',
        'department': 'Finance',
        'role': 'Super Admin',       
        'edit': [<i key="cell1" className="fas fa-pencil-alt mr-2 blue-text" aria-hidden="true"></i>],
        'delete': [<i key="cell1" className="fa fa-trash mr-2 red-text" aria-hidden="true"></i>]
      },
      {        
        'name': 'Alexis',
        'email': 'sample@gmail.com',
        'job_grade': '6',
        'department': 'Classroom',
        'role': 'System User',       
        'edit': [<i key="cell1" className="fas fa-pencil-alt mr-2 blue-text" aria-hidden="true"></i>],
        'delete': [<i key="cell1" className="fa fa-trash mr-2 red-text" aria-hidden="true"></i>]        
      },
      {        
        'name': 'Heaton',
        'email': 'sample@gmail.com',
        'job_grade': '7',
        'department': 'Classroom',
        'role': 'System User',      
        'edit': [<i key="cell1" className="fas fa-pencil-alt mr-2 blue-text" aria-hidden="true"></i>],
        'delete': [<i key="cell1" className="fa fa-trash mr-2 red-text" aria-hidden="true"></i>]       
      },
      {
        
        'name': 'Onell',
        'email': 'sample@gmail.com',
        'job_grade': '9',
        'department': 'Finance',
        'role': 'Admin',
        'edit': [<i key="cell1" className="fas fa-pencil-alt mr-2 blue-text" aria-hidden="true"></i>],
        'delete': [<i key="cell1" className="fa fa-trash mr-2 red-text" aria-hidden="true"></i>]
      },
      {
        
        'name': 'Lottin',
        'email': 'sample@gmail.com',
        'job_grade': '5',
        'department': 'Finance',
        'role': 'Super Admin', 
        'edit': [<i key="cell1" className="fas fa-pencil-alt mr-2 blue-text" aria-hidden="true"></i>],
        'delete': [<i key="cell1" className="fa fa-trash mr-2 red-text" aria-hidden="true"></i>]
      },
      {
        
        'name': 'Alphonse',
        'email': 'sample@gmail.com',
        'job_grade': '3',
        'department': 'Classroom',
        'role': 'System User',        
        'edit': [<i key="cell1" className="fas fa-pencil-alt mr-2 blue-text" aria-hidden="true"></i>],
        'delete': [<i key="cell1" className="fa fa-trash mr-2 red-text" aria-hidden="true"></i>]
        
        
      }
      
    ]
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
                // data-toggle="modal"
                //   data-target="#add-staff"
                  >
                  Add Staff
                </MDBBtn>
              </MDBCardBody>
            </MDBCard>
         
    );
  }
}

export default StaffTable;


