import React, {Component} from "react";
import { Card, Icon, Button, Image, Divider, Segment, Header, Grid, Menu, Container} from 'semantic-ui-react'


export default class MenuBar extends Component {
  state = { activeItem: 'Home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
    
      <Menu secondary size="huge" id="nav-menu">

        <Menu.Item
          name='Home'
          href="/"
          active={activeItem === 'Home'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name='About'
          active={activeItem === 'About'}
          onClick={this.handleItemClick}
        />
        <Menu.Item 
          name='Seniors'
          href="/all/"
          active={activeItem === 'Seniors'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name='Alumni'
          active={activeItem === 'Alumni'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name='Professors'
          active={activeItem === 'Professors'}
          onClick={this.handleItemClick}
        />

      </Menu>
    );
  }
}
