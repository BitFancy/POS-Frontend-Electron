import React, { Component, useContext } from 'react';
import {
  HashRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import App from '../InitialPage/App';
import config from 'config';
import { setAuthToken } from '../utils/api';

import '../assets/plugins/fontawesome/css/fontawesome.min.css';
import '../assets/plugins/fontawesome/css/all.min.css';
import '../assets/css/bootstrap.min.css';
import '../assets/js/bootstrap.bundle.min.js';
import '../assets/css/font-awesome.min.css';
import '../assets/css/line-awesome.min.css';
import '../assets/css/style.css';
import RightSideBar from '../components/rightSidebar';
import { UserContext } from '../context/UserContext';

if (localStorage.token) {
  // if there is a token set axios headers for all requests
  setAuthToken(localStorage.token);
}

const MainApp = () => {
  const user = useContext(UserContext);

  // React.useEffect(() => {}, []);
  // if (!user) {
  //   return '<LoadingSpinner />';
  // }
  return (
    <Router basename={`${config.publicPath}`}>
      <RightSideBar />
      <Switch>
        <Route path="/" component={App} />
      </Switch>
    </Router>
  );
};

export default MainApp;
