import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { render } from "react-dom";
import Footer from '../Footer/Footer';
import UserService from '../../services/UserService';



const userService = new UserService();



class Landing extends Component {
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
    render() {
        return (
<div>
      <section className="login-block">
    <div className="container">
	<div className="row">
		<div className="col-md-4 login-sec">
		    <h2 className="text-center">Login</h2>
		    <form className="login-form" onSubmit={this.handleSubmit}>
          {this.state.errors ? (<div>Invalid Credentials</div>):'' }
  <div className="form-group">
    <label for="exampleInputEmail1" className="text-uppercase">Email</label>
    <input type="text" className="form-control" placeholder="example@gmail.com" name='username' value={this.state.username} onChange={this.handleChange} />

  </div>
  <div className="form-group">
    <label for="exampleInputPassword1" className="tLoginext-uppercase">Password</label>
    <input type="password" className="form-control" name='password' value={this.state.password} onChange={this.handleChange} placeholder="......" />
  </div>


    <div className="form-check">
    <label className="form-check-label">
      <input type="checkbox" className="form-check-input"/>
      <small>Remember Me</small>
    </label>
    <button type="submit" className="btn btn-login float-right" style={{background: '#ff8900',color: '#fff', fontSize: '13px'}}>Login</button>
  </div>

</form>
<div className="copy-text">Created with <i className="fa fa-heart"></i>by Origins</div>
		</div>
		 <div className="col-md-8 banner-sec">
	</div>
</div>
</div>
      </section>
      </div>
         );
    }
}

export default Landing;
