import axios from 'axios';

const APIURL = 'http://localhost:8000/api/';
const authToken = `Bearer ${localStorage.getItem('access')}`;

export default class CompetencyService {
  orgTest(data){ //SELF TEST
    const url = `${APIURL}post/results/`;
    return axios.post(url,data,{
      headers:{Authorization: authToken}
    });
  }

  manTest(data){
    const url = `${APIURL}post/manager/results/`;
    return axios.post(url,data,{
      headers:{Authorization: authToken}
    });
  }

  getUserAssessments(){
    const url = `${APIURL}final/results/`;
    return axios.get(url,{
      headers:{Authorization: authToken}
    });
  }
}
