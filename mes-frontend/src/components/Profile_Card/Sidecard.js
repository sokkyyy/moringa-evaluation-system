import React, { useState, useEffect } from 'react';
import user from './user.svg';
import EditProfile from './EditProfile';

const imagelocation = 'http://localhost:8000';


function Sidecard(props){
  const [edit, setEdit] = useState(false);

  const handleEdit = () => {
    setEdit(!edit);
    props.handlePicChange();
  };

  return (
    <div className="card testimonial-card profile">
      <div className="card-up red lighten-1"></div>

      <div className="avatar mx-auto white">
        <img src={imagelocation + props.staff.profile_pic} id="user-dp" alt="user-dp" heigh="80px" width="80px" />
      </div>

      <div class="card-body">
        <h4 class="card-title text-center" style={{fontSize:17}}>{props.staff.user.first_name} {props.staff.user.last_name}</h4>
        <hr></hr>

        <p>
          <i class="far fa-envelope"></i> {props.staff.user.email}
        </p>

        <p>
          <i class="fas fa-user-tag"></i>  {props.staff.department.name}
        </p>

        <p>
          <i className="fas fa-location-arrow"></i>  Nairobi Campus
        </p>

        <div>
          <i className="fa fa-cog"></i> <i style={{color:'blue', cursor:'pointer'}} onClick={() => {setEdit(!edit)}}>Edit Profile</i>
          <div>
            {edit ? (
              <div>
                <EditProfile handleEdit={handleEdit} />
              </div>
            ) : ''}
          </div>
        </div>
      </div>
    </div>
  );

}

export default Sidecard
