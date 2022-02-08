import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <div className="container">
    <div className="card">
      <div className="card--header" />
      <img className="avatar" src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="avatar" />
      <div className="card--body">
        <div>
          <p className="text-header">Ruma Khan</p>
          <p className="text-sub">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry
          </p>
          <button className="btn" >FOLLOW</button>
        </div>
      </div>
    </div>
  </div>,
document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
