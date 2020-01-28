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

}
