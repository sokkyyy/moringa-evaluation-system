import React, { Component } from 'react';
import { MDBCard, MDBCardBody, MDBCardHeader, MDBInput, MDBBtn, MDBTable, MDBTableBody, MDBTableHead  } from 'mdbreact';
import { MDBDataTable } from 'mdbreact';

class InterpersonalReports extends Component {
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
          label: "Build Investment",
          field: "build_investment",
          sort: "asc",
          width: "130"
        },
        {
          label: "Effective Communication",
          field: "effective_communication",
          sort: "asc",
          width: "130"
        },
        {
          label: "Deliver the Message",
          field: "deliver_message",
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
          build_investment: "1",
          effective_communication: "1",
          deliver_message: "1",
          type: "manager",        
          
        },
        {
          date: "25-1-2020",
          build_investment: "1",
          effective_communication: "1",
          deliver_message: "1",
          type: "self",   
        },
        {
          date: "25-1-2020",
          build_investment: "1",
          effective_communication: "1",
          deliver_message: "1",
          type: "final",   
        }
      ]
    };
    return (
      <MDBCard narrow>
        <MDBCardHeader className="green gradient-card-header d-flex justify-content-between">
          <h4>Interpersonal effective_communication</h4>
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
 
export default InterpersonalReports;