import React, { Component } from "react";
import { Form, Button } from "semantic-ui-react";

class Innovation extends Component {
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
          <h1 className="text-center">Innovation</h1>
          <p className="text-center">
            The ability to set a vision and standard of excellence for your
            work, to generate new ideas, devices, or methods that are
            appropriate to the situation, to add product, and to adapt to change
            in a purposeful manner.
          </p>

          <div className="planning">
            <h3>Vision Setting</h3>
            <h5>Set and communicate a clear vision for your work</h5>
            <div className="custom-control custom-radio">
              <label>
                <input type="radio" name="option" value="1" />
                Struggles to set a clear vision for work
              </label>
            </div>
            <div className="custom-control custom-radio">
              <label>
                <input type="radio" name="option" value="2" />
                Sets a clear vision for work effectively and consistently
              </label>
            </div>
            <div className="custom-control custom-radio">
              <label>
                <input type="radio" name="option" value="2" />
                Excels at setting a clear vision for work effectively and
                consistently
              </label>
            </div>
          </div>
        </Form>

        <Form>
          <div className="execution">
            <h3>Thinking Outside the Box</h3>
            <h5>Generate new ideas to improve your own performance</h5>
            <div className="custom-control custom-radio">
              <label>
                <input type="radio" name="option" value="1" />
                Struggles to generate new ideas
              </label>
            </div>
            <div className="custom-control custom-radio">
              <label>
                <input type="radio" name="option" value="2" />
                Generates new ideas effectively and consistently
              </label>
            </div>
            <div className="custom-control custom-radio">
              <label>
                <input type="radio" name="option" value="3" />
                Excels at generating new ideas effectively and consistently
              </label>
            </div>
          </div>
        </Form>

        <Form>
          <div className="prioritization">
            <h3>Adaptability</h3>
            <h5>
              Adjust your workstreams when changes arise in an efficient and
              responsive manner
            </h5>
            <div className="custom-control custom-radio">
              <label>
                <input type="radio" name="option" value="1" />
                Struggles to adjust workstreams
              </label>
            </div>
            <div className="custom-control custom-radio">
              <label>
                <input type="radio" name="option" value="2" />
                Adjusts workstreams effectively and consistently
              </label>
            </div>
            <div className="custom-control custom-radio">
              <label>
                <input type="radio" name="option" value="3" />
                Excels at adjusting workstreams effectively and consistently
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

export default Innovation;
