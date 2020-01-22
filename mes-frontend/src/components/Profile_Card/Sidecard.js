import React from 'react';
import user from './user.svg'

function Sidecard(props){
  return (
    <div class="card testimonial-card profile">
      <div class="card-up red lighten-1"></div>

      <div class="avatar mx-auto white">
        <img src={user} id="user-dp" alt="user-dp" heigh="80px" width="80px" />
      </div>

      <div class="card-body">
        <h4 class="card-title" style={{fontSize:17}}>{props.staff.user.first_name} {props.staff.user.last_name}</h4>
        <hr></hr>

        <p>
          <i class="far fa-envelope"></i> {props.staff.user.email}
        </p>

        <p>
          <i class="fas fa-user-tag"></i>  {props.staff.department.name}
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
