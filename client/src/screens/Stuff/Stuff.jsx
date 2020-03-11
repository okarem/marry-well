import React from 'react';
import './Stuff.css';
import ProgressBar from '../progressBar/progressBar'

const Stuff = () => {
   const  [progressBarTitle]  = React.useState('الاغراض')
   const [progressBarImage]=React.useState('./img/shopping-bags.png')


    return(
       <div>
         <ProgressBar progressBarTitle={progressBarTitle} progressBarImage={progressBarImage}  />
          <h1>hello</h1> 
       </div>
    );
};

export default Stuff;
