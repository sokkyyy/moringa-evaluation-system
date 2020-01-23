import React, { Component } from 'react';

class DepartmentForm extends Component {
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

        <select
          className="browser-default custom-select form-control mb-4"
          id="manager"
        >
          <option defaultValue>Manager</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>

        <select className="browser-default custom-select form-control mb-4">
          <option defaultValue>Line Manager</option>
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
 
export default DepartmentForm;