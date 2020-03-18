import React from 'react';
import './Forms.css';
import Axios from 'axios';

const Login = ({ activateLoginForm, setActivateLoginForm }) => {
  const [userName, setUserName] = React.useState('');
  const [password, setPassword] = React.useState('');
  const clickHandler = () => {
    setActivateLoginForm(0);
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const { data } = await Axios.post(`${process.env.REACT_APP_API_URL}/authenticate`, { username: userName, password });
      setActivateLoginForm(0);
      setUserName('');
      setPassword('');
    } catch (error) {
      console.log(error);
    }
  };

  let popupClass;
  activateLoginForm === 0 ? (popupClass = 'popUpHidden') : (popupClass = 'popUpVisible');

  return (
    <section className={popupClass}>
      <form className="userForm" onSubmit={handleSubmit} /*action="http://localhost:5000/authenticate" method="POST"*/>
        <div className="userName">
          <label>اسم المستخدم</label>
          <input type="text" name="username" onChange={({ target }) => setUserName(target.value)}></input>
        </div>
        <div className="password">
          <label>كلمة المرور</label>
          <input type="password" name="password" onChange={({ target }) => setPassword(target.value)}></input>
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
