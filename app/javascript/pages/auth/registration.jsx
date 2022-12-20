/* eslint-disable no-console */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './auth.css';

function Signup() {
  const [Username, setUsername] = useState();
  const [Password, setPassword] = useState();
  const [Email, setEmail] = useState();

  const sendForm = async () => {
    const dataform = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: Username,
        email: Email,
        password: Password,
      }),
    };
    const response = await fetch(
      'http://127.0.0.1:5000/api/v1/users',
      dataform,
    );
    if (response.ok) {
      const userData = await response.json();
      localStorage.setItem('saved_user', JSON.stringify(userData));
      console.log('User Registered', userData);
      window.location.href = '/';
    } else {
      console.log('Error Registering', response);
    }
  };

  return (
    <div className="container">
      <form className="container-form" method="POST" onSubmit={sendForm()}>
        <h2>Sign up</h2>

        <div className="form-input">
          <input
            onChange={async (e) => {
              setUsername(e.target.value);
              e.preventDefault();
            }}
            type="text"
            id="name"
            name="name"
            className=""
            placeholder="Username"
            required
          />
        </div>

        <div className="form-input">
          <input
            onChange={async (e) => {
              setEmail(e.target.value);
              e.preventDefault();
            }}
            type="text"
            id="email"
            name="email"
            className=""
            placeholder="email"
            required
          />
        </div>

        <div className="form-input">
          <input
            onChange={async (e) => {
              setPassword(e.target.value);
              e.preventDefault();
            }}
            type="text"
            id="password"
            name="password"
            className=""
            placeholder="Password"
            required
          />
        </div>

        <p className="form-signup">
          You have an account
          <Link to="/" className="signup">Login</Link>
        </p>

        <div className="">
          <button type="submit" className="form-button">
            Sign up
          </button>
        </div>
      </form>
    </div>
  );
}

export default Signup;
