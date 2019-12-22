import React from 'react';
import Home from './component/site/Home/'

import { 
  HashRouter as Router,
  Switch,
  Route } from 'react-router-dom';
  import SignUp from './component/site/SignUp';
  import SignIn from './component/site/SignIn/SignIn';


function App() {
  return (
    <>
    <div className="App">
        <Router>
          <Switch>
             <Route exact path="/" component={Home} /> 
             <Route path='/signUp' component={SignUp} />
             <Route path='/signIn' component={SignIn} />
          </Switch>
        </Router>
    </div>
    </>
  );
}

export default App;
