import React from 'react';
import { BrowserRouter, Route , Switch  } from 'react-router-dom';


import Login from './Pages/Login';
import Recover from './Pages/Recover';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/recover" component={Recover} />

      </Switch>
    </BrowserRouter>
  );
}