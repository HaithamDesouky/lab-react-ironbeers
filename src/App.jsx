import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './views/Home';
import ListBeers from './views/ListBeers';
import SingleBeer from './views/SingleBeer';
import RandomBeer from './views/RandomBeer';
import CreateBeer from './views/CreateBeer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/createbeer" component={CreateBeer} exact />
          <Route path="/allbeers" component={ListBeers} exact />
          <Route path="/randombeer" component={RandomBeer} exact />
          <Route path="/" component={Home} exact />
          <Route path="/beers/:id" component={SingleBeer} exact />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
