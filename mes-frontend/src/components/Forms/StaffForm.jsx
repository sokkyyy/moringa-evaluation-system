import React, { Component } from 'react';


class StaffForm extends Component {
  state = {  }
  render() { 
    return (
      <form className="text-center border border-light p-5" action="#!">
       

        <input
          type="text"
          id="name"
          className="form-control mb-4"
          placeholder="Name"
        />

        <input
          type="email"
          id="defaultSubscriptionFormEmail"
          className="form-control mb-4"
          placeholder="E-mail"
        />

        <select
          className="browser-default custom-select form-control mb-4"
          id="grade"
        >
          <option defaultValue>Grade</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>

        <select
          className="browser-default custom-select form-control mb-4"
          id="department"
        >
          <option defaultValue>Department</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>

        <select className="browser-default custom-select form-control mb-4">
          <option defaultValue>Role</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>

        <button className="btn btn-green btn-block" type="submit">
          Add
        </button>
      </form>
    );
  }
}
 
export default StaffForm;