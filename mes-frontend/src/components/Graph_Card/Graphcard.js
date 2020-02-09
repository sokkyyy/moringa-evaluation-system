import React, { Component } from 'react';
import CombinedLineGraph from '../Graph/Combinedgraph'
import CompetencyService from '../../services/CompetencyService';


const competencyService = new CompetencyService();

class GraphCard extends Component {
  constructor(props) {
		super(props);

    this.state = {
        assessments : [],
        load:true,
    };

	}

  componentDidMount(){
    competencyService.getUserAssessments().then(
      response => { 
        console.log(response.data);
        this.setState({assessments: response.data});
        this.setState({load:false});
      }
    ).catch(error => console.log(error));
  }


  render() {
    const {load} = this.state;

    return (
      <div>
      {load ? '' : (

        <div class="card card-cascade">
          <div class="view view-cascade gradient-card-header">
            <h6 class="card-header-title mb-3">
              {" "}
              <strong>My Growth Curve</strong>{" "}
              </h6>
            </div>

            <div class="card-body card-body-cascade text-center">
              <CombinedLineGraph results={this.state.assessments} />

              <hr />
            </div>
          </div>
      )}
    </div>
    );
  }
}

export default GraphCard;
