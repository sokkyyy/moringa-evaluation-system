import React, { useState, useEffect } from 'react';
import user from './user.svg';
import EditProfile from './EditProfile';

const imagelocation = 'http://localhost:8000';


function Sidecard(props){
  const [edit, setEdit] = useState(false);

  const handleEdit = () => {
    changeEdit()
    props.handlePicChange();
  };

  const changeEdit = () => {
    setEdit(!edit);
  }

  return (
    <div className="card testimonial-card profile">
      <div className="card-up red lighten-1"></div>

      <div className="avatar mx-auto white">
        <img src={imagelocation + props.staff.profile_pic} className="rounded-circle" id="user-dp" alt="user-dp" height="100px" width="100px" />
      </div>

      <div class="card-body details">
        <h4 class="card-title text-center" style={{fontSize:17}}>{props.staff.user.first_name} {props.staff.user.last_name}</h4>
        <hr></hr>

        <p>
          <strong>Email: </strong> {props.staff.user.email}
        </p>

        <p>
          <strong>Department: </strong> {props.staff.department.name}
        </p>

        <p>
          <strong>Campus: </strong> Nairobi 
        </p>

        <div>
          <i className="fa fa-cog"></i> <i style={{color:'blue', cursor:'pointer'}} onClick={() => {setEdit(!edit)}} data-target="">Account Settings</i>
          <div>
            {edit ? (
              <div>
                <EditProfile handleEdit={handleEdit} changeEdit={changeEdit} />
              </div>
            ) : ''}
          </div>
        </div>
      </div>
    </div>
  );

}

export default Sidecard
