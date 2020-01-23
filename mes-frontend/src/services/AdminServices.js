import axios from 'axios';

const APIURL = 'http://localhost:8000/api/';
const authToken = `Bearer ${localStorage.getItem('access')}`;

export default class AdminServices {
  getAllStaff(){

    const url = `${APIURL}moringa-staff/`;

    return axios.get(url,{
      headers:{Authorization: authToken}
    });
  }
}
