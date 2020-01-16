import React from 'react';
import user from './user.svg'

const Sidecard = () => {
  return (
    <div class="card testimonial-card">
      <div class="card-up red lighten-1"></div>

      <div class="avatar mx-auto white">
        <img src={user} id="user-dp" alt="user-dp" heigh="80px" width="80px" />
      </div>

      <div class="card-body">
        <h4 class="card-title text-center">Anna Doe</h4>
        <hr></hr>

        <p>
          <i class="far fa-envelope"></i>  anna@email.com
        </p>

        <p>
          <i class="fas fa-user-tag"></i>  HR Manager
        </p>

        <p>
          <i class="fas fa-location-arrow"></i>  Nairobi Campus
        </p>

        <p>
          <i class="fa fa-cog"></i> <a href="">Edit Profile</a>
        </p>
      </div>
    </div>
  );
   


}

export default Sidecard