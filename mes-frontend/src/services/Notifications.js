import axios from 'axios';

const APIURL = 'http://localhost:8000/api/';
const authToken = `Bearer ${localStorage.getItem('access')}`;

export default class Notifications {
  scheduleAssessment(data){
    const url = `${APIURL}schedule/assessment/`;

    return axios.post(url,data,{
      headers:{Authorization: authToken}
    });
  }

  getUserNotifications(){
    const url = `${APIURL}user/notifications/`;

    return axios.get(url,{
      headers:{Authorization: authToken}
    });
  }
  readNotification(data){
    const url = `${APIURL}read/notification/`;
    return axios.post(url, data, {
      headers:{Authorization: authToken}
    });
  }
}
