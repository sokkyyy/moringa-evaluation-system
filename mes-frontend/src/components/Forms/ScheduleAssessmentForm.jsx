import React, { useEffect, useState } from 'react';
import UserService from '../../services/UserService';
import DepartmentStaff from '../../services/Departments';
import Notifications from '../../services/Notifications';

const notifications = new Notifications();
const departmentStaff = new DepartmentStaff()

const userService = new UserService();



function LineManagerUnderlings({staff, clickReceiver}){
  return(
    <select
      className="browser-default custom-select form-control mb-4"
      id="department"
    >
    <option defaultValue>Employee</option>
    {staff.map((details, i) => (
      <option key={details.id} value={details.id} onClick={() => clickReceiver(details.id)}>{details.full_name}</option>
    ))}
    </select>
  )
}

function ScheduleAssessmentForm(props){

  const [staff, setStaff] = useState({});
  const [deptStaff, setDeptStaff] = useState({});
  const [receiver, setReceiver] = useState(null);
  const [deadline, setDeadline] = useState(null);
  const [load, setLoad] = useState(true);


  useEffect(() => {
    getUser();
    getStaffUnderUser();
  },[]);

  const getUser = () => {
    userService.getUser()
    .then(response => {
        setStaff(response.data);
    })
    .catch((errors) =>{
        console.log(errors);
    })
  };

  const getStaffUnderUser = () => {
    departmentStaff.getStaff().then(
      response => {
        setDeptStaff(response.data);
        setLoad(false);
      }
    ).catch(errors => {console.log(errors)});
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {receiver, deadline};
    if(receiver && deadline){
      postNotification(data);
    }
  };

  const postNotification = (data) => {
    notifications.scheduleAssessment(data).then(
      response => {
        console.log(response.data);
      }
    ).catch((errors) => {
      console.log(errors);
    });
  };

  const handleReceiver = (id) => {
    setReceiver(id);
  };

  const handleDateChange = (event) => {
    setDeadline(event.target.value);
  };



  return (

      <form className="text-center border border-light p-5" onSubmit={handleSubmit}>
        {load ? '' : (
        <div>
            <div>
            {(staff.pk === deptStaff.manager.id) ? (
              <select
                className="browser-default custom-select form-control mb-4"
                id="department"
              >
                <option defaultValue>Employee</option>
                <option value={deptStaff.line_manager.id} onClick={()=> handleReceiver(deptStaff.line_manager.id)}>{deptStaff.line_manager.full_name}</option>
              </select>
            ): (
              <LineManagerUnderlings staff={deptStaff.staff} clickReceiver={handleReceiver} />
            )}
            </div>


          <input
            type="date"
            id="defaultSubscriptionFormEmail"
            className="form-control mb-4"
            placeholder="date"
            name='deadline'
            onChange={handleDateChange}
          />

        <button className="btn btn-green btn-block" type="submit" >
            Schedule
          </button>
      </div>
      )}

      </form>
  );
}

export default ScheduleAssessmentForm;
