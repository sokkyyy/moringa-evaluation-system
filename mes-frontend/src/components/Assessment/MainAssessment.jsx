import React, { Component } from "react";
import Organization from "./Organization";
import Innovation from "./Innovation";
import Communication from "./Communication";
import CriticalThinking from "./CriticalThinking";
import BuildRelationship from "./BuildRelationship";
import Success from "./Success";
import UserService from '../../services/UserService';
import Navbar from '../Navbar/Navbar';
import CompetencyService from '../../services/CompetencyService';
import ProgressBar from "./ProgressBar/ProgressBar";
import StartAssessment from "./StartAssessment";


const userService = new UserService();
const compService = new CompetencyService();



class MainAssessment extends Component {
  constructor(props){
    super(props);

    this.state = {
      load:true,
      staff:{},
      type: 'self',

      step: 1,

      organization:{
        planning:0,
        execution:0,
        prioritization:0,
        score:0,
      },
      innovation: {
        vision_setting:0,
        thinking:0,
        adaptability:0,
        score: 0,
      },
      interpersonal_communication: {
        investment_building: 0,
        effective_communication: 0,
        delivery:0,
        score: 0,
      },

      critical_thinking:{
        data_compilation:0,
        data_analysis:0,
        problem_solving:0,
        continual_improvement:0,
        score:0,
      },
      relationships : {
        team_work: 0,
        stakeholder_management:0,
        conflict_management:0,
        score:0,
      },

  };
}

  componentDidMount(){
    userService.getUser()
    .then(response => {
        if(response.data.system_role === 'super_admin'){
          window.location.href = '/admin/dashboard';
        }else{
          this.setState({staff: response.data});
          this.setState({load:false});
          // console.log(response.data.system_role);
        }
    })
    .catch(() =>{
        this.props.history.push('/login');
    })
  }


  styles = {
    marginTop: 30,
    paddingBottom: 30
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

  handleChange = (event)=> {
    const value = event.target.value;
    const rate_competency = (event.target.name).split('.');
    const competency = this.state[rate_competency[0]];

    competency[rate_competency[1]] = +value; //convert to number

    this.setState({
      [rate_competency[0]]: competency,
    });
  };

  handleSubmit = (event) => {
    this.calculateScore();
  };

  calculateScore = () => {
    let {organization, innovation, interpersonal_communication, critical_thinking, relationships } = this.state;

    const orgScore = (((this.state.organization.planning + this.state.organization.execution + this.state.organization.prioritization)/9)*100).toFixed(2);
    organization.score = orgScore;
    this.setState({organization:organization});

    const innScore = (((this.state.innovation.vision_setting + this.state.innovation.thinking + this.state.innovation.adaptability)/9)*100).toFixed(2);
    innovation.score = innScore;
    this.setState({innovation: innovation});

    const icScore =  (((this.state.interpersonal_communication.investment_building + this.state.interpersonal_communication.effective_communication + this.state.interpersonal_communication.delivery)/9)*100).toFixed(2);
    interpersonal_communication.score = icScore;
    this.setState({interpersonal_communication:interpersonal_communication});

    const ctScore = (((this.state.critical_thinking.data_compilation + this.state.critical_thinking.data_analysis + this.state.critical_thinking.problem_solving + this.state.critical_thinking.continual_improvement)/12)*100).toFixed(2);
    critical_thinking.score = ctScore;
    this.setState({critical_thinking:critical_thinking});

    const relScore = (((this.state.relationships.team_work + this.state.relationships.stakeholder_management + this.state.relationships.conflict_management)/9)*100).toFixed(2);
    relationships.score = relScore;
    this.setState({relationships:relationships});

    console.log(this.state);
    this.submitOrganization();
  };

  submitOrganization = () => {
    let {organization, innovation, interpersonal_communication, critical_thinking, relationships } = this.state;
    const testResults = {organization, innovation, interpersonal_communication, critical_thinking, relationships };
    compService.orgTest(testResults)
    .then(response =>{
      console.log(response.data);
    })
    .catch(errors => console.log(errors));
  };

  renderSwitch(step) {


    switch (step) {
      case 0:
        return (
          <StartAssessment
            nextStep={this.nextStep}
            handleChange={this.handleChange}
          />
        );

      case 1:
        return (
          <Organization
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
          />
        );

      case 2:
        return (
          <Innovation
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
          />
        );

      case 3:
        return (
          <Communication
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
          />
        );

      case 4:
        return (
          <CriticalThinking
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
          />
        );

      case 5:
        return (
          <BuildRelationship
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
          />
        );

      case 6:
        return <Success />;
    }
  }

  render() {
    const { step, load } = this.state;
    return (
      <div>
        <Navbar role={this.state.staff.system_role} />

        <div className="card" style={this.styles}>
        {load ? '' : (
          <div>
            <ProgressBar />
            {this.renderSwitch(step)}
          </div>
        )}
        </div>
      </div>
    );
  }
}

export default MainAssessment;
