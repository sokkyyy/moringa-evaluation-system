import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar';
import BuildingReports from '../Tables/BuildingReports'
import CriticalReports from '../Tables/CriticalThinkingReports'

class IndividualReports extends Component {
  state = {  }
  render() { 
    return (
      <div>
        <Navbar />

        <div className="container-fluid other">
          <div className="container-fluid other">
            <BuildingReports />
          </div>
          <div className="container-fluid other">
            <CriticalReports />
          </div>
          <div className="container-fluid other">
            <CriticalReports />
          </div>
          <div className="container-fluid other">
            <CriticalReports />
          </div>
          <div className="container-fluid other">
            <CriticalReports />
          </div>
        </div>
      </div>
    );
  }
}
 
export default IndividualReports;