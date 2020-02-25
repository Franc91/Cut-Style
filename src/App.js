import React, { useState, useEffect } from 'react';
import Dashboard from './component/Dashboard';
import Header from './component/Header';
import Footer from './component/Footer';
import Registration from './component/Registration'
import HomePage from './component/HomePage'
import SignIn from './component/SignIn';
import SignUp from './component/SignUp';
import firebase from "./config/fbConfig";
import { 
  HashRouter as Router,
  Switch,
  Route,
  } from 'react-router-dom';
const App = ()=> {
  const [user, setUsers]  = useState(null)
  useEffect(() => {
    authListener()
  },[])
  const authListener=()=>{
    firebase.auth().onAuthStateChanged((user)=>{
        if(user){
            setUsers(user)
        }else{
            setUsers(null)
        }
    });
  }
  const setUser= (user) => {
    setUsers( user )
  }
  return ( 
    <div className="App">
      <Router>
        <Header user={user} setUser={setUser} /> {/* props jak chce przekazywac propsa dalej*/}
        <Switch>
          <Route exact path="/" render={props => <HomePage user={user} {...props} />} />
          <Route path="/info" render={props => <Dashboard user={user} {...props} />} />   {/* render props jak chce przekazywac propsa dalej*/}
          <Route path="/registration" render={props => <Registration user={user} {...props} />} />
          <Route path="/signup"render={props => <SignUp setUser={setUser} {...props} />}/> 
          <Route path="/signin" render={props => <SignIn setUser={setUser} {...props} />}/>
        </Switch>
        <Footer/>
      </Router>
    </div>
    );
}
export default App;