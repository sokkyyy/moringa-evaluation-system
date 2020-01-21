

import React, { Component } from 'react';
import { MDBCard, MDBCardBody, MDBCardHeader, MDBInput, MDBBtn, MDBTable, MDBTableBody, MDBTableHead  } from 'mdbreact';
import { MDBDataTable } from 'mdbreact';
import AdminNavbar from '../Navbar/AdminNavbar'

class GradeTable extends Component {
  state = {  }
  render() { 

  const data = {
    columns: [
      
      {
        'label': '',
        'field': 'name',
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
        
        'name': '1',
        'edit': [<i key="cell1" className="fas fa-pencil-alt mr-2 blue-text" aria-hidden="true"></i>],
        'delete': [<i key="cell1" className="fa fa-trash mr-2 red-text" aria-hidden="true"></i>]
      
        
      },
      {
        
        'name': '2',
        'edit': [<i key="cell1" className="fas fa-pencil-alt mr-2 blue-text" aria-hidden="true"></i>],
        'delete': [<i key="cell1" className="fa fa-trash mr-2 red-text" aria-hidden="true"></i>]
       
        
      },
      {
        
        'name': '3',
        'edit': [<i key="cell1" className="fas fa-pencil-alt mr-2 blue-text" aria-hidden="true"></i>],
        'delete': [<i key="cell1" className="fa fa-trash mr-2 red-text" aria-hidden="true"></i>]
        
       
        
      }
      
    ]
  };
    return (
  
            
            <MDBCard narrow>

              <MDBCardHeader className="green gradient-card-header d-flex justify-content-between">
                <h4>Job Grades</h4>
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

                <MDBBtn rounded size="m" color="green" className="px-2">
                  Add Grade
                </MDBBtn>
              </MDBCardBody>
            </MDBCard>
         
    );
  }
}

export default GradeTable;


