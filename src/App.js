import React from 'react';
import Home from './component/site/Home/'

import { 
  HashRouter as Router,
  Switch,
  Route } from 'react-router-dom';

function App() {
  return (
    <>
    <div className="App">
        <Router>
          <Switch>
             <Route exact path="/" component={Home} /> 
          </Switch>
        </Router>
    </div>
    </>
  );
}

export default App;
