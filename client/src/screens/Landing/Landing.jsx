import React from 'react';
import Login from '../../components/LoginForm/Login';
const Landing = () => {
  return (
    <div>
      <h1>This will be the landing page: </h1>
      <button className="signInBtn">Sign In</button>
      <Login />
    </div>
  );
};

export default Landing;
