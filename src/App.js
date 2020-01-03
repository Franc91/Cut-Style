import React from 'react';
import Home from './component/site/Home/'
import Application from './component/application/Application'

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
             <Route path="/app" component={Application} />
          </Switch>
        </Router>
    </div>
    </>
  );
}

export default App;
