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



  render() {
    return (
      <div className="container-fluid">
        <Form>
          <h1 className="text-center">Critical Thinking</h1>
          <p className="text-center">
            The ability to use logic and data to analyze a situation, generate
            strategic options, and continuously reflect on past successes and
            failures to improve future outcomes.
          </p>

          <div className="planning">
            <h3>Data Compilation</h3>
            <h5>
              Compile data in situations where the problems have been identified
              by others
            </h5>
            <div className="custom-control custom-radio">
              <label>
                <input type="radio" name="option" value="1" />
                Struggles to compile data
              </label>
            </div>
            <div className="custom-control custom-radio">
              <label>
                <input type="radio" name="option" value="2" />
                Compiles data effectively and consistently
              </label>
            </div>
            <div className="custom-control custom-radio">
              <label>
                <input type="radio" name="option" value="2" />
                Excels at compiling data effectively and consistently
              </label>
            </div>
          </div>
        </Form>

        <Form>
          <div className="execution">
            <h3>Data Analysis</h3>
            <h5>
              Analyze data in situations where the problems have been identified
              by others
            </h5>
            <div className="custom-control custom-radio">
              <label>
                <input type="radio" name="option" value="1" />
                Struggles to analyze data
              </label>
            </div>
            <div className="custom-control custom-radio">
              <label>
                <input type="radio" name="option" value="2" />
                Analyzes data effectively and consistently
              </label>
            </div>
            <div className="custom-control custom-radio">
              <label>
                <input type="radio" name="option" value="3" />
                Excels at analyzing data effectively and consistently
              </label>
            </div>
          </div>
        </Form>

        <Form>
          <div className="prioritization">
            <h3>Problem Solving</h3>
            <h5>
              Identify the most strategic options to problems that have been
              identified by others
            </h5>
            <div className="custom-control custom-radio">
              <label>
                <input type="radio" name="option" value="1" />
                Struggles to identify the most strategic options
              </label>
            </div>
            <div className="custom-control custom-radio">
              <label>
                <input type="radio" name="option" value="2" />
                identifies the most strategic options effectively and
                consistently
              </label>
            </div>
            <div className="custom-control custom-radio">
              <label>
                <input type="radio" name="option" value="3" />
                Excels at identifying the most strategic options effectively and
                consistently
              </label>
            </div>


            <div className="custom-control custom-radio">
              <label>
                <input type="radio" name="option" value="1" />
                Struggles to identify the most strategic options
              </label>
            </div>
            <div className="custom-control custom-radio">
              <label>
                <input type="radio" name="option" value="2" />
                identifies the most strategic options effectively and
                consistently
              </label>
            </div>
            <div className="custom-control custom-radio">
              <label>
                <input type="radio" name="option" value="3" />
                Excels at identifying the most strategic options effectively and
                consistently
              </label>
            </div>
          </div>
        </Form>

        <Form>
          <div className="improvement">
            <h3>Continual Improvement</h3>
            <h5>
            Reflect on lessons learned from problems that have been identified by others to
                    improve future outcomes
            </h5>
            <div className="custom-control custom-radio">
              <label>
                <input type="radio" name="option" value="1" />
                Struggles to reflect on lessons
                          learned from successes and failures
              </label>
            </div>
            <div className="custom-control custom-radio">
              <label>
                <input type="radio" name="option" value="2" />
                Reflects on lessons learned from successes
                          and failures effectively and consistently
              </label>
            </div>
            <div className="custom-control custom-radio">
              <label>
                <input type="radio" name="option" value="3" />
                Excels at reflecting on lessons learned
                          from successes and failures effectively and consistently
              </label>
            </div>
          </div>
        </Form>

        <Button onClick={this.back}>Back</Button>
        <Button onClick={this.saveAndContinue}>Continue </Button>
        <br/><br/><br/>
      </div>
    );
  }
}

export default CriticalThinking;
