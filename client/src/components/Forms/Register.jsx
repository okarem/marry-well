import React from "react";
import "./Forms.css";

const Register =({activateRegisterForm, setActivateRegisterForm})=>{


  const [password, setPassword]= React.useState(null);
  const [ConfirmedPassword, setConfirmedPassword]= React.useState(null);
  const [userName,setUserName] = React.useState(null);

const passwordListener = e =>{
  setPassword(e.target.value);
}

const confPassListener = e =>{
  setConfirmedPassword(e.target.value);
}


const userNameListener = e =>{
  setUserName(e.target.value);
}

  const confirm = event => {
    if(!password){
      event.preventDefault();
      alert("password is empty");
      return;
    }
    if(!ConfirmedPassword){
      event.preventDefault();
      alert("confirmed password is empty");
      return;
    }
    if(!userName){
      event.preventDefault();
      alert("user name is empty");
      return;
    }
    if(password != ConfirmedPassword){
      event.preventDefault();
      alert("confirmed password does not match the password");
    }

  }

  const registerHandler  = () => {        
    setActivateRegisterForm(0);
  };



let popupClass
activateRegisterForm === 0 ? popupClass = 'popUpHidden': popupClass = 'popUpVisible'
    return (
<form className={popupClass}>
      <form className="userForm" action="http://localhost:4000/createUser" method="POST" onSubmit={confirm}>
        <a>
          <img className="icon-LogIn" src="./img/iconLogIn.png" alt="icon-LogIn"></img>
        <h2>Sign In</h2><br></br><h6>for a free account</h6></a>
        <div className="userName">
          <label>User Name</label>
          <input type="text" name='username' onChange={userNameListener}></input>
        </div>
        <div className="password">
          <label>Password</label>
          <input type="password" name='password' onChange={passwordListener}></input>
        </div>
        <div className="confirmedPassword">
          <label>Confirmed password</label>
          <input type="password" name='confirmedPassword' onChange={confPassListener}></input>
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