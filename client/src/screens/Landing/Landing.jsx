import React from 'react';
import Login from '../../components/LoginForm/Login';
import Register from '../../components/RegisterForm/Register';
import './Landing.css';
const Landing = () => {
  const [activateLoginForm, setActivateLoginForm] = React.useState(0);
  const [activateRegisterForm, setActivateRegisterForm] = React.useState(0);
  const loginClickHandler = () => {
    console.log(2)
    activateLoginForm === 0 ? setActivateLoginForm(1) : setActivateLoginForm(0);
  };
  const registerClickHandler = () => {
    activateRegisterForm === 0 ? setActivateRegisterForm(1) : setActivateRegisterForm(0);
  };

  return (
    <div>
        <div className='all'>
            <div className='img'>
                <a ><img src="./img/wedding.png" ></img>
                </a>
            </div>
            <div className='description'>
                <h2> يقضي الكثير من الناس وقتا في التخطيط لحفلات الزفاف ، أكثر من الوقت الذي يقضونه في التخطيط للزواج. - زيغ زيغلر  </h2> 
               
            </div>
            
            <div className='categories'>
            <a  href=""><img src="./img/calendar.png"></img>
            <h3>جدول المواعيد</h3></a>
            </div>
            <div className='categories'>
            <a  href="/Guests"><img src="./img/guests.png"></img>
            <h3>المعازيم</h3></a></div>
            <div className='categories'>
            <a href="/staff" ><img src="./img/shopping-bags.png"></img>
            <h3>الاغراض</h3></a></div>
            <div className='categories'>
            <a  href="/Budget" ><img src="./img/cost.png"></img>
            <h3>تكاليف</h3></a></div>
        </div>

      <h1>This will be the landing page: </h1>
      <button className="signInButton" onClick={loginClickHandler}>
        Sign In
      </button>
      <Login 
        activateLoginForm={activateLoginForm} 
        setActivateLoginForm={setActivateLoginForm} 
      />
      <button className="registerButton" onClick={registerClickHandler}>
        Register
      </button>
      <Register 
        activateRegisterForm={activateRegisterForm} 
        setActivateRegisterForm={setActivateRegisterForm} 
      />
    </div>
  );
};  
export default Landing;
