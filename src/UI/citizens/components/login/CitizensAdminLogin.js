import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import Cookies from 'universal-cookie';
import { API_BASE_URL } from '../../../../config';

import {
  Form,
  Title,
  FlexContainer,
  Label,
  Input,
  SubmitBtn,
  TextField
} from './CitizensAdminLoginStyle';

const errorMsg = 'There has been an error';

const InputComponent = ({ label, inputID, onChange, value }) => (
  <div>
    <Label htmlFor={inputID}>{label}</Label>
    <Input
      id={inputID}
      type="text"
      required
      pattern="[a-zA-Z0-9\s]+"
      onChange={onChange}
      value={value}
    />
  </div>
);

class CitizensAdminLogin extends Component {
  state = {
    userName: '',
    password: '',
    error: null
  };

  handleUserNameInput = e => {
    const userName = e.target.value;
    this.setState({
      userName
    });
  };

  handlePasswordInput = e => {
    const password = e.target.value;
    this.setState({
      password
    });
  };

  handleSubmit = async e => {
    e.preventDefault();

    try {
      const apiResponse = await fetch(`${API_BASE_URL}/admins/login`, {
        method: 'POST',
        credentials: 'include',
        body: JSON.stringify({
          userName: this.state.userName,
          password: this.state.password
        }),
        headers: { 'Content-Type': 'application/json' }
      });

      if (!apiResponse.ok) {
        throw new Error(errorMsg);
      }

      if (apiResponse.status === 200) {
        this.processResponse();
      } else {
        throw new Error(errorMsg);
      }
    } catch (error) {
      this.processError(error);
    }
  };

  processResponse = () => {
    const cookies = new Cookies();
    const isSessionCookie = !!cookies.get('sessionId');

    if (isSessionCookie) {
      this.props.handleAdminLogin();
    } else {
      this.processError(errorMsg);
    }
  };

  processError = error => {
    this.setState({
      error
    });
  };

  render() {
    const { userName, password, error } = this.state;

    return (
      <Form onSubmit={this.handleSubmit}>
        <Title>Admin Login</Title>
        <FlexContainer>
          <InputComponent
            label="Korisničko ime"
            inputID="login_userName"
            onChange={this.handleUserNameInput}
            value={userName}
          />
          <InputComponent
            label="Lozinka"
            inputID="login_password"
            onChange={this.handlePasswordInput}
            value={password}
          />
        </FlexContainer>
        {error ? (
          <TextField marginTop="10px" error>
            Netočno korisničko ime ili lozinka
          </TextField>
        ) : (
          ''
        )}
        <SubmitBtn type="submit">
          <TextField marginTop="0">Prijavi me</TextField>
        </SubmitBtn>
      </Form>
    );
  }
}

export default CitizensAdminLogin;
