import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './styles/App.scss';
import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
