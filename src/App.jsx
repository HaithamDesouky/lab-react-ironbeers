import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './views/Home';
import ListBeers from './views/ListBeers';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/allbeers" component={ListBeers} exact />
          <Route path="/" component={Home} exact />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
