import React, { Component } from 'react';
import { MDBCard, MDBCardBody, MDBCardHeader, MDBInput, MDBBtn, MDBTable, MDBTableBody, MDBTableHead  } from 'mdbreact';
import { MDBDataTable } from 'mdbreact';

class BuildingReports extends Component {
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
          label: "Teamwork",
          field: "team",
          sort: "asc",
          width: "130"
        },
        {
          label: "Stakeholder Management",
          field: "stake",
          sort: "asc",
          width: "130"
        },
        {
          label: "Conflict Management",
          field: "conflict",
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
          team: "1",
          stake: "1",
          conflict: "1",
          type: "manager",        
          
        },
        {
          date: "25-1-2020",
          team: "1",
          stake: "1",
          conflict: "1",
          type: "self",   
        },
        {
          date: "25-1-2020",
          team: "1",
          stake: "1",
          conflict: "1",
          type: "final",   
        }
      ]
    };
    return (
      <MDBCard narrow>
        <MDBCardHeader className="green gradient-card-header d-flex justify-content-between">
          <h4>Building Relationships</h4>
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
 
export default BuildingReports;