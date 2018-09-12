import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import Alert from './Components/NewAlert'

let request = axios.create({
  baseURL: 'https://reqres.in/',
  timeout: 10000,
  headers: {'Authorization': ''}
})

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      isLogin: false,
      email: '',
      password: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleSubmit(event){
    event.preventDefault()
    const payload = {
      email: this.state.email, 
      password: this.state.password
    }

    request
      .post('api/login/', payload)
      .then(response => {
        console.log(response)
        this.setState({
          isLogin: true
        })
      })
      .catch(error => {
        console.log(error)
      })

  }

  handleChange(event){
    this.setState({
      [event.target.name]: event.target.value
    })
    console.log(this.state)
  }

  
  render() {
    let info

    this.state.isLogin
    ? info = <Alert/>
    : info = <div></div>

    return (
      <div className="App">
        <div className="container-fluid">
          <Form onSubmit={this.handleSubmit}>
          {info}
            <FormGroup>
              <Label for="email">Email</Label>
              <Input onChange={this.handleChange} type="email" name="email" id="email" placeholder="insert your email" required />
            </FormGroup>
            <FormGroup>
              <Label for="password">Password</Label>
              <Input onChange={this.handleChange} type="password" name="password" id="password" placeholder="*****" required />
            </FormGroup>
            <Button type="submit" color="info" size="lg" block>Submit!</Button>
          </Form>
        </div>
      </div>
    );
  }
}

export default App;
