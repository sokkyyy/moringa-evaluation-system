import React, { Component } from 'react';
import CombinedLineGraph from '../Graph/Combinedgraph'

class GraphCard extends Component {
  state = {  }
  render() { 
    return (
      <div className="card card-cascade">
        <div className="view view-cascade gradient-card-header">
          <h6 className="card-header-title mb-3">
            {" "}
            <strong>My Growth Curve</strong>{" "}
          </h6>
        </div>

        <div className="card-body card-body-cascade text-center">
          <CombinedLineGraph />

          <hr />
        </div>
      </div>
    );
  }
}
 
export default GraphCard;