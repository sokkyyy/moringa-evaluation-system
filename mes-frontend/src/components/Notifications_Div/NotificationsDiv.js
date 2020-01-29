import React, { useEffect, useState } from 'react';
import Notifications from '../../services/Notifications';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';

const notificationService = new Notifications()

function Nots(props){
  return (
    <div>
      {props.notifications.map((not, i) => (
        <div className={(not.status === 'unread') ? "single-notification-unread" : 'single-notification' } >
          <p><span>From:</span> {not.sender.full_name}</p>
          <p>You have an Evaluation Scheduled for {not.deadline}.</p>
          {(not.status === 'unread') ? (
            <p>
              <Tooltip title="Mark as Read" >
                <IconButton aria-label="check" onClick={() => props.handleReadNotification(not.pk)}>
                  <CheckCircleIcon color='inherit' />
                </IconButton>
              </Tooltip>
            </p>
          ): ''}
        </div>
      ))}
    </div>
  )
}

function NotificationsDiv(props){
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    getUserNotifications();
  },[]);

  const getUserNotifications = () => {
    notificationService.getUserNotifications().then(
      response => {
        console.log(response.data);
        setNotifications(response.data);
      }
    ).catch(errors => console.log(errors));
  };

  const handleReadNotification = (id) => {
    const not = {'id':id};
    notificationService.readNotification(not).then(
      response => {
        console.log(response.data);
        getUserNotifications();
      }
    ).catch((errors) => {
      console.log(errors);
    });
  };




  const unread = notifications.filter((not, i) => {
    if(not.status === 'unread'){
      return not;
    }
  });

  return (


    <div className="notifications">
      <strong className="text-center">
        <h6>
          Notifications <i className="far fa-bell notification_count"><span style={{marginLeft:5, fontWeight:'bold'}}>{unread.length}</span></i>
        </h6>
      </strong>
      <hr />
        <div className="d-md-flex">
          <div className="overflow-auto p-3 mb-3 mb-md-0 mr-md-3">
            <Nots handleReadNotification={handleReadNotification} notifications={notifications} />
          </div>
        </div>
    </div>

  );

}

export default NotificationsDiv;
