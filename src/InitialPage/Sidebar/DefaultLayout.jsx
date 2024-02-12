import React, { useState, useContext } from 'react';
import { Route, withRouter, useHistory } from 'react-router-dom';

import routerService from '../../Router';
import Header from './Header';
import Sidebar from './Sidebar';

const DefaultLayout = (props) => {
  let history = useHistory();
  const { match } = props;
  if (!localStorage.token) {
    history.push('/signIn');
  }
  return (
    <>
      <div className="main-wrapper">
        <Header />
        <div>
          {routerService &&
            routerService.map((route, key) => (
              <Route
                key={key}
                path={`${match.url}/${route.path}`}
                component={route.component}
              />
            ))}
        </div>
        <Sidebar />
      </div>
      <div className="sidebar-overlay"></div>
    </>
  );
};

export default withRouter(DefaultLayout);
