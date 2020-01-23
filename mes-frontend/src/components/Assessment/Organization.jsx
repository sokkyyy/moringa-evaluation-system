import React, { Component } from "react";
import { Form, Button } from "semantic-ui-react";

class Organization extends Component {
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
      <div className="container-fluid ">
        <fieldset>
          <div>
            <Form>
              <h1 className="text-center head1">Organization</h1>
              <p className="text-center">
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
                    <input type="radio" name="option" value="1" />
                    Struggles to plan effectively and consistently
                  </label>
                </div>
                <div className="custom-control custom-radio">
                  <label>
                    <input type="radio" name="option" value="2" />
                    Plans effectively and consistently
                  </label>
                </div>
                <div className="custom-control custom-radio">
                  <label>
                    <input type="radio" name="option" value="2" />
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
                    <input type="radio" name="option" value="1" />
                    Struggles to execute effectively and consistently
                  </label>
                </div>
                <div className="custom-control custom-radio">
                  <label>
                    <input type="radio" name="option" value="2" />
                    Executes effectively and consistently
                  </label>
                </div>
                <div className="custom-control custom-radio">
                  <label>
                    <input type="radio" name="option" value="3" />
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
                    <input type="radio" name="option" value="1" />
                    Struggles to prioritize effectively and consistently
                  </label>
                </div>
                <div className="custom-control custom-radio">
                  <label>
                    <input type="radio" name="option" value="2" />
                    Prioritizes effectively and consistently
                  </label>
                </div>
                <div className="custom-control custom-radio">
                  <label>
                    <input type="radio" name="option" value="3" />
                    Excels at prioritizing effectively and consistently
                  </label>
                </div>
              </div>
            </Form>
          </div>

          <div className="text-center">
            <Button onClick={this.saveAndContinue} className="next">
              Continue
            </Button>
          </div>
        </fieldset>
      </div>
    );
  }
}

export default Organization;
