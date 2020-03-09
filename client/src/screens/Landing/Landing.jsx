import React from "react";
import './Landing.css';

let Landing = () => {

    return (

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
    );
};

export default Landing;
