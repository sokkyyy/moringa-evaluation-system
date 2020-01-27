import React, { Component } from 'react'
import { Accordion, Icon } from 'semantic-ui-react'
import UserService from '../../services/UserService';

const userService = new UserService();


export default class AccordionExampleStandard extends Component {
  state = { activeIndex: 0, image:null }

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
    ).catch((errors) => console.log(errors));

  };

  render() {
    const { activeIndex } = this.state

    return (
      <Accordion>
        <Accordion.Title
          active={activeIndex === 0}
          index={0}
          onClick={this.handleClick}
        >
          <Icon name='dropdown' />
          Change Profile Picture
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 0}>
          <form onSubmit={this.handleImageSubmit}>
            <input type="file"
                    id="image"
                    accept="image/png, image/jpeg"
                    onChange={this.handleImageChange}
                    required
            />
          <button type="submit" class="btn btn-light-green">UPLOAD</button>
          </form>
        </Accordion.Content>

        <Accordion.Title
          active={activeIndex === 1}
          index={1}
          onClick={this.handleClick}
        >
          <Icon name='dropdown' />
          Change Password
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 1}>
          <form>
            <input placeholder='Confirm Previous Password' />
            <input placeholder='New Password' />
            <button type="submit" class="btn btn-light-green">EDIT PASSWORD</button>
          </form>
        </Accordion.Content>

      </Accordion>
    )
  }
}
