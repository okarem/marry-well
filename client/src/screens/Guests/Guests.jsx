import React  from 'react';
import './Guests.css';
import ProgressBar from '../progressBar/progressBar'
const Guests = () => {
   const  [progressBarTitle]  = React.useState('المعازيم')
   const [progressBarImage]=React.useState('./img/guests.png')
   return (
      <div>
         <ProgressBar progressBarTitle={progressBarTitle}  progressBarImage={progressBarImage} />
         <div className='form'>
            <div className='Add-Guests'>
               <input type="text"></input>
               <select className="status">
                  <option value="single">اعزب</option>
                  <option value="family">عائلته</option>
                  <option value="relationship"> خطيبته</option>
               </select>
               <select className="FemaleMale">
                  <option value="female">انثى </option>
                  <option value="male">ذكر</option>
               </select>
               <button className="Guests-Button"> اضافه</button><div className='select'>

               </div>
            </div >

            <div>

               <ul className='list-Guests'>
                  <div className='Name'><li> فاطمه </li><button className="Delet-Button">🗑️</button></div>
                  <div className='Name'><li>محمود</li><button className="Delet-Button">🗑️</button></div>
                  <div className='Name'><li>هديل</li><button className="Delet-Button">🗑️</button></div>
               </ul>
            </div>

         </div>
      </div>
   );
};

export default Guests;
