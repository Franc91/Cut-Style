import React from 'react';
import Dashboard from './component/Dashboard';
import Header from './component/Header';
import Footer from './component/Footer';
import Registration from './component/Registration'
import HomePage from './component/HomePage'
import SignIn from './component/SignIn';
import SignUp from './component/SignUp';
import { 
  HashRouter as Router,
  Switch,
  Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
          <Router>
            <Header />
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route path="/info" component={Dashboard} />
              <Route path="/registration" component={Registration} />
              <Route path="/signup" component={SignUp}/>
              <Route path="/signin" component={SignIn}/>
            </Switch>
            <Footer/>
          </Router>
    </div>
  );
}

export default App;
