import axios from 'axios';

const APIURL = 'http://localhost:8000/api/';
const authToken = `Bearer ${localStorage.getItem('access')}`;

export default class DepartmentStaff {
  getStaff(data){
    const url = `${APIURL}departments/`;
    return axios.get(url,{
      headers:{Authorization: authToken}
    });
  }
}
