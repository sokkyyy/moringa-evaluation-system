import React, {Component} from 'react';
import UserService from '../../services/UserService';

const userService = new UserService();

export default class Login extends Component{
    constructor(props){
        super(props);
        this.state = {
            username:'',
            password:'',
            errors:false,
        }
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
            this.props.history.push('/home'); //CHANGE TO DASHBOARD
        })
        .catch((errors) => {
            console.log(errors);
            this.setState({errors:true});
        })
    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                  {this.state.errors ? (<div>Invalid Credentials</div>):(<div>Login</div>) }
                    <label>Email or Username:</label>
                    <input type='text' name='username' value={this.state.username} onChange={this.handleChange} />


                    <label>Password:</label>
                    <input type='text' name='password' value={this.state.password} onChange={this.handleChange} />

                    <button type='submit'>Login</button>
                </form>
            </div>
        )
    };
}
