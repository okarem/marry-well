import React from 'react';
import './Login.css';

const Login = ({ activateForm, setActivateForm }) => {
  const clickHandler = () => {
    setActivateForm(0);
  };

  React.useEffect(() => {
    activateForm === 0
      ? (document.querySelector('.popUpVisible').className = 'popUpHidden')
      : (document.querySelector('.popUpHidden').className = 'popUpVisible');
  }, [activateForm]);

  return (
    <section className="popUpHidden popUpVisible">
      <form className="loginForm" action="/auth" method="PSOT">
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
