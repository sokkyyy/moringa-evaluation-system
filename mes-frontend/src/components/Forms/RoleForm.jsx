import React, { Component } from 'react';

class RoleForm extends Component {
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

        <button className="btn btn-green btn-block" type="submit">
          Add
        </button>
      </form>
    );
  }
}
 
export default RoleForm;