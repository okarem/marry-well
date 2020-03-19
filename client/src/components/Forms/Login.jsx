import React from 'react';
import './Forms.css';

const Login = ({ activateLoginForm, setActivateLoginForm }) => {
  const clickHandler = () => {
    setActivateLoginForm(0);
  };

  let popupClass;
  activateLoginForm === 0 ? (popupClass = 'popUpHidden') : (popupClass = 'popUpVisible');

  return (
    <section className={popupClass}>
      <form className="userForm" action="http://localhost:5000/authenticate" method="POST">
        <div className="icon-logIn">
          <img src="./img/iconLogIn.png" alt="closeIcon" />
        </div>
        <div className="userName">
          <label>اسم المستخدم</label>
          <input type="text" name="username"></input>
        </div>
        <div className="password">
          <label>كلمة المرور</label>
          <input type="password" name="password"></input>
        </div>
        <div className="LogIn">
          <input type="submit" value="الدخول" />
        </div>
        <div className="closeForm" onClick={clickHandler}>
          <img src="./img/close.png" alt="closeIcon" />
        </div>
      </form>
    </section>
  );
};

export default Login;
