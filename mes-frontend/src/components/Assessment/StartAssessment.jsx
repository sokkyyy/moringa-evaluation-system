import React, { Component } from "react";
import { Button } from "semantic-ui-react";

class StartAssessment extends Component {
  saveAndContinue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  styles = {
  };

  render() {
    return (
      <div>
        <Button onClick={this.saveAndContinue} className="next">
          Take Assessment
        </Button>
      </div>
    );
  }
}

export default StartAssessment;
