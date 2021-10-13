import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route } from 'react-router-dom'

// import
import App from './App';

const router =
  <Router>
    <Route path="/" exact component={App} />
  </Router>


ReactDOM.render(router, document.getElementById('root')
);

reportWebVitals();
