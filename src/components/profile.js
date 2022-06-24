import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userInfo : this.props.profile,
            editing : false,
            error : false
        }
    }
    updateValue(type, event) {
        var userInfoCopy = JSON.parse(JSON.stringify(this.state.userInfo));
        userInfoCopy[type] = event.target.value;
        this.setState({
            userInfo: userInfoCopy
        })
    }
    
    componentWillReceiveProps(nextProps) {
        this.setState({
            userInfo: nextProps.profile
        })
    }
    saveProfile() {
        var error = false
        var propertiesToCheck = ['name', 'bio', 'location', 'company']

        propertiesToCheck.forEach(function(term){
                if(this.state.userInfo[term]===''){
                    error = true;
                }
            }.bind(this));
        if(!error) {
            //save profile
            this.props.saveProfile(this.state.userInfo)
        }
        this.setState({error})
    }
    render() {
      return (
          <div className='container mt-3'>
              <Button variant="primary" onClick={()=>{this.setState({editing : !this.state.editing})}}>{this.state.editing ? 'Close' : 'Edit'}</Button>
              <hr />
              {this.state.editing 
                ?
                    <Form.Group className="mt-3" controlId="formBasicEmail">
                        <Form.Label><b>Name</b></Form.Label>
                        <Form.Control type="text" className={this.state.error&&this.state.userInfo.name==='' ? 'red-margin' : ''} value={this.state.userInfo.name} placeholder="Enter name here!" onChange={this.updateValue.bind(this, 'name')} />
                        <Form.Label><b>Bio</b></Form.Label>
                        <Form.Control type="text" className={this.state.error&&this.state.userInfo.bio==='' ? 'red-margin' : ''} value={this.state.userInfo.bio}  onChange={this.updateValue.bind(this, 'bio')} />
                        <Form.Label><b>Location</b></Form.Label>
                        <Form.Control type="text" className={this.state.error&&this.state.userInfo.location==='' ? 'red-margin' : ''} value={this.state.userInfo.location}  onChange={this.updateValue.bind(this, 'location')} />
                        <Form.Label for="location"><b>Company</b></Form.Label>
                        <Form.Control type="text" className={this.state.error&&this.state.userInfo.company==='' ? 'red-margin' : ''} value={this.state.userInfo.company} name="location" onChange={this.updateValue.bind(this, 'company')} />
                        <Button variant="success" className='mt-3' onClick={this.saveProfile.bind(this)}>Save</Button>
                    </Form.Group>
                :
                <div>
                <p><strong>Name: </strong> {this.state.userInfo.name} </p>
                <p><strong>Bio: </strong> {this.state.userInfo.bio} </p>
                <p><strong>Location: </strong> {this.state.userInfo.location} </p>
                <p><strong>Company: </strong> {this.state.userInfo.company} </p>
                </div>
            }
            
          </div>
      ) ;
    }
  }

export default Profile;
