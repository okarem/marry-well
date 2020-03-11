import React from 'react';
import './Guests.css';

const Guests = () => {
   return (
      <div>
            <div className='header'>
            <div className='My-Guests'>
               <h2> قائمة المعازيم</h2>
               <div className="icon">
             
            <img className="categoryImage" src="./img/guests.png" alt="guests"></img>
           <a href='/'>
           <img className="icon-Home" src="./img/Home.png" alt="Home"></img>
             </a>
             
             </div>
             </div>
            
            </div>
           <div className='form'>
            <div className='Add-Guests'>
               <input type="text"></input>
               <button className="Guests-Button"> اضافه</button>
            </div>
            
            <div>
               <ul className='list-Guests'>
                  <li> فاطمه </li>    
                  <li>محمود</li>
                  <li>هديل</li>
                 
               </ul>
            </div>

         </div>
      </div>

   );
};

{/* <ul className='list-Guests'>
<div className='Name'><li> فاطمه </li><button className="Delet-Button">🗑️</button></div>
<div className='Name'><li>محمود</li><button className="Delet-Button">🗑️</button></div>
<div className='Name'><li>هديل</li><button className="Delet-Button">🗑️</button></div>
</ul> */}

export default Guests;
