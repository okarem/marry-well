import React from "react";
import "../LoginForm/Login.css";



const Register =({activateRegisterForm, setActivateRegisterForm})=>{

  const [password, setPassword]= React.useState(null);
  const [ConfirmedPassword, setConfirmedPassword]= React.useState(null);
  const confirm = (event) => {
    console.log("inside confirm");
    //event.preventDefault();
    //alert("inside alert");
  }

  const registerHandler  = () => {        
    setActivateRegisterForm(0);
  };


let popupClass
activateRegisterForm === 0 ? popupClass = 'popUpHidden': popupClass = 'popUpVisible'
    return (
<form className={popupClass}>
      <form className="loginForm" action="http://localhost:4000/createUser" method="POST" onSubmit={confirm}>
        <div className="userName">
          <label>User Name</label>
          <input type="text" name='username'></input>
        </div>
        <div className="password">
          <label>Password</label>
          <input type="password" name='password'></input>
        </div>
        <div className="confirmedPassword">
          <label>Confirmed password</label>
          <input type="password" name='confirmedPassword'></input>
        </div>
        <div className="Register">
          <input type="submit" value="Register" />
        </div>
        <div className="closeForm" onClick={registerHandler}>
          <img src="./img/close.png" alt="closeIcon" />
        </div>
      </form>
      </form>
  );
};


export default Register;