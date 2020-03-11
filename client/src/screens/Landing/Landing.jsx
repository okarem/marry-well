import React from 'react';
import Login from '../../components/Forms/Login';
import Register from '../../components/Forms/Register';
import './Landing.css';
const Landing = () => {
  const [activateLoginForm, setActivateLoginForm] = React.useState(0);
  const [activateRegisterForm, setActivateRegisterForm] = React.useState(0);
  const loginClickHandler = () => {
    document.body.style.overflow = 'hidden';
    activateLoginForm === 0 ? setActivateLoginForm(1) : setActivateLoginForm(0);
  };
  const registerClickHandler = () => {
    document.body.style.overflow = 'hidden';
    activateRegisterForm === 0 ? setActivateRegisterForm(1) : setActivateRegisterForm(0);
  };

  return (
    <div>
      <header className="headerContainer">
        <a>
          <img className="couplesImage" src="./img/wedding.png" alt="Couples"></img>
        </a>

        <button className="signInButton" onClick={loginClickHandler}>
          الدخول
        </button>

        <button className="registerButton" onClick={registerClickHandler}>
          تسجيل الدخول
        </button>
      </header>

      <section className="content">
        <div className="weddingQuote">
          <h2> يقضي الكثير من الناس وقتا في التخطيط لحفلات الزفاف ، أكثر من الوقت الذي يقضونه في التخطيط للزواج. - زيغ زيغلر </h2>
        </div>

        <ul className="categoriesContainer">
          <li className="categoryItem">
            <a href="">
              <img className="categoryItemImage" src="./img/calendar.png" alt="calendar"></img>
              <h3>جدول المواعيد</h3>
            </a>
          </li>

          <li className="categoryItem">
            <a href="/Guests">
              <img className="categoryItemImage" src="./img/guests.png" alt="guests"></img>
              <h3>المعازيم</h3>
            </a>
          </li>

          <li className="categoryItem">
            <a href="/staff">
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
