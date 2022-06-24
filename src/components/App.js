import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import Container from 'react-bootstrap/container';
import SimpleSlider from '../container/slider';
import Profile from '../container/profile';


class AppComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currentTab: 'slider'
    }
  }

  componentDidMount() {
        this.props.fetchProfile();
}
  render() {
    return (
      <div>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
          <Navbar.Brand href="#" onClick={() => this.setState({currentTab: 'slider'})}>my Github profile</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
            </Nav>
            <Nav>
              <Nav.Link eventKey={1} href="#" onClick={() => this.setState({currentTab: 'slider'})}>Slider</Nav.Link>
              <Nav.Link eventKey={2} href="#" onClick={() => this.setState({currentTab: 'profile'})}>
                Profile
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
          </Container>
        </Navbar>
        <div>
          {this.state.currentTab==='slider' ? <SimpleSlider/> : false}
          {this.state.currentTab==='profile' ? <Profile/> : false}
        </div>
      </div>

    );
  }
  
}

export default AppComponent;
