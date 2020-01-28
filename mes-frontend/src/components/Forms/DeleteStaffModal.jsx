import React, { Component } from 'react';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';
import { makeStyles, useTheme } from '@material-ui/core/styles';


const useStyles = makeStyles(()=>({
  details: {
    fontSize:15,
    fontWeight:'bold',
  }
}));
function DeleteStaffModal({modal, staff,toggleDelModal, deleteStaff, deleteStaffMember}){
  const classes = useStyles();
  const staffDetails = deleteStaff.map((staff,i)=>{
      return (
      <div key={staff.pk}>
        <div><span className={classes.details}>Full Name: </span> {staff.user.first_name} {staff.user.last_name}</div>
        <div><span className={classes.details}>Username:  </span> {staff.user.username}</div>
        <div><span className={classes.details}>Email: </span> {staff.user.email}</div>
        <div><span className={classes.details}>Department: </span> {staff.department.name}</div>
        <div><span className={classes.details}>Job Grade: </span> {staff.job_grade}</div>
        <div><span className={classes.details}>System Role: </span> {staff.system_role}</div>
      </div>
    );


  });



  return (
    <MDBContainer>
      <MDBModal isOpen={modal} toggle={toggleDelModal}>
        <MDBModalHeader toggle={toggleDelModal} style={{paddingLeft:40}}>DELETE STAFF</MDBModalHeader>
        <MDBModalBody>
          {staffDetails}
        </MDBModalBody>
        <MDBModalFooter>
          <MDBBtn color="red" onClick={deleteStaffMember}><i className="fa fa-trash mr-2" style={{fontSize:20}} aria-hidden="true"></i></MDBBtn>
        </MDBModalFooter>
      </MDBModal>
    </MDBContainer>
    );
}

export default DeleteStaffModal;
