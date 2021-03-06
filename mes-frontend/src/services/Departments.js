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


  getDeptNames(){

    const url = `${APIURL}dept_names/`;

    return axios.get(url,{
      headers:{Authorization: authToken}
    });
  }

  allDepartments(){
    const url = `${APIURL}all/departments/`;

    return axios.get(url,{
      headers:{Authorization: authToken}
    });
  }

  addDepartment(data){
    const url = `${APIURL}add/department/`;

    return axios.post(url, data, {
      headers:{Authorization: authToken}
    })
  }
}
