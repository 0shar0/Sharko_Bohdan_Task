import React from 'react';
import './App.scss';
import { Routes } from 'react-router-dom';
import './App.scss';
import { MappedRouts } from './routs/routs';

export const App: React.FC = () => (
  <div className={'Main'}>
    <h1>GitHub Searcher</h1>
    <Routes>
      {MappedRouts}
    </Routes>
  </div>
);

