import axios from 'axios';

const APIURL = 'http://localhost:8000/api/';
const authToken = `Bearer ${localStorage.getItem('access')}`

export default class UserService{
    loginUser(user){
        const url = `${APIURL}token_auth/`;
        return axios.post(url,user);
    }
    getUser(){
        const url = `${APIURL}current_user/`;
        return axios.get(url,{
            headers:{Authorization: authToken}
        });
    }

}
