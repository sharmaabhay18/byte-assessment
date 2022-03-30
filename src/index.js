import React from 'react';
import ReactDOM from 'react-dom';
import './index.module.scss';
import { BrowserRouter as Router } from "react-router-dom";

import App from "./pages/app"

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);