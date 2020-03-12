import React from 'react';
import './progressBar.css';

const ProgressBar = ({ progressBarTitle, progressBarImage }) => {
  return (
    <div className="all">
      <div className="header">
        <div className="My-category">
          <h2>{progressBarTitle} </h2>
          <div className="icon">
            <img className="categoryImage" src={progressBarImage} alt="icon"></img>
            <a href="/">
              <img className="icon-Home" src="./img/Home.png" alt="Home"></img>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
