import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar';
import BuildingReports from '../Tables/BuildingReports'
import CriticalReports from '../Tables/CriticalThinkingReports'
import OrganizationReports from '../Tables/OrganizationReports';
import InnovationReports from '../Tables/Innovation';
import InterpersonalReports from '../Tables/InterpersonalReports';

class IndividualReports extends Component {
  state = {  }
  render() { 
    return (
      <div>
        <Navbar />

        <div className="container-fluid other">
          <div className="row">
            <div className="other">
              
            </div>
            <div className="col-md-6 other">
              <BuildingReports />
            </div>
            <div className="col-md-6 other">
              <CriticalReports />
            </div>
            <div className="col-md-6 other">
              <OrganizationReports />
            </div>
            <div className="col-md-6 other">
              <InnovationReports />
            </div>
            <div className="col-md-6 other">
              <InterpersonalReports />
            </div>
          </div>

          {/* <div className="container-fluid other">
            <BuildingReports />
          </div>
          <div className="container-fluid other">
            <CriticalReports />
          </div>
          <div className="container-fluid other">
            <OrganizationReports />
          </div>
          <div className="container-fluid other">
            <InnovationReports />
          </div>
          <div className="container-fluid other">
            <InterpersonalReports />
          </div> */}
        </div>
      </div>
    );
  }
}
 
export default IndividualReports;