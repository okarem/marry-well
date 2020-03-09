import React from 'react';
import './Login.css';

const Login = ({ activateLoginForm, setActivateLoginForm }) => {
  const clickHandler = () => {
     setActivateLoginForm(0);
  };

  let popupClass

  activateLoginForm === 0 ? popupClass = 'popUpHidden': popupClass = 'popUpVisible';


  return (
    <section className={popupClass}>
      <form className="loginForm" action="/auth" method="POST">
        <div className="userName">
          <label>User Name</label>
          <input type="text"></input>
        </div>
        <div className="password">
          <label>Password</label>
          <input type="password"></input>
        </div>
        <div className="signIn">
          <input type="button" value="Sign In" />
        </div>
        <div className="closeForm" onClick={clickHandler}>
          <img src="./img/close.png" alt="closeIcon" />
        </div>
      </form>
    </section>
  );
};

export default Login;
