import React, { Component } from 'react';
import { MDBCard, MDBCardBody, MDBCardHeader, MDBInput, MDBBtn, MDBTable, MDBTableBody, MDBTableHead  } from 'mdbreact';
import { MDBDataTable } from 'mdbreact';

class CriticalReports extends Component {
  state = {};
  render() {
    const data = {
      columns: [
        {
          label: "Date",
          field: "date",
          sort: "asc",
          width: "130"
        },
        {
          label: "Data Compilation",
          field: "compilation",
          sort: "asc",
          width: "130"
        },
        {
          label: "Data Analysis",
          field: "analysis",
          sort: "asc",
          width: "130"
        },
        {
          label: "Problem Solving",
          field: "solving",
          sort: "asc",
          width: "130"
        },
        {
          label: "Continual Improvement",
          field: "improvement",
          sort: "asc",
          width: "130"
        },
        {
          label: "Type",
          field: "type",
          sort: "asc",
          width: "130"
        }
      ],
      rows: [
        {
          date: "25-1-2020",
          compilation: "1",
          analysis: "1",
          solving: "1",
          improvement: "1",
          type: "manager",        
          
        },
        {
          date: "25-1-2020",
          compilation: "1",
          analysis: "1",
          solving: "1",
          improvement: "1",
          type: "self",   
        },
        {
          date: "25-1-2020",
          compilation: "1",
          analysis: "1",
          solving: "1",
          improvement: "1",
          type: "final",   
        }
      ]
    };
    return (
      <MDBCard narrow>
        <MDBCardHeader className="green gradient-card-header d-flex justify-content-between">
          <h4>Critical Thinking</h4>
        </MDBCardHeader>

        <MDBCardBody cascade>
          <MDBDataTable
            scrollY
            maxHeight="200px"
            minHeight="200px"
            striped
            small
            data={data}
          />
          <MDBBtn
            rounded
            size="m"
            color="green"
            className="px-2"
            data-toggle="modal"
            data-target="#add-staff"
          >
            Export
          </MDBBtn>
        </MDBCardBody>
      </MDBCard>
    );
  }
}
 
export default CriticalReports;