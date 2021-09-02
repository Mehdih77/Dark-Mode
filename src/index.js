import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Second from './Second';
import DarkModeContext from './context/DarkTheme/DarkModeContext';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Layout from './Layout';

ReactDOM.render(
  <React.StrictMode>
    <DarkModeContext>
    <Router>
      <Switch>
        <Layout>
        <Route path='/' exact component={App} />
        <Route path='/second' exact component={Second} />
        </Layout>
      </Switch>
    </Router>
      
    </DarkModeContext>
  </React.StrictMode>,
  document.getElementById('root')
);
