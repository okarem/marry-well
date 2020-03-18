import React from 'react';
import cookie from 'react-cookies';

import Login from '../../components/Forms/Login';
import Register from '../../components/Forms/Register';
import './Landing.css';

const Landing = () => {
  const [a, b] = React.useState(null);
  const [activateLoginForm, setActivateLoginForm] = React.useState(0);
  const [activateRegisterForm, setActivateRegisterForm] = React.useState(0);
  const loginClickHandler = () => {
    activateLoginForm === 0 ? setActivateLoginForm(1) : setActivateLoginForm(0);
  };
  const registerClickHandler = () => {
    activateRegisterForm === 0 ? setActivateRegisterForm(1) : setActivateRegisterForm(0);
  };

  React.useEffect(() => {
    b({ cookies: cookie.loadAll() });
    console.log(a);
  }, []);

  return (
    <div>
      <header className="headerContainer">
        <a>
          <img className="couplesImage" src="./img/wedding.png" alt="Couples"></img>
        </a>
      </header>

      <section className="content">
        <div className="logSign">
          <button className="signInButton" onClick={loginClickHandler}>
            الدخول
          </button>

          <button className="registerButton" onClick={registerClickHandler}>
            تسجيل الدخول
          </button>
        </div>
        <div className="weddingQuote">
          <h2> يقضي الكثير من الناس وقتا في التخطيط لحفلات الزفاف ، أكثر من الوقت الذي يقضونه في التخطيط للزواج. - زيغ زيغلر </h2>
        </div>

        <ul className="categoriesContainer">
          <li className="categoryItem">
            <a href="Calender">
              <img className="categoryItemImage" src="./img/calendar.png" alt="calendar"></img>
              <h3>جدول المواعيد</h3>
            </a>
          </li>

          <li className="categoryItem">
            <a href="/Guests ">
              <img className="categoryItemImage" src="./img/guests.png" alt="guests"></img>
              <h3> المعازيم</h3>
            </a>
          </li>

          <li className="categoryItem">
            <a href="/stuff">
              <img className="categoryItemImage" src="./img/shopping-bags.png" alt="items"></img>
              <h3>الاغراض</h3>
            </a>
          </li>

          <li className="categoryItem">
            <a href="/Budget">
              <img className="categoryItemImage" src="./img/cost.png" alt="budget"></img>
              <h3>تكاليف</h3>
            </a>
          </li>
        </ul>
      </section>

      <Login activateLoginForm={activateLoginForm} setActivateLoginForm={setActivateLoginForm} />

      <Register activateRegisterForm={activateRegisterForm} setActivateRegisterForm={setActivateRegisterForm} />
    </div>
  );
};
export default Landing;
