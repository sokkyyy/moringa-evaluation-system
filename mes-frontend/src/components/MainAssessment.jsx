import React, { Component } from "react";
import Organization from "./Organization";
import Innovation from "./Innovation";
import Communication from "./Communication";
import CriticalThinking from "./CriticalThinking";
import BuildRelationship from "./BuildRelationship";
import Success from "./Success";

class MainAssessment extends Component {
  state = {
    step: 1,
    planning: "",
    execution: "",
    prioritization: "",
    visionSetting: "",
    thinking: "",
    adaptability: "",
    buildInvestment: "",
    effectiveComm: "",
    delivering: "",
    compilation: "",
    analysis: "",
    problemSolving: "",
    improvement: "",
    teamwork: "",
    stakeholder: "",
    conflicts: ""
  };

  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  };

  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  };

  handleChange = input => event => {
    this.setState({ [input]: event.target.value });
  };

  render() {
    const { step } = this.state;
    const {
      planning,
      execution,
      prioritization,
      visionSetting,
      thinking,
      adaptability,
      buildInvestment,
      effectiveComm,
      delivering,
      compilation,
      analysis,
      problemSolving,
      improvement,
      teamwork,
      stakeholder,
      conflicts
    } = this.state;

    const values = {
      planning,
      execution,
      prioritization,
      visionSetting,
      thinking,
      adaptability,
      buildInvestment,
      effectiveComm,
      delivering,
      compilation,
      analysis,
      problemSolving,
      improvement,
      teamwork,
      stakeholder,
      conflicts
    };

    switch (step) {
      case 1:
        return (
          <Organization
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 2:
        return (
          <Innovation
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 3:
        return (
          <Communication
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 4:
        return (
          <CriticalThinking
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 5:
        return (
          <BuildRelationship
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );

      case 6:
        return <Success />;
    }
  }
}

export default MainAssessment;
