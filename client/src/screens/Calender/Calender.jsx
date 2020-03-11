import React from 'react';
import './Calender.css';
import ProgressBar from '../progressBar/progressBar'

const Calender = () => {
	const  [progressBarTitle]  = React.useState('جدول المواعيد')
	const [progressBarImage]=React.useState('./img/calendar.png')


    return(
       <div>
		<ProgressBar progressBarTitle={progressBarTitle}  progressBarImage={progressBarImage}/>
       <div
           id="current-day-info" class="color">
	  <h1 id="app-name-landscape" class="off-color center default-cursor">
	    JSCalendar
	  </h1>
     <div>
	    <h2 id="current-year" class="center default-cursor">2019</h2>
	  </div>

	  <div>
	    <h1 id="cur-day" class="current-day-heading center default-cursor">
	      Monday
	    </h1>
	    <h1 id="cur-month" class="current-month-heading center default-cursor">
	      June
	    </h1>
	    <h1 id="cur-date" class="current-date-heading center default-cursor">
	      7
	    </h1>
	  </div>
     <div class="time">
	    <span> 22 </span>: <span> 55 </span>:
	    <span> 23 </span>
	  </div>

	  <button id="theme-landscape" class="font btn">Change Theme</button>
	 </div>

    <div id="calender">
	  <h1 id="app-name-portrait" class="center ">JSCalender</h1>
	  {/* <!-- h1 'off-color' class was removed --> */}
	  <table>
	    <thead class="color">
	      <tr>
	        <th colspan="7" class="border-color">
	          <h4 id="cal-year" contenteditable="true">2018</h4>
	          <div>
	            <i class="fas fa-caret-left icon"> </i>
	            <h3 id="cal-month">july</h3>
	            <i class="fas fa-caret-right icon"> </i>
	          </div>
	        </th>
	      </tr>
         <tr>
	        <th class="weekday border-color">Sun</th>
	        <th class="weekday border-color">Mon</th>
	        <th class="weekday border-color">Tue</th>
	        <th class="weekday border-color">Wed</th>
	        <th class="weekday border-color">Thu</th>
	        <th class="weekday border-color">Fri</th>
	        <th class="weekday border-color">Sat</th>
	      </tr>
	    </thead>

	    <tbody id="table-body">
	      <tr>
	        <td>1</td>
	        <td>1</td>
	        <td>1</td>
	        <td>1</td>
	        <td>1</td>
	        <td>1</td>
	        <td>1</td>
	      </tr>
	      <tr>
	        <td>1</td>
	        <td>1</td>
	        <td>1</td>
	        <td>1</td>
	        <td>1</td>
	        <td>1</td>
	        <td>1</td>
	      </tr>
	      <tr>
	        <td>1</td>
	        <td>1</td>
	        <td>1</td>
	        <td>1</td>
	        <td>1</td>
	        <td>1</td>
	        <td>1</td>
	      </tr>
	      <tr>
	        <td>1</td>
	        <td>1</td>
	        <td class="tooltip-container">
	          <span class="day">1</span>
	          <img src="./images/note1.png" alt="note" />
	          <span class="tooltip"> this is pretty tooltip</span>
	        </td>
	        <td>1</td>
	        <td>1</td>
	        <td>1</td>
	        <td>1</td>
	      </tr>
	      <tr>
	        <td>1</td>
	        <td>1</td>
	        <td>1</td>
	        <td>1</td>
	        <td>1</td>
	        <td>1</td>
	        <td>1</td>
	      </tr>
	      <tr>
	        <td>1</td>
	        <td>1</td>
	        <td>1</td>
	        <td>1</td>
	        <td>1</td>
	        <td>1</td>
	        <td>1</td>
	      </tr>
	    </tbody>
	  </table>
    </div>
    </div>
    );
};

export default Calender;
