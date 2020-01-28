import React, { Component } from "react";
import { Form, Button } from "semantic-ui-react";

class Organization extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  saveAndContinue = e => {
    e.preventDefault();
    console.log(e);
    this.props.nextStep();
  };

  handleChange(event) {
    this.props.handleChange(event);
  }
  back = e => {
    e.preventDefault();

    this.props.prevStep();
  };

  render() {
    return (
      <div className="container">
        <fieldset>
          <div>
            <Form>
              <h1 className="head1">Organization</h1>
              <p>
                The ability to maximize your productivity, manage your work, and
                create high quality,error-free final product by planning,
                executing, and prioritizing effectively and consistently.
              </p>

              <div className="planning1">
                <h3>Planning</h3>
                <h5>
                  Plan tasks effectively and consistently within a project
                </h5>
                <div className="custom-control custom-radio">
                  <label>
                    <input
                      type="radio"
                      name="organization.planning"
                      value="1"
                      onChange={this.handleChange}
                      checked={(this.props.org.planning === 1)}
                    />
                    Struggles to plan effectively and consistently
                  </label>
                </div>
                <div className="custom-control custom-radio">
                  <label>
                    <input
                      type="radio"
                      name="organization.planning"
                      value="2"
                      onChange={this.handleChange}
                    />
                    Plans effectively and consistently
                  </label>
                </div>
                <div className="custom-control custom-radio">
                  <label>
                    <input
                      type="radio"
                      name="organization.planning"
                      value="2"
                      onChange={this.handleChange}
                    />
                    Excels at planning effectively and consistently
                  </label>
                </div>
              </div>
            </Form>

            <Form>
              <div className="execution1">
                <h3>Execution</h3>
                <h5>
                  Executes tasks effectively and consistently within a project
                </h5>
                <div className="custom-control custom-radio">
                  <label>
                    <input
                      type="radio"
                      name="organization.execution"
                      value="1"
                      checked={(this.props.org.execution === 1)}
                      onChange={this.handleChange}
                    />
                    Struggles to execute effectively and consistently
                  </label>
                </div>
                <div className="custom-control custom-radio">
                  <label>
                    <input
                      type="radio"
                      name="organization.execution"
                      value="2"
                      onChange={this.handleChange}
                    />
                    Executes effectively and consistently
                  </label>
                </div>
                <div className="custom-control custom-radio">
                  <label>
                    <input
                      type="radio"
                      name="organization.execution"
                      value="3"
                      onChange={this.handleChange}
                    />
                    Excels at executing effectively and consistently
                  </label>
                </div>
              </div>
            </Form>

            <Form>
              <div className="prioritization1">
                <h3>Prioritization</h3>
                <h5>
                  Prioritizes tasks effectively and consistently within a
                  project
                </h5>
                <div className="custom-control custom-radio">
                  <label>
                    <input
                      type="radio"
                      name="organization.prioritization"
                      value="1"
                      checked={(this.props.org.prioritization === 1)}
                      onChange={this.handleChange}
                    />
                    Struggles to prioritize effectively and consistently
                  </label>
                </div>
                <div className="custom-control custom-radio">
                  <label>
                    <input
                      type="radio"
                      name="organization.prioritization"
                      value="2"
                      onChange={this.handleChange}
                    />
                    Prioritizes effectively and consistently
                  </label>
                </div>
                <div className="custom-control custom-radio">
                  <label>
                    <input
                      type="radio"
                      name="organization.prioritization"
                      value="3"
                      onChange={this.handleChange}
                    />
                    Excels at prioritizing effectively and consistently
                  </label>
                </div>
              </div>
            </Form>
            <br />

            <div>
              <Button onClick={this.back} className="previous">
                Back
              </Button>
              <span> </span>
              <Button onClick={this.saveAndContinue} className="next">
                Continue
              </Button>
            </div>
          </div>
        </fieldset>
      </div>
    );
  }
}

export default Organization;
