import React from "react";
import "../LoginForm/Login.css";

const Register =({activateRegisterForm, setActivateRegisterForm})=>{

  const registerHandler  = () => {        
    setActivateRegisterForm(0);
  };


let popupClass
activateRegisterForm === 0 ? popupClass = 'popUpHidden': popupClass = 'popUpVisible'
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