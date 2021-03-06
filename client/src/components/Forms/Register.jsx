import React from 'react';
import './Forms.css';

const Register = ({ activateRegisterForm, setActivateRegisterForm }) => {
  const [password, setPassword] = React.useState(null);
  const [ConfirmedPassword, setConfirmedPassword] = React.useState(null);
  const [userName, setUserName] = React.useState(null);

  const passwordListener = e => {
    setPassword(e.target.value);
  };

  const confPassListener = e => {
    setConfirmedPassword(e.target.value);
  };

  const userNameListener = e => {
    setUserName(e.target.value);
  };

  const confirm = event => {
    if (!password) {
      event.preventDefault();
      alert('password is empty');
      return;
    }
    if (!ConfirmedPassword) {
      event.preventDefault();
      alert('confirmed password is empty');
      return;
    }
    if (!userName) {
      event.preventDefault();
      alert('user name is empty');
      return;
    }
    if (password !== ConfirmedPassword) {
      event.preventDefault();
      alert('confirmed password does not match the password');
    }
  };

  const registerHandler = () => {
    setActivateRegisterForm(0);
  };

  let popupClass;
  activateRegisterForm === 0 ? (popupClass = 'popUpHidden') : (popupClass = 'popUpVisible');
  return (
    <section className={popupClass}>
      <form className="userForm" action="http://localhost:5000/createUser" method="POST" onSubmit={confirm}>
        <div className="icon-logIn">
          <img src="./img/iconLogIn.png" alt="closeIcon" />
        </div>
        <div className="userName">
          <label>اسم المستخدم</label>
          <input type="text" name="username" onChange={userNameListener}></input>
        </div>
        <div className="password">
          <label>كلمة المرور</label>
          <input type="password" name="password" onChange={passwordListener}></input>
        </div>
        <div className="confirmedPassword">
          <label> أدخل كلمة المرور مجدداً</label>
          <input type="password" name="confirmedPassword" onChange={confPassListener}></input>
        </div>
        <div className="Register">
          <input type="submit" value="تسجيل الدخول" />
        </div>
        <div className="closeForm" onClick={registerHandler}>
          <img src="./img/close.png" alt="closeIcon" />
        </div>
      </form>
    </section>
  );
};

export default Register;
