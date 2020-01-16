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

  render() {
    return (
      <div className="container-fluid">
        <Form>
          <h1 className="text-center">Interpersonal Communication</h1>
          <p className="text-center">
            The ability to communicate effectively - both verbally and in
            writing, build relationships and achieve desired outcomes by
            building investment, articulating and crafting a clear, engaging
            message
          </p>

          <div className="planning">
            <h3>Investment Building</h3>
            <h5>Gain buy-in from those whom you directly impact</h5>
            <div className="custom-control custom-radio">
              <label>
                <input type="radio" name="option" value="1" />
                Struggles to gain the buy-in from others
              </label>
            </div>
            <div className="custom-control custom-radio">
              <label>
                <input type="radio" name="option" value="2" />
                Gains buy-in from others effectively and consistently
              </label>
            </div>
            <div className="custom-control custom-radio">
              <label>
                <input type="radio" name="option" value="2" />
                Excels at gaining buy-in from others effectively and
                consistently
              </label>
            </div>
          </div>
        </Form>

        <Form>
          <div className="execution">
            <h3>Effective Communication</h3>
            <h5>
              Develop clear, concise, and error-free written and verbal content
              for those who are familiar and aligned
            </h5>
            <div className="custom-control custom-radio">
              <label>
                <input type="radio" name="option" value="1" />
                Struggles to develop content
              </label>
            </div>
            <div className="custom-control custom-radio">
              <label>
                <input type="radio" name="option" value="2" />
                Develops content effectively and consistently
              </label>
            </div>
            <div className="custom-control custom-radio">
              <label>
                <input type="radio" name="option" value="3" />
                Excels at developing content effectively and consistently
              </label>
            </div>
          </div>
        </Form>

        <Form>
          <div className="prioritization">
            <h3>Delivering the Message (Method + Structure)</h3>
            <h5>
              Deliver a message using the appropriate method, tone, and
              structure of communication for those who are familiar and aligned
            </h5>
            <div className="custom-control custom-radio">
              <label>
                <input type="radio" name="option" value="1" />
                Struggles to deliver a clear message
              </label>
            </div>
            <div className="custom-control custom-radio">
              <label>
                <input type="radio" name="option" value="2" />
                Delivers clear message effectively and consistently
              </label>
            </div>
            <div className="custom-control custom-radio">
              <label>
                <input type="radio" name="option" value="3" />
                Excels at delivering clear message effectively and consistently
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

export default Communication;
