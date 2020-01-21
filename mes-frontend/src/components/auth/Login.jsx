import React, {Component} from 'react';
import UserService from '../../services/UserService';
import { createBrowserHistory } from 'history';

const history = createBrowserHistory(); //REFACTOR FOR lOGIN PAGE

const userService = new UserService();

export default class Login extends Component{
    constructor(props){
        super(props);
        this.state = {
            username:'',
            password:'',
            errors:false,
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event){
        const value = event.target.value;
        this.setState({
            [event.target.name]:value,
        });

    }
    handleSubmit(event){
        event.preventDefault();

        userService.loginUser(this.state)
        .then(response =>{
            console.log(response.data);
            localStorage.setItem('access', response.data.access);
            localStorage.setItem('refresh', response.data.refresh);
            // this.props.history.push('/dashboard'); //CHANGE TO DASHBOARD
            window.location.href = '/dashboard';
        })
        .catch((errors) => {
            console.log(errors);
            this.setState({errors:true});
        })
    }

    render(){
        return(
            <div>

                    <form onSubmit={this.handleSubmit} className="md-form" style={{color: '#757575'}}>
                        {this.state.errors ? (<div>Invalid Credentials</div>):(<div>Login</div>) }
                        <input type="text" id="materialLoginFormEmail" name='username' value={this.state.username} onChange={this.handleChange} className="form-control"/>
                        <label for="materialLoginFormEmail">E-mail or Username</label>


                        <input type="password" id="materialLoginFormPassword" name='password' value={this.state.password} onChange={this.handleChange} className="form-control"/>
                          <label for="materialLoginFormPassword">Password</label>


                          <div className="d-flex align-items-center justify-content-between">
                              <div className="form-check">
                                  <input type="checkbox" className="form-check-input" id="materialLoginFormRemember"/>
                                  <label className="form-check-label" for="materialLoginFormRemember">Remember me</label>
                              </div>
                              <div>
                                  <a href="">Forgot password?</a>
                              </div>
                          </div>


                          <button className="btn btn-outline-info btn-rounded btn-block my-4 waves-effect z-depth-0" type="submit">Sign in</button>


                  </form>
            </div>
        )
    };
}
