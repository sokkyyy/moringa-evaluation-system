import React, { Component } from "react";
import { Form, Button } from "semantic-ui-react";

class BuildRelationship extends Component {
  saveAndContinue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    return (
      <div className="container-fluid">
        <Form>
          <h1 className="text-center">Building and Managing Relationships</h1>
          <p className="text-center">
            The ability to collaborate, support each other, and engage external
            stakeholders in beneficial ways to all. In addition to maintaining
            productivity and a collegiate environment by engaging with others
            when inter-personal challenges arise.
          </p>

          <div className="planning">
            <h3>Teamwork</h3>
            <h5>Collaborates on key team activities when required</h5>
            <div className="custom-control custom-radio">
              <label>
                <input type="radio" name="option" value="1" />
                Struggles to collaborate on key team activities
              </label>
            </div>
            <div className="custom-control custom-radio">
              <label>
                <input type="radio" name="option" value="2" />
                Collaborates on key team activities effectively and consistently
              </label>
            </div>
            <div className="custom-control custom-radio">
              <label>
                <input type="radio" name="option" value="2" />
                Excels at collaborating effectively and consistently
              </label>
            </div>
          </div>
        </Form>

        <Form>
          <div className="execution">
            <h3>Stakeholder Management</h3>
            <h5>
              Maximizes existing partnerships and networks to deliver or enhance
              work outcomes
            </h5>
            <div className="custom-control custom-radio">
              <label>
                <input type="radio" name="option" value="1" />
                Struggles to maximize partnerships and networks
              </label>
            </div>
            <div className="custom-control custom-radio">
              <label>
                <input type="radio" name="option" value="2" />
                Maximizes partnerships and networks effectively and consistently
              </label>
            </div>
            <div className="custom-control custom-radio">
              <label>
                <input type="radio" name="option" value="3" />
                Excels at maximizing partnerships and networks effectively and
                consistently
              </label>
            </div>
          </div>
        </Form>

        <Form>
          <div className="prioritization">
            <h3>Conflict Management</h3>
            <h5>
              Move situations of conflict toward resolution in work you directly
              impact
            </h5>
            <div className="custom-control custom-radio">
              <label>
                <input type="radio" name="option" value="1" />
                Struggles to move situations of conflict toward resolution
              </label>
            </div>
            <div className="custom-control custom-radio">
              <label>
                <input type="radio" name="option" value="2" />
                Moves situations of conflict toward resolution effectively and
                consistently
              </label>
            </div>
            <div className="custom-control custom-radio">
              <label>
                <input type="radio" name="option" value="3" />
                Excels at moving situations of conflict toward resolution
                effectively and consistently
              </label>
            </div>
          </div>
        </Form>

        <Button onClick={this.back}>Back</Button>
        <Button onClick={this.saveAndContinue}>Continue </Button>
      </div>
    );
  }
}

export default BuildRelationship;
