import React, { Component } from 'react';
import { MDBCard, MDBCardBody, MDBCardHeader, MDBInput, MDBBtn, MDBTable, MDBTableBody, MDBTableHead  } from 'mdbreact';
import { MDBDataTable } from 'mdbreact';

class OrganizationReports extends Component {
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
          label: "Planning",
          field: "planning",
          sort: "asc",
          width: "130"
        },
        {
          label: "Execution",
          field: "execution",
          sort: "asc",
          width: "130"
        },
        {
          label: "Prioritization",
          field: "prioritization",
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
          planning: "1",
          execution: "1",
          prioritization: "1",
          type: "manager",        
          
        },
        {
          date: "25-1-2020",
          planning: "1",
          execution: "1",
          prioritization: "1",
          type: "self",   
        },
        {
          date: "25-1-2020",
          planning: "1",
          execution: "1",
          prioritization: "1",
          type: "final",   
        }
      ]
    };
    return (
      <MDBCard narrow>
        <MDBCardHeader className="green gradient-card-header d-flex justify-content-between">
          <h4>Organization</h4>
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
          
        </MDBCardBody>
      </MDBCard>
    );
  }
}
 
export default OrganizationReports;