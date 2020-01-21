

import React, { Component } from 'react';
import { MDBCard, MDBCardBody, MDBCardHeader, MDBInput, MDBBtn, MDBTable, MDBTableBody, MDBTableHead  } from 'mdbreact';
import { MDBDataTable } from 'mdbreact';
import AdminNavbar from '../Navbar/AdminNavbar'

class DepartmentTable extends Component {
  state = {  }
  render() { 

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
        
        'name': 'Finance',
        'manager': 'Frank',
        'line-manager': 'Tom',
        'edit': [<i key="cell1" className="fas fa-pencil-alt mr-2 blue-text" aria-hidden="true"></i>],
        'delete': [<i key="cell1" className="fa fa-trash mr-2 red-text" aria-hidden="true"></i>]
        
      },
      {
        
        'name': 'HR',
        'manager': 'Frank',
        'line-manager': 'Tom',
        'edit': [<i key="cell1" className="fas fa-pencil-alt mr-2 blue-text" aria-hidden="true"></i>],
        'delete': [<i key="cell1" className="fa fa-trash mr-2 red-text" aria-hidden="true"></i>]
        
      },
      {
        
        'name': 'Classroom',
        'manager': 'Frank',
        'line-manager': 'Tom',
        'edit': [<i key="cell1" className="fas fa-pencil-alt mr-2 blue-text" aria-hidden="true"></i>],
        'delete': [<i key="cell1" className="fa fa-trash mr-2 red-text" aria-hidden="true"></i>]
       
        
      }
      
    ]
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
                {/* <MDBTable btn fixed>
    <MDBTableHead columns={data_panel.columns} />
    <MDBTableBody rows={data_panel.rows} />
  </MDBTable> */}

                <MDBBtn rounded size="m" color="green" className="px-2" data-toggle="modal" data-target="#add-department">
                  Add Department
                </MDBBtn>
              </MDBCardBody>
            </MDBCard>
         
    );
  }
}

export default DepartmentTable;


