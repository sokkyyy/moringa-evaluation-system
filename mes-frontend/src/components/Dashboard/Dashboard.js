import React, { Component } from 'react';
import CountdownTimer from '../Countdown_Timer/CountdownTimer';
import GraphCard from '../Graph_Card/Graphcard';
import Navbar from '../Navbar/Navbar';
import NotificationsDiv from '../Notifications_Div/NotificationsDiv';
import user from './user.svg'
import Sidecard from '../Profile_Card/Sidecard';
import UserService from '../../services/UserService';
import ScheduleAssessmentForm from '../Forms/ScheduleAssessmentForm';




const userService = new UserService();


class Dashboard extends Component {
  constructor(props){
    super(props);

    this.state = {
      staff: {},
      load:true,
    };

  }

  componentDidMount(){
    this.getUser();
  }

  getUser = () => {
    userService.getUser()
    .then(response => {
        if(response.data.system_role === 'super_admin'){
          window.location.href = '/admin/dashboard';
        }else{
          this.setState({staff: response.data});
          console.log(response.data, 'rr');
          this.setState({load:false});
        }
    })
    .catch(() =>{
        this.props.history.push('/');
    })
  }

  handlePicChange = () => {
    this.getUser();
  }

  render() {

    return (
      <div>
        {this.state.load ? (
          " "
        ) : (
          <div>
            <div>
              <Navbar role={this.state.staff.system_role} />
            </div>

            <div className="row container-fluid">
              <div className="col-md-2">
                <h4>Dashboard</h4>
                <hr />
                <Sidecard
                  staff={this.state.staff}
                  handlePicChange={this.handlePicChange}
                />
              </div>
              <div className="col-md-8">

                <GraphCard staff={this.state.staff.pk} />

                <div
                  className="modal fade"
                  id="scheduleassessment"
                  tabIndex="-1"
                  role="dialog"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog" role="document">
                    <div className="modal-content">
                      <div className="modal-header bg-green">
                        <h5 className="modal-title" id="exampleModalLabel">
                          Schedule Assessment
                        </h5>
                        <button
                          type="button"
                          className="close"
                          data-dismiss="modal"
                          aria-label="Close"
                        >
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div className="modal-body">
                        <ScheduleAssessmentForm />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-2 text-center notifications">
                <div className="timer">
                  <CountdownTimer />
                </div>
                <br />
                <hr />

                <NotificationsDiv />


              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Dashboard;
