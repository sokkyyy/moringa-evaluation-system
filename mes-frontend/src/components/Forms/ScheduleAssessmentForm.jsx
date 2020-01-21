import React, { Component } from 'react';

class ScheduleAssessmentForm extends Component {
  state = {  }
  render() { 
    return (
      <form className="text-center border border-light p-5" action="#!">
        <select
          className="browser-default custom-select form-control mb-4"
          id="department"
        >
          <option selected>Employee</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>

        <input
          type="date"
          id="defaultSubscriptionFormEmail"
          className="form-control mb-4"
          placeholder="date"
        />

        <button className="btn btn-green btn-block" type="submit">
          Schedule
        </button>
      </form>
    );
  }
}
 
export default ScheduleAssessmentForm;