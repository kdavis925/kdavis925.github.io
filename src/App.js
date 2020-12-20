import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import Page from './Page';

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route render={({ location }) => <Page pathname={location.pathname} />} />
      </Switch>
    </BrowserRouter>
  );
};
