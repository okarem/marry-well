import React from 'react';
import './Forms.css';

const Login = ({ activateLoginForm, setActivateLoginForm }) => {
  const clickHandler = () => {
    setActivateLoginForm(0);
    document.body.style.overflow = 'visible';
  };

  let popupClass;
  activateLoginForm === 0 ? (popupClass = 'popUpHidden') : (popupClass = 'popUpVisible');

  return (
    <section className={popupClass}>
      <form className="userForm" action="/auth" method="POST">
      <a>
          <img className="icon-LogIn" src="./img/iconLogIn.png" alt="icon-LogIn"></img>
        <h2>LogIn</h2></a>
        <div className="userName">
          <label>User Name</label>
          <input type="text"></input>
        </div>
        <div className="password">
          <label>Password</label>
          <input type="password"></input>
        </div>
        <div className="LogIn">
          <input type="button" value="LogIn" />
        </div>
        <div className="closeForm" onClick={clickHandler}>
          <img src="./img/close.png" alt="closeIcon" />
        </div>
      </form>
    </section>
  );
};

export default Login;
