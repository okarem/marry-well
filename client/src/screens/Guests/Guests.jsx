import React from 'react';
import './Guests.css';
import ProgressBar from '../../components/progressBar/progressBar';
const Guests = () => {
  const [progressBarTitle] = React.useState('المعازيم');
  const [progressBarImage] = React.useState('./img/guests.png');
  return (
    <div>
      <ProgressBar progressBarTitle={progressBarTitle} progressBarImage={progressBarImage} />
      <h1>Guests List</h1>
    </div>
  );
};

export default Guests;
