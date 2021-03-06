import React, { Component } from "react";
import { Form, Button } from "semantic-ui-react";

class CriticalThinking extends Component {
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
            <h1 className="head1">Critical Thinking</h1>
            <p>
              The ability to use logic and data to analyze a situation, generate
              strategic options, and continuously reflect on past successes and
              failures to improve future outcomes.
            </p>

            <div className="compilation1">
              <h3>Data Compilation</h3>
              <h5>
                Compile data in situations where the problems have been
                identified by others
              </h5>
              <h5 className="d-none">
                Compile data in situations where the problems are well-defined
              </h5>
              <h5 className="d-none">
                Compile data in situations where the problems are less well-
                defined
              </h5>
              <h5 className="d-none">
                Compile data in situations where the problems are largely
                ambiguous
              </h5>
              <div className="custom-control custom-radio">
                <label>
                  <input
                    type="radio"
                    name="critical_thinking.data_compilation"
                    value="1"
                    checked={(this.props.ct.data_compilation === 1)}
                    onChange={this.handleChange}
                  />
                  Struggles to compile data
                </label>
              </div>
              <div className="custom-control custom-radio">
                <label>
                  <input
                    type="radio"
                    name="critical_thinking.data_compilation"
                    value="2"
                    onChange={this.handleChange}
                  />
                  Compiles data effectively and consistently
                </label>
              </div>
              <div className="custom-control custom-radio">
                <label>
                  <input
                    type="radio"
                    name="critical_thinking.data_compilation"
                    value="3"
                    onChange={this.handleChange}
                  />
                  Excels at compiling data effectively and consistently
                </label>
              </div>
            </div>
          </Form>

          <Form>
            <div className="analysis1">
              <h3>Data Analysis</h3>
              <h5>
                Analyze data in situations where the problems have been
                identified by others
              </h5>
              <h5 className="d-none">
                Analyze data in situations where the problems are well-defined
              </h5>
              <h5 className="d-none">
                Analyze data in situations where the problems are less
                well-defined
              </h5>
              <h5 className="d-none">
                Analyze data in situations where the problems are largely
                ambiguous
              </h5>
              <div className="custom-control custom-radio">
                <label>
                  <input
                    type="radio"
                    name="critical_thinking.data_analysis"
                    value="1"
                    checked={(this.props.ct.data_analysis === 1)}
                    onChange={this.handleChange}
                  />
                  Struggles to analyze data
                </label>
              </div>
              <div className="custom-control custom-radio">
                <label>
                  <input
                    type="radio"
                    name="critical_thinking.data_analysis"
                    value="2"
                    onChange={this.handleChange}
                  />
                  Analyzes data effectively and consistently
                </label>
              </div>
              <div className="custom-control custom-radio">
                <label>
                  <input
                    type="radio"
                    name="critical_thinking.data_analysis"
                    value="3"
                    onChange={this.handleChange}
                  />
                  Excels at analyzing data effectively and consistently
                </label>
              </div>
            </div>
          </Form>

          <Form>
            <div className="solving1">
              <h3>Problem Solving</h3>
              <h5>
                Identify the most strategic options to problems that have been
                identified by others
              </h5>
              <h5 className="d-none">
                Identify the most strategic options to problems that are
                well-defined
              </h5>
              <h5 className="d-none">
                Identify the most strategic options to problems that are less
                well-defined
              </h5>
              <h5 className="d-none">
                Identify the most strategic options to problems that are largely
                ambiguous
              </h5>
              <div className="custom-control custom-radio">
                <label>
                  <input
                    type="radio"
                    name="critical_thinking.problem_solving"
                    value="1"
                    checked={(this.props.ct.problem_solving === 1)}
                    onChange={this.handleChange}
                  />
                  Struggles to identify the most strategic options
                </label>
              </div>
              <div className="custom-control custom-radio">
                <label>
                  <input
                    type="radio"
                    name="critical_thinking.problem_solving"
                    value="2"
                    onChange={this.handleChange}
                  />
                  identifies the most strategic options effectively and
                  consistently
                </label>
              </div>
              <div className="custom-control custom-radio">
                <label>
                  <input
                    type="radio"
                    name="critical_thinking.problem_solving"
                    value="3"
                    onChange={this.handleChange}
                  />
                  Excels at identifying the most strategic options effectively
                  and consistently
                </label>
              </div>
            </div>
          </Form>

          <Form>
            <div className="improvement1">
              <h3>Continual Improvement</h3>
              <h5>
                Reflect on lessons learned from problems that have been
                identified by others to improve future outcomes
              </h5>
              <h5 className="d-none">
                Reflect on lessons learned from problems that are well-defined
                to improve future outcomes
              </h5>
              <h5 className="d-none">
                Reflect on lessons learned from problems that are less
                well-defined to improve future outcomes
              </h5>
              <h5 className="d-none">
                Reflect on lessons learned from problems that are largely
                ambiguous to improve future outcomes
              </h5>
              <div className="custom-control custom-radio">
                <label>
                  <input
                    type="radio"
                    name="critical_thinking.continual_improvement"
                    value="1"
                    checked={(this.props.ct.continual_improvement === 1)}
                    onChange={this.handleChange}
                  />
                  Struggles to reflect on lessons learned from successes and
                  failures
                </label>
              </div>
              <div className="custom-control custom-radio">
                <label>
                  <input
                    type="radio"
                    name="critical_thinking.continual_improvement"
                    value="2"
                    onChange={this.handleChange}
                  />
                  Reflects on lessons learned from successes and failures
                  effectively and consistently
                </label>
              </div>
              <div className="custom-control custom-radio">
                <label>
                  <input
                    type="radio"
                    name="critical_thinking.continual_improvement"
                    value="3"
                    onChange={this.handleChange}
                  />
                  Excels at reflecting on lessons learned from successes and
                  failures effectively and consistently
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
          <br />
          <br />
        </fieldset>
      </div>
    );
  }
}

export default CriticalThinking;
