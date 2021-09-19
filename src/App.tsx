import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import Landing from './screens/Landing';

export const App = () => (
  <Router>
    <div className="app">
      <header className="app-header">
        <h1>Stoic Quotes</h1>
      </header>

      <Switch>
        <Route path="/">
          <Landing />
        </Route>
      </Switch>
    </div>
  </Router>
);
