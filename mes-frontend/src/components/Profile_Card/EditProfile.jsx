import React, { Component } from 'react'
import { Accordion, Icon } from 'semantic-ui-react'
import UserService from '../../services/UserService';
import './EditProfile.css';


const userService = new UserService();


export default class EditProfile extends Component {
  state = { activeIndex: 0, image:null, confirm_password:'', new_password:'', successPass: false, invalidPass:false }

  handleClick = (e, titleProps) => {
    const { index } = titleProps
    const { activeIndex } = this.state
    const newIndex = activeIndex === index ? -1 : index

    this.setState({ activeIndex: newIndex })
  }

  handleImageChange = (e) => {
    this.setState({
      image: e.target.files[0]
    })
    console.log(e.target.files[0]);
  };

  handleImageSubmit = (e) => {
    e.preventDefault();

    let form_data = new FormData();
    form_data.append('image', this.state.image, this.state.image.name);
    userService.changeProfilePic(form_data).then(
      response =>{
        console.log(response.data);
        this.props.handleEdit();
      }
    ).catch((errors) => {
        console.log(errors)
    });

  };

  handlePasswordChange = (event) => {
    const value = event.target.value;
    this.setState({
      [event.target.name]: value
    });
  }

  handlePasswordSubmit = (event) => {
    event.preventDefault();
    const {confirm_password, new_password } = this.state;
    const data = {confirm_password, new_password }
    this.submitPasswordChange(data);
  }

  submitPasswordChange = (data) => {

    userService.changePassword(data).then(
      response => {
        console.log(response.data)
        this.successPassChange()
      }
    ).catch(errors => {
      console.log(errors)
      this.invalidPassChange();
    });
  }

  successPassChange = () => {
      this.setState({
        successPass:true
      });

      setTimeout(() => {
        this.setState({
          successPass:false
        });
        this.props.changeEdit();
      }, 2000);
  }

  invalidPassChange = () => {
      this.setState({
        invalidPass:true
      });

      setTimeout(() => {
        this.setState({
          invalidPass:false
        });
      }, 2000);
  }


  render() {
    const { activeIndex, successPass, invalidPass } = this.state;

    return (
      <Accordion>
        {successPass ? <div className="successPass">PASSWORD CHANGED</div> : ""}

        {invalidPass ? (
          <div className="invalidPass">INVALID CREDENTIALS</div>
        ) : (
          ""
        )}

        <Accordion.Title
          active={activeIndex === 1}
          index={1}
          onClick={this.handleClick}
        >
          <Icon name="dropdown" />
          Change Profile Picture
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 1}>
          <form onSubmit={this.handleImageSubmit}>
            <input
              type="file"
              id="image"
              accept="image/png, image/jpeg"
              onChange={this.handleImageChange}
              required
            />
            <button type="submit" class="btn btn-light-green">
              UPLOAD
            </button>
          </form>
        </Accordion.Content>

        <Accordion.Title
          active={activeIndex === 2}
          index={2}
          onClick={this.handleClick}
        >
          <Icon name="dropdown" />
          Change Password
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 2}>
          <form onSubmit={this.handlePasswordSubmit}>
            <input
              placeholder="Confirm Previous Password"
              name="confirm_password"
              onChange={this.handlePasswordChange}
              value={this.state.confirm_password}
            />
            <input
              placeholder="New Password"
              name="new_password"
              onChange={this.handlePasswordChange}
              value={this.state.new_password}
            />
            <button type="submit" class="btn btn-light-green">
              EDIT PASSWORD
            </button>
          </form>
        </Accordion.Content>
      </Accordion>
    );
  }
}
