import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './auth.css';

function Login() {
  const [Username, setUsername] = useState();
  const [Password, setPassword] = useState();

  const sendForm = async () => {
    const dataform = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: Username,
        password: Password,
      }),
    };

    const response = await fetch(
      'http://127.0.0.1:5000/api/v1/auth/login',
      dataform,
    );
    if (response.ok) {
      console.log('LoggedIN', response);
      const userData = await response.json();
      localStorage.setItem('current_user', JSON.stringify(userData));
        <Link to="/signup" />;
        window.location.href = '/car';
    } else {
      console.log('error credentials');
    }
  };

  return (
    <div className="container">
      <form className="container-form" method="POST" onSubmit={sendForm()}>
        <h2>LOGIN</h2>

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
          Don&apos;t have an account yet?
          <Link to="/signup" className="signup">Sign Up</Link>
        </p>

        <div className="">
          <button type="submit" className="form-button">
            Login
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
