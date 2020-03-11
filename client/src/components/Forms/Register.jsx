import React from 'react';
import './Forms.css';

const Register = ({ activateRegisterForm, setActivateRegisterForm }) => {
  const registerHandler = () => {
    setActivateRegisterForm(0);
    document.body.style.overflow = 'visible';
  };

  let popupClass;
  activateRegisterForm === 0 ? (popupClass = 'popUpHidden') : (popupClass = 'popUpVisible');
  return (
    <section className={popupClass}>
      <form className="userForm" action="/auth" method="POST">
      <a>
          <img className="icon-LogIn" src="./img/iconLogIn.png" alt="icon-LogIn"></img>
        <h2>Sign In</h2><br></br><h6>for a free account</h6></a>
        <div className="userName">
          <label>User Name</label>
          <input type="text"></input>
        </div>
        <div className="password">
          <label>Password</label>
          <input type="password"></input>
        </div>
        <div className="confirmedPassword">
          <label>Confirmed password</label>
          <input type="password"></input>
        </div>
        <div className="Register">
          <input type="button" value="Register" />
        </div>
        <div className="closeForm" onClick={registerHandler}>
          <img src="./img/close.png" alt="closeIcon" />
        </div>
      </form>
    </section>
  );
};

export default Register;
