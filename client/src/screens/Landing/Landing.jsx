import React from 'react';
import Login from '../../components/LoginForm/Login';
import Register from '../../components/RegisterForm/Register';
const Landing = () => {
  const [activateLoginForm, setActivateLoginForm] = React.useState(0);
  const [activateRegisterForm, setActivateRegisterForm] = React.useState(0);
  const loginClickHandler = () => {
    console.log(2)
    activateLoginForm === 0 ? setActivateLoginForm(1) : setActivateLoginForm(0);
  };
  const registerClickHandler = () => {
    activateRegisterForm === 0 ? setActivateRegisterForm(1) : setActivateRegisterForm(0);
  };

  return (
    <div>
      <h1>This will be the landing page: </h1>
      <button className="signInButton" onClick={loginClickHandler}>
        Sign In
      </button>
      <Login 
        activateLoginForm={activateLoginForm} 
        setActivateLoginForm={setActivateLoginForm} 
      />
      <button className="registerButton" onClick={registerClickHandler}>
        Register
      </button>
      <Register 
        activateRegisterForm={activateRegisterForm} 
        setActivateRegisterForm={setActivateRegisterForm} 
      />
    </div>
  );
};

export default Landing;
