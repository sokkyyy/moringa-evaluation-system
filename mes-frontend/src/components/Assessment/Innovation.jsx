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

  handleChange = (event) => {
    this.props.handleChange(event);
  };

  render() {
    return (
      <div className="container">
        <fieldset>
          <Form>
            <h1 className="head1">Innovation</h1>
            <p>
              The ability to set a vision and standard of excellence for your
              work, to generate new ideas, devices, or methods that are
              appropriate to the situation, to add product, and to adapt to
              change in a purposeful manner.
            </p>

          <div className="visions1">
            <h3>Vision Setting</h3>
            <h5>Set and communicate a clear vision for your work</h5>
            <div className="custom-control custom-radio">
              <label>
                <input type="radio" name="innovation.vision_setting" value="1" onChange={this.handleChange} />
                Struggles to set a clear vision for work
              </label>
            </div>
            <div className="custom-control custom-radio">
              <label>
                <input type="radio" name="innovation.vision_setting" value="2" onChange={this.handleChange} />
                Sets a clear vision for work effectively and consistently
              </label>
            </div>
            <div className="custom-control custom-radio">
              <label>
                <input type="radio" name="innovation.vision_setting" value="2" onChange={this.handleChange} />
                Excels at setting a clear vision for work effectively and
                consistently
              </label>
            </div>
          </div>
        </Form>

        <Form>
          <div className="thinking1">
            <h3>Thinking Outside the Box</h3>
            <h5>Generate new ideas to improve your own performance</h5>
            <div className="custom-control custom-radio">
              <label>
                <input type="radio" name="innovation.thinking" value="1" onChange={this.handleChange} />
                Struggles to generate new ideas
              </label>
            </div>
            <div className="custom-control custom-radio">
              <label>
                <input type="radio" name="innovation.thinking" value="2" onChange={this.handleChange} />
                Generates new ideas effectively and consistently
              </label>
            </div>
            <div className="custom-control custom-radio">
              <label>
                <input type="radio" name="innovation.thinking" value="3" onChange={this.handleChange} />
                Excels at generating new ideas effectively and consistently
              </label>
            </div>
          </div>
        </Form>

        <Form>
          <div className="adaptability1">
            <h3>Adaptability</h3>
            <h5>
              Adjust your workstreams when changes arise in an efficient and
              responsive manner
            </h5>
            <div className="custom-control custom-radio">
              <label>
                <input type="radio" name="innovation.adaptability" value="1" onChange={this.handleChange} />
                Struggles to adjust workstreams
              </label>
            </div>
            <div className="custom-control custom-radio">
              <label>
                <input type="radio" name="innovation.adaptability" value="2" onChange={this.handleChange} />
                Adjusts workstreams effectively and consistently
              </label>
            </div>
            <div className="custom-control custom-radio">
              <label>
                <input type="radio" name="innovation.adaptability" value="3" onChange={this.handleChange} />
                Excels at adjusting workstreams effectively and consistently
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

export default Innovation;
