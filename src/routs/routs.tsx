import React from 'react';
import { Route } from 'react-router';
import { Navigate } from 'react-router-dom';
import Home from '../pages/Home/Home';
import User from '../pages/User/User';
import Page404 from '../pages/404/Page404';

const ROUTER_CONFIG =
  {
    '/': <Home />,
    '/user/:userLogin': <User />,
    '/404': <Page404 />,
    '/*': <Navigate to="/404" />
  };


export const MappedRouts =
  Object.entries(ROUTER_CONFIG).map(([path, component]) => (
    <Route key={path} path={path} element={component} />)
  );

