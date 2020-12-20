import React from 'react';
import { Switch, Route, HashRouter } from 'react-router-dom';

import Page from './Page';

export default function App() {
  return (
    <HashRouter>
      <Switch>
        <Route render={({ location }) => <Page pathname={location.pathname} />} />
      </Switch>
    </HashRouter>
  );
};
