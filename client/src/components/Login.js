import React, { useState } from "react";
import { axiosWithAuth } from '../utils/axiosWithAuth'
import MoonLoader from 'react-spinners/MoonLoader'

const Login = props => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route

  const [credentials, setCredentials] = useState({username: "", password: ""});
  const [isLoading, setIsLoading] = useState(false);
  const {username, password} = credentials;

  const handleChange = e => 
    setCredentials({...credentials, [e.target.name]: e.target.value});

    const attemtLogin = form => {
      setIsLoading(!isLoading);
      axiosWithAuth()
      .post('/login', form)
      .then(res => {
        localStorage.setItem('token', res.data.payload);
        setIsLoading(!isLoading);
        props.history.push('/');
      })
      .catch(() => {
        setIsLoading(!isLoading);
        localStorage.removeItem("token");
      })
    }

    const handleSubmit = e => {
      e.preventDefault();
      attemtLogin(credentials);
    };

  if(isLoading)
  return(
    <MoonLoader
      size={100}
      color={"blue"}
      loading={isLoading}
      />
  );


  return (
    <div className="login">
      <h1>Welcome to the Bubble App!</h1>
        <form onSubmit={handleSubmit}>
          <label>Username
            <input
              type='text'
              name='username'
              placeholder='username'
              value={username}
              onChange={handleChange}
            />
            </label>
            <label>password
            <input 
              type='password'
              name='password'
              placeholder='password'
              value={password}
              onChange={handleChange}
            />
            </label>
            <button className='btn-login'>Log In</button>
        </form>
    </div>
  );
};

export default Login;
