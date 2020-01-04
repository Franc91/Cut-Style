import React from 'react';
import Home from './component/Home'
import Application from './component/application/Application';
import ThemeContextProvider from './contexts/ThemeContext'
import AuthContextProvider from './contexts/AuthContext';


import { 
  HashRouter as Router,
  Switch,
  Route } from 'react-router-dom';



function App() {
  return (
    <>
    <div className="App">
      <ThemeContextProvider>
        <AuthContextProvider>
          <Router>
            <Switch>
              <Route exact path="/" component={Home} /> 
              <Route path="/app" component={Application} />
            </Switch>
          </Router>
        </AuthContextProvider>
      </ThemeContextProvider>
    </div>
    </>
  );
}

export default App;
