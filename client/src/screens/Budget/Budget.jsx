import React from 'react';
import './Budget.css';
import ProgressBar from '../progressBar/progressBar'

const Budget = () => {
   const  [progressBarTitle]  = React.useState('التكاليف')
   const [progressBarImage]=React.useState('./img/cost.png')



    return(
       <div>
         <ProgressBar progressBarTitle={progressBarTitle} progressBarImage={progressBarImage} />

          <h1>التكاليف</h1> 
       </div>
    );
};

export default Budget;
