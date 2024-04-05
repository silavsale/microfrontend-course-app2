import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { StylesProvider } from '@material-ui/core/styles';

import Landing from './components/Landing';
import Pricing from './components/Pricing';

export default () => {
  return (
    <div>
      <StylesProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Landing/>} />
            <Route  path="/pricing" element={<Pricing/>} />
          </Routes>
          <div>helllo</div>
        </BrowserRouter>
      </StylesProvider>
    </div>
  );
};
