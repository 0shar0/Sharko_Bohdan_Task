import React from 'react';
import { Route } from 'react-router';
import Home from '../pages/Home/Home';
import User from '../pages/User/User';

const ROUTER_CONFIG =
  {
    '/': <Home />,
    '/user/:userLogin': <User />
  };


export const MappedRouts =
  Object.entries(ROUTER_CONFIG).map(([path, component]) => (
    <Route key={path} path={path} element={component} />)
  );

