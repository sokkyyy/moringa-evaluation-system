import React, { Component } from "react";
import { Form, Button } from "semantic-ui-react";

class BuildRelationship extends Component {
  saveAndContinue = e => {
    e.preventDefault();
    this.props.handleSubmit();
    this.props.nextStep();

  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  handleChange = (event) => {
    this.props.handleChange(event);
  };

  render() {
    return (
      <div className="container">
        <fieldset>
          <Form>
            <h1 className="head1">Building and Managing Relationships</h1>
            <p>
              The ability to collaborate, support each other, and engage
              external stakeholders in beneficial ways to all. In addition to
              maintaining productivity and a collegiate environment by engaging
              with others when inter-personal challenges arise.
            </p>
          <div className="teamwork1">
            <h3>Teamwork</h3>
            <h5>Collaborates on key team activities when required</h5>
            <div className="custom-control custom-radio">
              <label>
                <input type="radio" name="relationships.team_work" value="1" onChange={this.handleChange} />
                Struggles to collaborate on key team activities
              </label>
            </div>
            <div className="custom-control custom-radio">
              <label>
                <input type="radio" name="relationships.team_work" value="2" onChange={this.handleChange} />
                Collaborates on key team activities effectively and consistently
              </label>
            </div>
            <div className="custom-control custom-radio">
              <label>
                <input type="radio" name="relationships.team_work" value="2" onChange={this.handleChange} />
                Excels at collaborating effectively and consistently
              </label>
            </div>
          </div>
        </Form>

        <Form>
          <div className="stakeholder1">
            <h3>Stakeholder Management</h3>
            <h5>
              Maximizes existing partnerships and networks to deliver or enhance
              work outcomes
            </h5>
            <div className="custom-control custom-radio">
              <label>
                <input type="radio" name="relationships.stakeholder_management" value="1" onChange={this.handleChange} />
                Struggles to maximize partnerships and networks
              </label>
            </div>
            <div className="custom-control custom-radio">
              <label>
                <input type="radio" name="relationships.stakeholder_management" value="2" onChange={this.handleChange} />
                Maximizes partnerships and networks effectively and consistently
              </label>
            </div>
            <div className="custom-control custom-radio">
              <label>
                <input type="radio" name="relationships.stakeholder_management" value="3" onChange={this.handleChange} />
                Excels at maximizing partnerships and networks effectively and
                consistently
              </label>
            </div>
          </div>
        </Form>

        <Form>
          <div className="conflicts1">
            <h3>Conflict Management</h3>
            <h5>
              Move situations of conflict toward resolution in work you directly
              impact
            </h5>
            <div className="custom-control custom-radio">
              <label>
                <input type="radio" name="relationships.conflict_management" value="1" onChange={this.handleChange} />
                Struggles to move situations of conflict toward resolution
              </label>
            </div>
            <div className="custom-control custom-radio">
              <label>
                <input type="radio" name="relationships.conflict_management" value="2" onChange={this.handleChange} />
                Moves situations of conflict toward resolution effectively and
                consistently
              </label>
            </div>
            <div className="custom-control custom-radio">
              <label>
                <input type="radio" name="relationships.conflict_management" value="3" onChange={this.handleChange} />
                Excels at moving situations of conflict toward resolution
                effectively and consistently
              </label>
            </div>
          </div>
          </Form>

          <div className="text-center">
            <Button onClick={this.back} className="previous">
              Back
            </Button>
            <Button onClick={this.saveAndContinue} className="next">
              Continue
            </Button>
          </div>
        </fieldset>
      </div>
    );
  }
}

export default BuildRelationship;
