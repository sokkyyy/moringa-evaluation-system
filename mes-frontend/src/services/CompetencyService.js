import axios from 'axios';

const APIURL = 'http://localhost:8000/api/';
const authToken = `Bearer ${localStorage.getItem('access')}`;

export default class CompetencyService {
  orgTest(data){
    const url = `${APIURL}post/results/`;
    return axios.post(url,data,{
      headers:{Authorization: authToken}
    });
  }
}
