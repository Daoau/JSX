import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <div className="container">
    <div className="content">
      <form action="#">

      <h1>Please sign in</h1>
      <p>Email Address:</p>
      <input type="email" name="mail" ></input>
      <p>Password:</p>
      <input type="password" name="pass" ></input>
      <br/>
      <br/>
      <input type="checkbox" name="check"/>Remember me
      
      <br/>
      <div className="button">
      <button type="button">Sign in</button>
      </div>
      
      </form>
    </div>
  </div>,
document.getElementById('root')
);

reportWebVitals();
