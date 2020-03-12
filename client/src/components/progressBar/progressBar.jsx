import React from 'react';
import './progressBar.css';

const ProgressBar = ({ progressBarTitle, progressBarImage }) => {
  return (
    <div className="progressHeader">
      <div className="categoryAndHeader">
        <h2>{progressBarTitle} </h2>
        <img className="categoryImage" src={progressBarImage} alt="icon"></img>
      </div>

      <ul className="navigationBar">
        <li className="navigationItems">
          <a href="/calender">جدول المواعيد</a>
        </li>
        <li className="navigationItems">
          <a href="/guests">قائمة المعازيم</a>
        </li>
        <li className="navigationItems">
          <a href="/stuff">قائمة المشتريات</a>
        </li>
        <li className="navigationItems">
          <a href="/budget">تكاليف</a>
        </li>
        <li className="navigationItems">
          <a href="/">الرئيسية</a>
        </li>
      </ul>
    </div>
  );
};

export default ProgressBar;
