import React, { Component } from "react";
import { Form, Button } from "semantic-ui-react";

class Communication extends Component {
  saveAndContinue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };
  handleChange = event => {
    this.props.handleChange(event);
  };
  render() {
    return (
      <div className="container">
        <fieldset>
          <Form>
            <h1 className="head1">Interpersonal Communication</h1>
            <p>
              The ability to communicate effectively - both verbally and in
              writing, build relationships and achieve desired outcomes by
              building investment, articulating and crafting a clear, engaging
              message
            </p>

            <div className="investment1">
              <h3>Investment Building</h3>
              <h5>Gain buy-in from those whom you directly impact</h5>
              <h5 className="d-none">Gain buy-in from your team</h5>
              <h5 className="d-none">Gain buy-in from multiple teams</h5>
              <h5 className="d-none">Gain buy-in from the institution</h5>
              <div className="custom-control custom-radio">
                <label>
                  <input
                    type="radio"
                    name="interpersonal_communication.investment_building"
                    value="1"
                    onChange={this.handleChange}
                  />
                  Struggles to gain the buy-in from others
                </label>
              </div>
              <div className="custom-control custom-radio">
                <label>
                  <input
                    type="radio"
                    name="interpersonal_communication.investment_building"
                    value="2"
                    onChange={this.handleChange}
                  />
                  Gains buy-in from others effectively and consistently
                </label>
              </div>
              <div className="custom-control custom-radio">
                <label>
                  <input
                    type="radio"
                    name="interpersonal_communication.investment_building"
                    value="2"
                    onChange={this.handleChange}
                  />
                  Excels at gaining buy-in from others effectively and
                  consistently
                </label>
              </div>
            </div>
          </Form>

          <Form>
            <div className="communication1">
              <h3>Effective Communication</h3>
              <h5>
                Develop clear, concise, and error-free written and verbal
                content for those who are familiar and aligned
              </h5>
              <h5 className="d-none">
                Develop clear, concise, and error-free written and verbal
                content for those who are aligned but not yet familiar
              </h5>
              <h5 className="d-none">
                Develop clear, concise, and error-free written and verbal
                content for those who are familiar but not yet aligned
              </h5>
              <h5 className="d-none">
                Develop clear, concise, and error-free written and verbal
                content for those who are not yet familiar and yet not aligned
              </h5>
              <div className="custom-control custom-radio">
                <label>
                  <input
                    type="radio"
                    name="interpersonal_communication.effective_communication"
                    value="1"
                    onChange={this.handleChange}
                  />
                  Struggles to develop content
                </label>
              </div>
              <div className="custom-control custom-radio">
                <label>
                  <input
                    type="radio"
                    name="interpersonal_communication.effective_communication"
                    value="2"
                    onChange={this.handleChange}
                  />
                  Develops content effectively and consistently
                </label>
              </div>
              <div className="custom-control custom-radio">
                <label>
                  <input
                    type="radio"
                    name="interpersonal_communication.effective_communication"
                    value="3"
                    onChange={this.handleChange}
                  />
                  Excels at developing content effectively and consistently
                </label>
              </div>
            </div>
          </Form>

          <Form>
            <div className="message-delivery1">
              <h3>Delivering the Message (Method + Structure)</h3>
              <h5>
                Deliver a message using the appropriate method, tone, and
                structure of communication for those who are familiar and
                aligned
              </h5>
              <h5 className="d-none">
                Deliver a message using the appropriate method, tone, and
                structure of communication for those who are aligned but not yet
                familiar
              </h5>
              <h5 className="d-none">
                Deliver a message using the appropriate method, tone, and
                structure of communication for those who are familiar but not
                yet aligned
              </h5>
              <h5 className="d-none">
                Deliver a message using the appropriate method, tone, and
                structure of communication for those who are not yet familiar
                and yet not aligned
              </h5>
              <div className="custom-control custom-radio">
                <label>
                  <input
                    type="radio"
                    name="interpersonal_communication.delivery"
                    value="1"
                    onChange={this.handleChange}
                  />
                  Struggles to deliver a clear message
                </label>
              </div>
              <div className="custom-control custom-radio">
                <label>
                  <input
                    type="radio"
                    name="interpersonal_communication.delivery"
                    value="2"
                    onChange={this.handleChange}
                  />
                  Delivers clear message effectively and consistently
                </label>
              </div>
              <div className="custom-control custom-radio">
                <label>
                  <input
                    type="radio"
                    name="interpersonal_communication.delivery"
                    value="3"
                    onChange={this.handleChange}
                  />
                  Excels at delivering clear message effectively and
                  consistently
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
        </fieldset>
      </div>
    );
  }
}

export default Communication;
