import React, { useState, useEffect } from 'react';
import './Sign.css';
import user from '/person.png';
import email from '/email.png';
import password from '/password.png';
import Header from '../../components/header/Header';

const Registration = () => {
  useEffect(() => {
    document.title = 'Sign In - Your Website Name';
  }, []);
  const [action, setAction] = useState('Login');
  const [name, setName] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [passwordValue, setPasswordValue] = useState('');

  const handleSignUp = () => {
    alert('You have successfully signed up on habit chingu');
  };

  const handleLogin = () => {
    alert('Welcome! You are now logged in');
  };

  const handleSubmit = () => {
    if (action === 'Sign Up') {
      handleSignUp();
    } else {
      handleLogin();
    }
  };

  return (
    <>
      <Header />
      <div className='sign-up '>
        <div className='header'>
          <div className='text'>{action}</div>
          <div className='underline'></div>
        </div>
        <div className='input-container'>
          {action !== 'Login' ? (
            <div className='input'>
              <img src={user} alt="user" />
              <input
                type="text"
                placeholder='Name'
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          ) : null}

          <div className='input'>
            <img src={email} alt="email" />
            <input
              type="email"
              placeholder='Email address'
              value={emailAddress}
              onChange={(e) => setEmailAddress(e.target.value)}
            />
          </div>
          <div className='input'>
            <img src={password} alt="person" />
            <input
              type="password"
              placeholder='Password'
              value={passwordValue}
              onChange={(e) => setPasswordValue(e.target.value)}
            />
          </div>
        </div>
        {action !== 'Sign Up' ? (
          <div className='forgot-password'>
            Forgot Password? <span><a href="#"> Click Here!</a></span>
          </div>
        ) : null}

        <div className='submit-container'>
          <div
            className={action === 'Login' ? 'custom__button gray' : 'custom__button'}
            onClick={handleSubmit}
          >
            {action}
          </div>
          <div
            className={action === 'Sign Up' ? 'custom__button gray' : 'custom__button'}
            onClick={() => {
              if (action === 'Sign Up') {
                setAction('Login');
              } else {
                setAction('Sign Up');
              }
            }}
          >
            {action === 'Sign Up' ? 'Login' : 'Sign Up'}
          </div>
        </div>
      </div>
    </>
  );
};

export default Registration;
