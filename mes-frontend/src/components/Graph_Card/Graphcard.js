import React, { Component } from 'react';
import CombinedLineGraph from '../Graph/Combinedgraph'

class GraphCard extends Component {
  state = {  }
  render() { 
    return (
      <div class="card card-cascade">
        <div class="view view-cascade gradient-card-header">
          <h6 class="card-header-title mb-3">
            {" "}
            <strong>My Growth Curve</strong>{" "}
          </h6>
        </div>

        <div class="card-body card-body-cascade text-center">
          <CombinedLineGraph />

          <hr />
        </div>
      </div>
    );
  }
}
 
export default GraphCard;