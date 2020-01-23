import React from 'react';
import user from './user.svg'

const Sidecard = () => {
  return (
    <div className="card testimonial-card profile">
      <div className="card-up red lighten-1"></div>

      <div className="avatar mx-auto white">
        <img src={user} id="user-dp" alt="user-dp" heigh="80px" width="80px" />
      </div>

      <div className="card-body">
        <h4 className="card-title text-center">Anna Doe</h4>
        <hr></hr>

        <p>
          <i className="far fa-envelope"></i>  anna@email.com
        </p>

        <p>
          <i className="fas fa-user-tag"></i>  HR Manager
        </p>

        <p>
          <i className="fas fa-location-arrow"></i>  Nairobi Campus
        </p>

        <p>
          <i className="fa fa-cog"></i> <a href="">Edit Profile</a>
        </p>
      </div>
    </div>
  );
}

export default Sidecard