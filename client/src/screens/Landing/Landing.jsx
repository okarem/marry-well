import React from 'react';
import Login from '../../components/LoginForm/Login';
const Landing = () => {
  const [activateForm, setActivateForm] = React.useState(0);
  const clickHandler = () => {
    activateForm === 0 ? setActivateForm(1) : setActivateForm(0);
  };

  return (
    <div>
      <h1>This will be the landing page: </h1>
      <button className="signInBtn" onClick={clickHandler}>
        Sign In
      </button>
      <Login activateForm={activateForm} setActivateForm={setActivateForm} />
    </div>
  );
};

export default Landing;
